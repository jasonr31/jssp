import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';

/**
 * Unit tests for the K2 FedEx Shipping Rates Broker
 *
 * These tests mock XMLHttpRequest and the K2 global functions
 * to test the broker logic without a live K2 environment or FedEx account.
 */

// Mock K2 global functions
const mockPostSchema = vi.fn();
const mockPostResult = vi.fn();

interface SentRequest {
    method: string;
    url: string;
    headers: Record<string, string>;
    body: string;
}

// Mock XMLHttpRequest
class MockXMLHttpRequest {
    public onreadystatechange: (() => void) | null = null;
    public onerror: (() => void) | null = null;
    public readyState: number = 0;
    public status: number = 0;
    public responseText: string = '';
    public withCredentials: boolean = false;

    private headers: Record<string, string> = {};
    private method: string = '';
    private url: string = '';

    static requests: SentRequest[] = [];
    static rateStatus: number = 200;
    static rateBody: any = null;

    open(method: string, url: string): void {
        this.method = method;
        this.url = url;
    }

    setRequestHeader(name: string, value: string): void {
        this.headers[name] = value;
    }

    send(body: string): void {
        MockXMLHttpRequest.requests.push({ method: this.method, url: this.url, headers: this.headers, body });
        // Simulate async response
        setTimeout(() => {
            if (this.url.endsWith('/oauth/token')) {
                this.status = 200;
                this.responseText = JSON.stringify({ access_token: 'test-token', token_type: 'bearer', expires_in: 3599 });
            } else {
                this.status = MockXMLHttpRequest.rateStatus;
                this.responseText = typeof MockXMLHttpRequest.rateBody === 'string'
                    ? MockXMLHttpRequest.rateBody
                    : JSON.stringify(MockXMLHttpRequest.rateBody ?? sampleRateResponse);
            }
            this.readyState = 4;
            if (this.onreadystatechange) {
                this.onreadystatechange();
            }
        }, 0);
    }
}

// Response shaped like RatcResponseVO in FedEx's rate.json
const sampleRateResponse = {
    transactionId: '624deea6-b709-470c-8c39-4b5511281492',
    output: {
        quoteDate: '2026-11-10',
        rateReplyDetails: [
            {
                serviceType: 'FEDEX_GROUND', serviceName: 'FedEx Ground', packagingType: 'YOUR_PACKAGING',
                commit: { daysInTransit: 'TWO', dateDetail: { dayOfWeek: 'THU', dayFormat: '2026-11-12T23:59:00' } },
                ratedShipmentDetails: [
                    { rateType: 'ACCOUNT', totalBaseCharge: 23.12, totalDiscounts: 4.1, totalNetCharge: 19.02, shipmentRateDetail: { currency: 'USD' } },
                    { rateType: 'LIST', totalBaseCharge: 23.12, totalDiscounts: 0, totalNetCharge: 23.12, shipmentRateDetail: { currency: 'USD' } }
                ]
            },
            {
                serviceType: 'STANDARD_OVERNIGHT', serviceName: 'FedEx Standard Overnight', packagingType: 'YOUR_PACKAGING',
                operationalDetail: { deliveryDay: 'WED', deliveryDate: '2026-11-11T16:30:00', transitTime: 'ONE_DAY' },
                ratedShipmentDetails: [
                    { rateType: 'ACCOUNT', totalNetFedExCharge: 88.4, currency: 'USD' }
                ]
            }
        ]
    }
};

const configuration = {
    BaseUrl: 'https://apis-sandbox.fedex.com/',
    AuthMode: 'OAuth',
    ClientId: 'key&1',
    ClientSecret: 'secret=2',
    AccountNumber: '123456789',
    Locale: 'en_US'
};

const twoAddresses = {
    ShipperStreet1: '10 FedEx Pkwy',
    ShipperCity: 'Collierville',
    ShipperStateCode: 'tn',
    ShipperPostalCode: '38017',
    ShipperCountryCode: 'US',
    RecipientStreet1: '415 Lake View Rd',
    RecipientStreet2: 'Trailer C14',
    RecipientCity: 'Lynnwood',
    RecipientStateCode: 'WA',
    RecipientPostalCode: '98087',
    RecipientCountryCode: 'us',
    RecipientResidential: true,
    Weight: 12
};

function execute(objectName: string, methodName: string, properties: any, config: any = configuration): Promise<void> {
    return (globalThis as any).onexecute({ objectName, methodName, parameters: {}, properties, configuration: config, schema: {} });
}

function lastRateRequestBody(): any {
    const rateCalls = MockXMLHttpRequest.requests.filter(r => r.url.endsWith('/rate/v1/rates/quotes'));
    return JSON.parse(rateCalls[rateCalls.length - 1].body);
}

// Setup global mocks before importing the broker
beforeAll(async () => {
    (globalThis as any).metadata = undefined;
    (globalThis as any).ondescribe = undefined;
    (globalThis as any).onexecute = undefined;
    (globalThis as any).postSchema = mockPostSchema;
    (globalThis as any).postResult = mockPostResult;
    (globalThis as any).XMLHttpRequest = MockXMLHttpRequest;
    await import('./index');
});

beforeEach(() => {
    mockPostSchema.mockClear();
    mockPostResult.mockClear();
    MockXMLHttpRequest.requests = [];
    MockXMLHttpRequest.rateStatus = 200;
    MockXMLHttpRequest.rateBody = null;
});

describe('K2 FedEx Shipping Rates Broker', () => {
    describe('Metadata', () => {
        it('should define service metadata and keys', () => {
            const metadata = (globalThis as any).metadata;
            expect(metadata.systemName).toBe('FedExShippingRatesJSSP');
            expect(metadata.configuration.BaseUrl.value).toBe('https://apis-sandbox.fedex.com');
            expect(metadata.configuration.AuthMode.value).toBe('OAuth');
            expect(Object.keys(metadata.configuration)).toEqual(
                ['BaseUrl', 'AuthMode', 'ClientId', 'ClientSecret', 'StaticToken', 'AccountNumber', 'Locale']);
        });
    });

    describe('Schema', () => {
        it('should only reference defined properties in methods', async () => {
            await (globalThis as any).ondescribe({ configuration });
            const schema = mockPostSchema.mock.calls[0][0];
            for (const obj of Object.values<any>(schema.objects)) {
                for (const method of Object.values<any>(obj.methods)) {
                    for (const name of [...method.inputs, ...method.outputs, ...(method.requiredInputs || [])]) {
                        expect(obj.properties[name], name).toBeDefined();
                    }
                }
            }
            expect(schema.objects.RateQuote.methods.GetRates.type).toBe('list');
            expect(schema.objects.RateQuote.methods.GetLowestRate.type).toBe('read');
        });
    });

    describe('RateQuote.GetRates', () => {
        it('should request an OAuth token and send both full addresses', async () => {
            await execute('RateQuote', 'GetRates', { ...twoAddresses, RateTypeFilter: 'ACCOUNT', PackagingType: 'your_packaging' });

            const token = MockXMLHttpRequest.requests[0];
            expect(token.url).toBe('https://apis-sandbox.fedex.com/oauth/token');
            expect(token.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
            expect(token.body).toBe('grant_type=client_credentials&client_id=key%261&client_secret=secret%3D2');

            const rateCall = MockXMLHttpRequest.requests[1];
            expect(rateCall.headers['Authorization']).toBe('Bearer test-token');
            expect(rateCall.headers['X-locale']).toBe('en_US');

            const body = lastRateRequestBody();
            expect(body.accountNumber).toEqual({ value: '123456789' });
            expect(body.requestedShipment.shipper.address).toEqual({
                streetLines: ['10 FedEx Pkwy'], city: 'Collierville', stateOrProvinceCode: 'TN', postalCode: '38017', countryCode: 'US'
            });
            expect(body.requestedShipment.recipient.address).toEqual({
                streetLines: ['415 Lake View Rd', 'Trailer C14'], city: 'Lynnwood', stateOrProvinceCode: 'WA',
                postalCode: '98087', countryCode: 'US', residential: true
            });
            expect(body.requestedShipment.packagingType).toBe('YOUR_PACKAGING');
            expect(body.requestedShipment.rateRequestType).toEqual(['ACCOUNT']);
            expect(body.requestedShipment.pickupType).toBe('DROPOFF_AT_FEDEX_LOCATION');
            expect(body.rateRequestControlParameters).toEqual({ returnTransitTimes: true });
        });

        it('should reuse the cached token', async () => {
            await execute('RateQuote', 'GetRates', twoAddresses);
            expect(MockXMLHttpRequest.requests.length).toBe(1);
        });

        it('should map one row per service and rate type', async () => {
            await execute('RateQuote', 'GetRates', twoAddresses);
            const rows = mockPostResult.mock.calls[0][0];
            expect(rows.length).toBe(3);
            expect(rows[0]).toMatchObject({
                ServiceType: 'FEDEX_GROUND', RateType: 'ACCOUNT', TotalNetCharge: 19.02, Currency: 'USD',
                DeliveryDayOfWeek: 'THU', DeliveryDate: '2026-11-12T23:59:00', TransitTime: 'TWO'
            });
            expect(rows[2]).toMatchObject({
                ServiceType: 'STANDARD_OVERNIGHT', TotalNetCharge: 88.4, DeliveryDayOfWeek: 'WED', TransitTime: 'ONE_DAY'
            });
        });

        it('should send dimensions as whole numbers', async () => {
            await execute('RateQuote', 'GetRates', { ...twoAddresses, Length: 10.2, Width: 8, Height: 4 });
            expect(lastRateRequestBody().requestedShipment.requestedPackageLineItems[0].dimensions)
                .toEqual({ length: 11, width: 8, height: 4, units: 'IN' });
        });

        it('should surface FedEx errors', async () => {
            MockXMLHttpRequest.rateStatus = 400;
            MockXMLHttpRequest.rateBody = { errors: [{ code: 'SERVICE.PACKAGECOMBINATION.INVALID', message: 'Invalid service and packaging combination.' }] };
            await expect(execute('RateQuote', 'GetRates', twoAddresses)).rejects.toThrow(/HTTP 400 - SERVICE.PACKAGECOMBINATION.INVALID/);
        });

        it('should require country and postal code for both addresses', async () => {
            await expect(execute('RateQuote', 'GetRates', { ...twoAddresses, ShipperCountryCode: '' })).rejects.toThrow(/Ship From country code/);
            await expect(execute('RateQuote', 'GetRates', { ...twoAddresses, RecipientPostalCode: '' })).rejects.toThrow(/Ship To postal code/);
        });
    });

    describe('RateQuote.GetLowestRate', () => {
        it('should return the cheapest service', async () => {
            await execute('RateQuote', 'GetLowestRate', twoAddresses);
            expect(mockPostResult.mock.calls[0][0]).toMatchObject({ ServiceType: 'FEDEX_GROUND', TotalNetCharge: 19.02 });
        });
    });

    describe('Connection.TestConnection', () => {
        it('should report success in StaticToken mode without a token call', async () => {
            await execute('Connection', 'TestConnection', {}, { ...configuration, AuthMode: 'StaticToken', StaticToken: 'XXX' });
            expect(MockXMLHttpRequest.requests.length).toBe(0);
            expect(mockPostResult.mock.calls[0][0].Success).toBe(true);
        });
    });
});

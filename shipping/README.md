# K2 FedEx Shipping Rates Broker

A K2 Five JavaScript Service Provider (JSSP) that gets FedEx shipping rates for a package between two addresses, using the FedEx Rates and Transit Times API v1.

## Features

- **Two-Address Rating**: Full Ship From and Ship To addresses (street lines, city, state, postal code, country, residential)
- **All Services or Lowest Rate**: Return every FedEx service as a list, or only the cheapest one
- **Account and List Rates**: Choose ACCOUNT, LIST or both
- **Transit Times**: Delivery day, delivery date and transit time for each service
- **Flexible Authentication**: OAuth client credentials (FedEx), a static bearer token (mock servers) or none
- **Connection Test**: Check credentials from K2 before rating

## Target Environment

- **FedEx API**: `https://apis-sandbox.fedex.com` (sandbox) or `https://apis.fedex.com` (production)
- **Endpoint**: `POST /rate/v1/rates/quotes`
- **K2 Version**: K2 Five / Nintex Automation K2 5.8.1 and later (JSSP required)

## Prerequisites

- Node.js v22.5.1 or higher
- npm or pnpm package manager
- A FedEx Developer Portal project with the Rates and Transit Times API (free; no FedEx shipping account needed for the sandbox)

## Installation

```bash
# Clone or download this project
cd shipping

# Install dependencies
npm install
# or
pnpm install
```

## Building

```bash
# Build the bundled JavaScript file
npm run build

# Output will be in dist/index.js
```

A prebuilt `dist/index.js` is included, so you can register the broker without building. Run `npm run build` after changing `src/index.ts`.

## Testing

```bash
npm test
```

The tests mock `XMLHttpRequest`, `postSchema` and `postResult`, so they need no K2 environment or FedEx account.

## Deploying to K2

1. **Build the project** to generate `dist/index.js`

2. **Host the JavaScript file** in an accessible location:
   - Upload to a GitHub repository (use raw URL)
   - Host on a web server accessible to K2
   - Upload directly to K2 using the SmartObject method

3. **Register the Service Type** in K2:
   - Navigate to: `System > Management > SmartObjects > SmartObjects > JavaScript Service Provider`
   - Execute the **Create From URL** method
   - Provide the URL to your hosted `index.js` file, e.g.
     `https://raw.githubusercontent.com/jasonr31/jssp/main/shipping/dist/index.js`

4. **Create a Service Instance**:
   - Go to K2 Management > Service Instances
   - Create a new instance using the registered service type
   - Fill in the service keys (see Configuration)

5. **Generate SmartObjects** from the service instance

6. **Run Connection > Test Connection** to confirm the credentials work

## Configuration

| Service Key | Required | Default | Description |
|-------------|----------|---------|-------------|
| FedEx API Base URL | Yes | `https://apis-sandbox.fedex.com` | Use `https://apis.fedex.com` for production |
| Authentication Mode | Yes | `OAuth` | `OAuth`, `StaticToken` or `None` |
| API Key (client_id) | OAuth | | From the FedEx project's Test Key or Production Key tab |
| Secret Key (client_secret) | OAuth | | From the same tab |
| Static Bearer Token | StaticToken | | Sent as `Authorization: Bearer <token>` (for mock servers) |
| FedEx Account Number | Yes | | Your account, or the test shipping account from the FedEx project |
| Locale | No | `en_US` | Sent as the `X-locale` header |

## Service Objects

### 1. RateQuote

Shipping rate quotes for one package between two addresses.

#### Methods

| Method | Type | Description |
|--------|------|-------------|
| **Get Rates** | List | One row per FedEx service and rate type |
| **Get Lowest Rate** | Read | The cheapest matching service |

#### Input Properties

| Property | Type | Description |
|----------|------|-------------|
| ShipperStreet1 / ShipperStreet2 | String | Ship From street lines (optional) |
| ShipperCity | String | Ship From city (optional) |
| ShipperStateCode | String | 2-letter code; FedEx requires it for US, CA and PR |
| ShipperPostalCode | String | Ship From postal code (required) |
| ShipperCountryCode | String | ISO 2-letter code, e.g. `US` (required) |
| ShipperResidential | Boolean | Ship From is a residence |
| RecipientStreet1 / RecipientStreet2 | String | Ship To street lines (optional) |
| RecipientCity | String | Ship To city (optional) |
| RecipientStateCode | String | 2-letter code; FedEx requires it for US, CA and PR |
| RecipientPostalCode | String | Ship To postal code (required) |
| RecipientCountryCode | String | ISO 2-letter code, e.g. `US` (required) |
| RecipientResidential | Boolean | Ship To is a residence |
| Weight | Number | Package weight (required, greater than 0) |
| WeightUnits | String | `LB` (default) or `KG` |
| Length / Width / Height | Number | Optional; rounded up to whole units |
| DimensionUnits | String | `IN` (default) or `CM` |
| PackagingType | String | Optional, e.g. `YOUR_PACKAGING`, `FEDEX_ENVELOPE`, `FEDEX_PAK` |
| ShipDate | String | `YYYY-MM-DD` (optional) |
| ServiceTypeFilter | String | Optional, e.g. `FEDEX_GROUND`; blank returns all services |
| PickupType | String | `DROPOFF_AT_FEDEX_LOCATION` (default), `CONTACT_FEDEX_TO_SCHEDULE` or `USE_SCHEDULED_PICKUP` |
| RateTypeFilter | String | `BOTH` (default), `ACCOUNT` or `LIST` |
| ReturnTransitTimes | Boolean | Default `true` |

#### Output Properties

| Property | Type | Description |
|----------|------|-------------|
| ServiceType | String | e.g. `FEDEX_GROUND` |
| ServiceName | String | e.g. `FedEx Ground` |
| PackagingType | String | Packaging FedEx rated |
| RateType | String | `ACCOUNT` or `LIST` |
| TotalBaseCharge | Number | Base charge |
| TotalDiscounts | Number | Discounts applied |
| TotalNetCharge | Number | Net charge |
| Currency | String | e.g. `USD` |
| DeliveryDayOfWeek | String | e.g. `THU` |
| DeliveryDate | String | Delivery date and time |
| TransitTime | String | e.g. `TWO_DAYS` |
| TransactionId | String | FedEx transaction ID |

### 2. Connection

| Method | Type | Description |
|--------|------|-------------|
| **Test Connection** | Execute | In OAuth mode, requests a token; returns Success, Message and ExpiresIn |

## Example Queries

**All services between two addresses (FedEx sandbox case RT0272):**
```
ShipperStateCode: "AZ"
ShipperPostalCode: "86001"
ShipperCountryCode: "US"
RecipientStateCode: "CA"
RecipientPostalCode: "90017"
RecipientCountryCode: "US"
Weight: 10
PackagingType: "YOUR_PACKAGING"
```

**Two full street addresses (FedEx sandbox case RT0225):**
```
ShipperStreet1: "501RaidersWay"
ShipperCity: "Henderson"
ShipperStateCode: "NV"
ShipperPostalCode: "89052"
ShipperCountryCode: "US"
RecipientStreet1: "8687NCENTRALEXPYSTE922"
RecipientCity: "DALLAS"
RecipientStateCode: "TX"
RecipientPostalCode: "75225-4557"
RecipientCountryCode: "US"
Weight: 32.94
PickupType: "USE_SCHEDULED_PICKUP"
ServiceTypeFilter: "FEDEX_GROUND"
RateTypeFilter: "ACCOUNT"
ReturnTransitTimes: false
```

## FedEx Sandbox Notes

- The FedEx sandbox is virtualized: it returns canned responses for the sample transactions in FedEx's Rates and Transit Times JSON API collection. Start with inputs that match a sample (like the examples above).
- FedEx's samples use the placeholder account number `123456789`. Try the test shipping account from your FedEx project first.
- The `body` schema in FedEx's OpenAPI spec is a `oneOf` that a normal request matches more than once. Mock servers generated from that spec can reject every request; the real request schema is `Full_Schema_Quote_Rate`.

## Project Structure

```
shipping/
├── src/
│   ├── index.ts          # Broker: metadata, ondescribe, onexecute
│   └── index.test.ts     # Unit tests (Vitest)
├── dist/
│   └── index.js          # Built broker to register in K2
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

## License

MIT

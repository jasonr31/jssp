//Generated with the K2JSSPGenerator tool

import '@k2oss/k2-broker-core';

metadata = {
    "systemName": "ofac.api.jssp.broker",
    "displayName": "OFAC API JSSP Broker",
    "description": "OFAC API service documentation. ",
    "configuration": {
        "ServiceURL": {
            "displayName": "Service URL",
            "type": "string",
            "value": "https://api.ofac-api.com"
        }
    }
}

ondescribe = async function({
    configuration
}): Promise < void > {
    postSchema({
        "objects": {
            "com.ofacapi.service.v4.Case": {
                "displayName": "com.ofacapi.service.v4.Case",
                "description": "com.ofacapi.service.v4.Case",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "string",
                        "description": "type Value"
                    },
                    "dob": {
                        "displayName": "dob",
                        "type": "string",
                        "description": "dob Value"
                    },
                    "gender": {
                        "displayName": "gender",
                        "type": "string",
                        "description": "gender Value"
                    },
                    "citizenship": {
                        "displayName": "citizenship",
                        "type": "string",
                        "description": "citizenship Value"
                    },
                    "nationality": {
                        "displayName": "nationality",
                        "type": "string",
                        "description": "nationality Value"
                    },
                    "address": {
                        "displayName": "address is a JSON Object of com.rockandwelch.entity.model.Address",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.Address to resolve"
                    },
                    "phoneNumber": {
                        "displayName": "phoneNumber",
                        "type": "string",
                        "description": "phoneNumber Value"
                    },
                    "emailAddress": {
                        "displayName": "emailAddress",
                        "type": "string",
                        "description": "emailAddress Value"
                    },
                    "cryptoId": {
                        "displayName": "cryptoId",
                        "type": "string",
                        "description": "cryptoId Value"
                    },
                    "identification": {
                        "displayName": "identification is a JSON Object Array of com.rockandwelch.entity.model.Identification",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Identification to resolve"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v4.Case Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "name", "type", "dob", "gender", "citizenship", "nationality", "address", "phoneNumber", "emailAddress", "cryptoId", "identification"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "name", "type", "dob", "gender", "citizenship", "nationality", "address", "phoneNumber", "emailAddress", "cryptoId", "identification"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v4.CaseRequest": {
                "displayName": "com.ofacapi.service.v4.CaseRequest",
                "description": "com.ofacapi.service.v4.CaseRequest",
                "properties": {
                    "apiKey": {
                        "displayName": "apiKey",
                        "type": "string",
                        "description": "apiKey Value"
                    },
                    "minScore": {
                        "displayName": "minScore",
                        "type": "number",
                        "description": "minScore Value"
                    },
                    "sources": {
                        "displayName": "sources",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "sources Value"
                    },
                    "types": {
                        "displayName": "types",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "types Value"
                    },
                    "cases": {
                        "displayName": "cases is a JSON Object Array of com.ofacapi.service.v4.Case",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.Case to resolve"
                    }
                },
                "methods": {
                    "post": {
                        "displayName": "post",
                        "type": "create",
                        "inputs": ["apiKey", "minScore", "sources", "types", "cases"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["error", "errorMessage", "sources", "results"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v4/search",
                            "httpResponseObject": ""
                        }
                    },
                    "post_1": {
                        "displayName": "post_1",
                        "type": "create",
                        "inputs": ["apiKey", "minScore", "sources", "types", "cases"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["error", "errorMessage", "sources", "results"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v4/screen",
                            "httpResponseObject": ""
                        }
                    }
                }
            },
            "com.rockandwelch.entity.model.Address": {
                "displayName": "com.rockandwelch.entity.model.Address",
                "description": "com.rockandwelch.entity.model.Address",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "address1": {
                        "displayName": "address1",
                        "type": "string",
                        "description": "address1 Value"
                    },
                    "address2": {
                        "displayName": "address2",
                        "type": "string",
                        "description": "address2 Value"
                    },
                    "city": {
                        "displayName": "city",
                        "type": "string",
                        "description": "city Value"
                    },
                    "stateOrProvince": {
                        "displayName": "stateOrProvince",
                        "type": "string",
                        "description": "stateOrProvince Value"
                    },
                    "postalCode": {
                        "displayName": "postalCode",
                        "type": "string",
                        "description": "postalCode Value"
                    },
                    "country": {
                        "displayName": "country",
                        "type": "string",
                        "description": "country Value"
                    },
                    "fullAddress": {
                        "displayName": "fullAddress",
                        "type": "string",
                        "description": "fullAddress Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Address Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"],
                        "outputs": ["JSON.String"]
                    },
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Address Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"]
                    }
                }
            },
            "com.rockandwelch.entity.model.Identification": {
                "displayName": "com.rockandwelch.entity.model.Identification",
                "description": "com.rockandwelch.entity.model.Identification",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "string",
                        "description": "type Value"
                    },
                    "idNumber": {
                        "displayName": "idNumber",
                        "type": "string",
                        "description": "idNumber Value"
                    },
                    "country": {
                        "displayName": "country",
                        "type": "string",
                        "description": "country Value"
                    },
                    "issueDate": {
                        "displayName": "issueDate",
                        "type": "string",
                        "description": "issueDate Value"
                    },
                    "expirationDate": {
                        "displayName": "expirationDate",
                        "type": "string",
                        "description": "expirationDate Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Identification Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "type", "idNumber", "country", "issueDate", "expirationDate"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "type", "idNumber", "country", "issueDate", "expirationDate"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v4.SourceData": {
                "displayName": "com.ofacapi.service.v4.SourceData",
                "description": "com.ofacapi.service.v4.SourceData",
                "properties": {
                    "source": {
                        "displayName": "source",
                        "type": "string",
                        "description": "source Value"
                    },
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "publishDate": {
                        "displayName": "publishDate",
                        "type": "string",
                        "description": "publishDate Value"
                    },
                    "downloadDate": {
                        "displayName": "downloadDate",
                        "type": "string",
                        "description": "downloadDate Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v4.SourceData Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["source", "name", "publishDate", "downloadDate"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["source", "name", "publishDate", "downloadDate"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.AdditionalInformation": {
                "displayName": "com.rockandwelch.entity.model.AdditionalInformation",
                "description": "com.rockandwelch.entity.model.AdditionalInformation",
                "properties": {
                    "label": {
                        "displayName": "label",
                        "type": "string",
                        "description": "label Value"
                    },
                    "value": {
                        "displayName": "value",
                        "type": "string",
                        "description": "value Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.AdditionalInformation Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["label", "value"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["label", "value"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.AircraftData": {
                "displayName": "com.rockandwelch.entity.model.AircraftData",
                "description": "com.rockandwelch.entity.model.AircraftData",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "owner": {
                        "displayName": "owner",
                        "type": "string",
                        "description": "owner Value"
                    },
                    "registrationNumber": {
                        "displayName": "registrationNumber",
                        "type": "string",
                        "description": "registrationNumber Value"
                    },
                    "manufacturer": {
                        "displayName": "manufacturer",
                        "type": "string",
                        "description": "manufacturer Value"
                    },
                    "model": {
                        "displayName": "model",
                        "type": "string",
                        "description": "model Value"
                    },
                    "year": {
                        "displayName": "year",
                        "type": "string",
                        "description": "year Value"
                    },
                    "icaoCode": {
                        "displayName": "icaoCode",
                        "type": "string",
                        "description": "icaoCode Value"
                    },
                    "serialNumber": {
                        "displayName": "serialNumber",
                        "type": "string",
                        "description": "serialNumber Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.AircraftData Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "icaoCode", "serialNumber"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "icaoCode", "serialNumber"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.Alias": {
                "displayName": "com.rockandwelch.entity.model.Alias",
                "description": "com.rockandwelch.entity.model.Alias",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "firstName": {
                        "displayName": "firstName",
                        "type": "string",
                        "description": "firstName Value"
                    },
                    "lastName": {
                        "displayName": "lastName",
                        "type": "string",
                        "description": "lastName Value"
                    },
                    "nameFormatted": {
                        "displayName": "nameFormatted",
                        "type": "string",
                        "description": "nameFormatted Value"
                    },
                    "comment": {
                        "displayName": "comment",
                        "type": "string",
                        "description": "comment Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Alias Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "name", "firstName", "lastName", "nameFormatted", "comment"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "name", "firstName", "lastName", "nameFormatted", "comment"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.CryptoWallet": {
                "displayName": "com.rockandwelch.entity.model.CryptoWallet",
                "description": "com.rockandwelch.entity.model.CryptoWallet",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "publicKey": {
                        "displayName": "publicKey",
                        "type": "string",
                        "description": "publicKey Value"
                    },
                    "description": {
                        "displayName": "description",
                        "type": "string",
                        "description": "description Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.CryptoWallet Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "publicKey", "description"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "publicKey", "description"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.Entity": {
                "displayName": "com.rockandwelch.entity.model.Entity",
                "description": "com.rockandwelch.entity.model.Entity",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "string",
                        "description": "type Value"
                    },
                    "categories": {
                        "displayName": "categories",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "categories Value"
                    },
                    "source": {
                        "displayName": "source",
                        "type": "string",
                        "description": "source Value"
                    },
                    "sourceId": {
                        "displayName": "sourceId",
                        "type": "string",
                        "description": "sourceId Value"
                    },
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "nameFormatted": {
                        "displayName": "nameFormatted",
                        "type": "string",
                        "description": "nameFormatted Value"
                    },
                    "description": {
                        "displayName": "description",
                        "type": "string",
                        "description": "description Value"
                    },
                    "entityLink": {
                        "displayName": "entityLink",
                        "type": "string",
                        "description": "entityLink Value"
                    },
                    "alias": {
                        "displayName": "alias is a JSON Object Array of com.rockandwelch.entity.model.Alias",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Alias to resolve"
                    },
                    "sourceLinks": {
                        "displayName": "sourceLinks",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "sourceLinks Value"
                    },
                    "additionalSanctions": {
                        "displayName": "additionalSanctions",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "additionalSanctions Value"
                    },
                    "programs": {
                        "displayName": "programs",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "programs Value"
                    },
                    "remarks": {
                        "displayName": "remarks",
                        "type": "string",
                        "description": "remarks Value"
                    },
                    "effectiveDate": {
                        "displayName": "effectiveDate",
                        "type": "string",
                        "description": "effectiveDate Value"
                    },
                    "expirationDate": {
                        "displayName": "expirationDate",
                        "type": "string",
                        "description": "expirationDate Value"
                    },
                    "addresses": {
                        "displayName": "addresses is a JSON Object Array of com.rockandwelch.entity.model.Address",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Address to resolve"
                    },
                    "identifications": {
                        "displayName": "identifications is a JSON Object Array of com.rockandwelch.entity.model.Identification",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Identification to resolve"
                    },
                    "phoneNumbers": {
                        "displayName": "phoneNumbers",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "phoneNumbers Value"
                    },
                    "websites": {
                        "displayName": "websites",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "websites Value"
                    },
                    "emailAddresses": {
                        "displayName": "emailAddresses",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "emailAddresses Value"
                    },
                    "cryptoWallets": {
                        "displayName": "cryptoWallets is a JSON Object Array of com.rockandwelch.entity.model.CryptoWallet",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.CryptoWallet to resolve"
                    },
                    "additionalInformation": {
                        "displayName": "additionalInformation is a JSON Object Array of com.rockandwelch.entity.model.AdditionalInformation",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.AdditionalInformation to resolve"
                    },
                    "personDetails": {
                        "displayName": "personDetails is a JSON Object of com.rockandwelch.entity.model.PersonData",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.PersonData to resolve"
                    },
                    "organizationDetails": {
                        "displayName": "organizationDetails is a JSON Object of com.rockandwelch.entity.model.OrganizationData",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.OrganizationData to resolve"
                    },
                    "vesselDetails": {
                        "displayName": "vesselDetails is a JSON Object of com.rockandwelch.entity.model.VesselData",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.VesselData to resolve"
                    },
                    "aircraftDetails": {
                        "displayName": "aircraftDetails is a JSON Object of com.rockandwelch.entity.model.AircraftData",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.AircraftData to resolve"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "getEntities": {
                        "displayName": "getEntities",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "sources": {
                                "displayName": "sources",
                                "type": "string"
                            },
                            "types": {
                                "displayName": "types",
                                "type": "string"
                            },
                            "categories": {
                                "displayName": "categories",
                                "type": "string"
                            }
                        },
                        "requiredParameters": [],
                        "outputs": ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"],
                        "data": {
                            "httpMethod": "get",
                            "httpPath": "/v4/entities",
                            "httpResponseObject": ""
                        }
                    },
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Entity Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"],
                        "outputs": ["JSON.String"]
                    },
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.Entity Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"]
                    }
                }
            },
            "com.rockandwelch.entity.model.OrganizationData": {
                "displayName": "com.rockandwelch.entity.model.OrganizationData",
                "description": "com.rockandwelch.entity.model.OrganizationData",
                "properties": {
                    "registrationNumbers": {
                        "displayName": "registrationNumbers",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "registrationNumbers Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.OrganizationData Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["registrationNumbers"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["registrationNumbers"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.PersonData": {
                "displayName": "com.rockandwelch.entity.model.PersonData",
                "description": "com.rockandwelch.entity.model.PersonData",
                "properties": {
                    "firstName": {
                        "displayName": "firstName",
                        "type": "string",
                        "description": "firstName Value"
                    },
                    "middleName": {
                        "displayName": "middleName",
                        "type": "string",
                        "description": "middleName Value"
                    },
                    "lastName": {
                        "displayName": "lastName",
                        "type": "string",
                        "description": "lastName Value"
                    },
                    "title": {
                        "displayName": "title",
                        "type": "string",
                        "description": "title Value"
                    },
                    "gender": {
                        "displayName": "gender",
                        "type": "string",
                        "description": "gender Value"
                    },
                    "birthDates": {
                        "displayName": "birthDates",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "birthDates Value"
                    },
                    "birthPlaces": {
                        "displayName": "birthPlaces",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "birthPlaces Value"
                    },
                    "citizenships": {
                        "displayName": "citizenships",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "citizenships Value"
                    },
                    "nationalities": {
                        "displayName": "nationalities",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "nationalities Value"
                    },
                    "positions": {
                        "displayName": "positions",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "positions Value"
                    },
                    "education": {
                        "displayName": "education",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "education Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.PersonData Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["firstName", "middleName", "lastName", "title", "gender", "birthDates", "birthPlaces", "citizenships", "nationalities", "positions", "education"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["firstName", "middleName", "lastName", "title", "gender", "birthDates", "birthPlaces", "citizenships", "nationalities", "positions", "education"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.entity.model.VesselData": {
                "displayName": "com.rockandwelch.entity.model.VesselData",
                "description": "com.rockandwelch.entity.model.VesselData",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "owner": {
                        "displayName": "owner",
                        "type": "string",
                        "description": "owner Value"
                    },
                    "registrationNumber": {
                        "displayName": "registrationNumber",
                        "type": "string",
                        "description": "registrationNumber Value"
                    },
                    "manufacturer": {
                        "displayName": "manufacturer",
                        "type": "string",
                        "description": "manufacturer Value"
                    },
                    "model": {
                        "displayName": "model",
                        "type": "string",
                        "description": "model Value"
                    },
                    "year": {
                        "displayName": "year",
                        "type": "string",
                        "description": "year Value"
                    },
                    "callSign": {
                        "displayName": "callSign",
                        "type": "string",
                        "description": "callSign Value"
                    },
                    "vesselType": {
                        "displayName": "vesselType",
                        "type": "string",
                        "description": "vesselType Value"
                    },
                    "flag": {
                        "displayName": "flag",
                        "type": "string",
                        "description": "flag Value"
                    },
                    "imoNumber": {
                        "displayName": "imoNumber",
                        "type": "string",
                        "description": "imoNumber Value"
                    },
                    "tonnage": {
                        "displayName": "tonnage",
                        "type": "string",
                        "description": "tonnage Value"
                    },
                    "grossTonnage": {
                        "displayName": "grossTonnage",
                        "type": "string",
                        "description": "grossTonnage Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.entity.model.VesselData Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "callSign", "vesselType", "flag", "imoNumber", "tonnage", "grossTonnage"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "callSign", "vesselType", "flag", "imoNumber", "tonnage", "grossTonnage"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.search.manager.domain.Match": {
                "displayName": "com.rockandwelch.search.manager.domain.Match",
                "description": "com.rockandwelch.search.manager.domain.Match",
                "properties": {
                    "score": {
                        "displayName": "score",
                        "type": "number",
                        "description": "score Value"
                    },
                    "matchSummary": {
                        "displayName": "matchSummary is a JSON Object of com.rockandwelch.search.manager.domain.MatchSummary",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.search.manager.domain.MatchSummary to resolve"
                    },
                    "sanction": {
                        "displayName": "sanction is a JSON Object of com.rockandwelch.entity.model.Entity",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.Entity to resolve"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.search.manager.domain.Match Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["score", "matchSummary", "sanction"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["score", "matchSummary", "sanction"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.search.manager.domain.MatchField": {
                "displayName": "com.rockandwelch.search.manager.domain.MatchField",
                "description": "com.rockandwelch.search.manager.domain.MatchField",
                "properties": {
                    "similarity": {
                        "displayName": "similarity",
                        "type": "string",
                        "description": "similarity Value"
                    },
                    "fieldName": {
                        "displayName": "fieldName",
                        "type": "string",
                        "description": "fieldName Value"
                    },
                    "caseField": {
                        "displayName": "caseField",
                        "type": "string",
                        "description": "caseField Value"
                    },
                    "sanctionField": {
                        "displayName": "sanctionField",
                        "type": "string",
                        "description": "sanctionField Value"
                    },
                    "sanctionFieldNote": {
                        "displayName": "sanctionFieldNote",
                        "type": "string",
                        "description": "sanctionFieldNote Value"
                    },
                    "sanctionFieldId": {
                        "displayName": "sanctionFieldId",
                        "type": "string",
                        "description": "sanctionFieldId Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.search.manager.domain.MatchField Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["similarity", "fieldName", "caseField", "sanctionField", "sanctionFieldNote", "sanctionFieldId"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["similarity", "fieldName", "caseField", "sanctionField", "sanctionFieldNote", "sanctionFieldId"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.search.manager.domain.MatchSummary": {
                "displayName": "com.rockandwelch.search.manager.domain.MatchSummary",
                "description": "com.rockandwelch.search.manager.domain.MatchSummary",
                "properties": {
                    "matchFields": {
                        "displayName": "matchFields is a JSON Object Array of com.rockandwelch.search.manager.domain.MatchField",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.MatchField to resolve"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.search.manager.domain.MatchSummary Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["matchFields"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["matchFields"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.rockandwelch.search.manager.domain.ScreenResult": {
                "displayName": "com.rockandwelch.search.manager.domain.ScreenResult",
                "description": "com.rockandwelch.search.manager.domain.ScreenResult",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "matchCount": {
                        "displayName": "matchCount",
                        "type": "number",
                        "description": "matchCount Value"
                    },
                    "matches": {
                        "displayName": "matches is a JSON Object Array of com.rockandwelch.search.manager.domain.Match",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.Match to resolve"
                    },
                    "matchesAndCount": {
                        "displayName": "matchesAndCount is a JSON Object Array of com.rockandwelch.search.manager.domain.Match",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.Match to resolve"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.rockandwelch.search.manager.domain.ScreenResult Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["id", "name", "matchCount", "matches", "matchesAndCount"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["id", "name", "matchCount", "matches", "matchesAndCount"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v4.bulk.JobRequest": {
                "displayName": "com.ofacapi.service.v4.bulk.JobRequest",
                "description": "com.ofacapi.service.v4.bulk.JobRequest",
                "properties": {
                    "apiKey": {
                        "displayName": "apiKey",
                        "type": "string",
                        "description": "apiKey Value"
                    },
                    "sources": {
                        "displayName": "sources",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "sources Value"
                    },
                    "types": {
                        "displayName": "types",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "types Value"
                    },
                    "cases": {
                        "displayName": "cases is a JSON Object Array of com.ofacapi.service.v4.Case",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.Case to resolve"
                    },
                    "webhookUrl": {
                        "displayName": "webhookUrl",
                        "type": "string",
                        "description": "webhookUrl Value"
                    },
                    "jobName": {
                        "displayName": "jobName",
                        "type": "string",
                        "description": "jobName Value"
                    }
                },
                "methods": {
                    "post_2": {
                        "displayName": "post_2",
                        "type": "create",
                        "inputs": ["apiKey", "sources", "types", "cases", "webhookUrl", "jobName"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["id", "error", "errorMessage", "jobName", "startTime", "endTime", "totalCases", "estimatedRunTime", "status", "webhookUrl", "reportUrl"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v4/beta/jobs",
                            "httpResponseObject": ""
                        }
                    }
                }
            },
            "com.ofacapi.dao.entity.Job": {
                "displayName": "com.ofacapi.dao.entity.Job",
                "description": "com.ofacapi.dao.entity.Job",
                "properties": {
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    },
                    "error": {
                        "displayName": "error",
                        "type": "string",
                        "description": "error Value"
                    },
                    "errorMessage": {
                        "displayName": "errorMessage",
                        "type": "string",
                        "description": "errorMessage Value"
                    },
                    "jobName": {
                        "displayName": "jobName",
                        "type": "string",
                        "description": "jobName Value"
                    },
                    "startTime": {
                        "displayName": "startTime",
                        "type": "string",
                        "description": "startTime Value"
                    },
                    "endTime": {
                        "displayName": "endTime",
                        "type": "string",
                        "description": "endTime Value"
                    },
                    "totalCases": {
                        "displayName": "totalCases",
                        "type": "number",
                        "description": "totalCases Value"
                    },
                    "estimatedRunTime": {
                        "displayName": "estimatedRunTime",
                        "type": "number",
                        "description": "estimatedRunTime Value"
                    },
                    "status": {
                        "displayName": "status",
                        "type": "string",
                        "description": "status Value"
                    },
                    "webhookUrl": {
                        "displayName": "webhookUrl",
                        "type": "string",
                        "description": "webhookUrl Value"
                    },
                    "reportUrl": {
                        "displayName": "reportUrl",
                        "type": "string",
                        "description": "reportUrl Value"
                    }
                },
                "methods": {
                    "status": {
                        "displayName": "status",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "id": {
                                "displayName": "id",
                                "type": "string"
                            }
                        },
                        "requiredParameters": ["id"],
                        "outputs": ["id", "error", "errorMessage", "jobName", "startTime", "endTime", "totalCases", "estimatedRunTime", "status", "webhookUrl", "reportUrl"],
                        "data": {
                            "httpMethod": "get",
                            "httpPath": "/v4/beta/jobs/{id}",
                            "httpResponseObject": ""
                        }
                    }
                }
            },
            "com.ofacapi.listentry.ID": {
                "displayName": "com.ofacapi.listentry.ID",
                "description": "com.ofacapi.listentry.ID",
                "properties": {
                    "type": {
                        "displayName": "type",
                        "type": "string",
                        "description": "type Value"
                    },
                    "id": {
                        "displayName": "id",
                        "type": "string",
                        "description": "id Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.listentry.ID Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["type", "id"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["type", "id"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.Case": {
                "displayName": "com.ofacapi.service.v3.Case",
                "description": "com.ofacapi.service.v3.Case",
                "properties": {
                    "name": {
                        "displayName": "name",
                        "type": "string",
                        "description": "name Value"
                    },
                    "dob": {
                        "displayName": "dob",
                        "type": "string",
                        "description": "dob Value"
                    },
                    "citizenship": {
                        "displayName": "citizenship",
                        "type": "string",
                        "description": "citizenship Value"
                    },
                    "phoneNumber": {
                        "displayName": "phoneNumber",
                        "type": "string",
                        "description": "phoneNumber Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "string",
                        "description": "type Value"
                    },
                    "address": {
                        "displayName": "address is a JSON Object of com.ofacapi.service.v3.CaseAddress",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CaseAddress to resolve"
                    },
                    "passport": {
                        "displayName": "passport is a JSON Object of com.ofacapi.service.v3.CasePassport",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CasePassport to resolve"
                    },
                    "driversLicense": {
                        "displayName": "driversLicense is a JSON Object of com.ofacapi.service.v3.CaseDriversLicense",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CaseDriversLicense to resolve"
                    },
                    "gender": {
                        "displayName": "gender",
                        "type": "string",
                        "description": "gender Value"
                    },
                    "ssn": {
                        "displayName": "ssn",
                        "type": "string",
                        "description": "ssn Value"
                    },
                    "taxId": {
                        "displayName": "taxId",
                        "type": "string",
                        "description": "taxId Value"
                    },
                    "digitalCurrencyAddress": {
                        "displayName": "digitalCurrencyAddress",
                        "type": "string",
                        "description": "digitalCurrencyAddress Value"
                    },
                    "ids": {
                        "displayName": "ids is a JSON Object Array of com.ofacapi.listentry.ID",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.ID to resolve"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.Case Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["name", "dob", "citizenship", "phoneNumber", "type", "address", "passport", "driversLicense", "gender", "ssn", "taxId", "digitalCurrencyAddress", "ids"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["name", "dob", "citizenship", "phoneNumber", "type", "address", "passport", "driversLicense", "gender", "ssn", "taxId", "digitalCurrencyAddress", "ids"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.CaseAddress": {
                "displayName": "com.ofacapi.service.v3.CaseAddress",
                "description": "com.ofacapi.service.v3.CaseAddress",
                "properties": {
                    "address1": {
                        "displayName": "address1",
                        "type": "string",
                        "description": "address1 Value"
                    },
                    "address2": {
                        "displayName": "address2",
                        "type": "string",
                        "description": "address2 Value"
                    },
                    "address3": {
                        "displayName": "address3",
                        "type": "string",
                        "description": "address3 Value"
                    },
                    "address4": {
                        "displayName": "address4",
                        "type": "string",
                        "description": "address4 Value"
                    },
                    "city": {
                        "displayName": "city",
                        "type": "string",
                        "description": "city Value"
                    },
                    "stateOrProvince": {
                        "displayName": "stateOrProvince",
                        "type": "string",
                        "description": "stateOrProvince Value"
                    },
                    "postalCode": {
                        "displayName": "postalCode",
                        "type": "string",
                        "description": "postalCode Value"
                    },
                    "country": {
                        "displayName": "country",
                        "type": "string",
                        "description": "country Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.CaseAddress Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["address1", "address2", "address3", "address4", "city", "stateOrProvince", "postalCode", "country"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["address1", "address2", "address3", "address4", "city", "stateOrProvince", "postalCode", "country"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.CaseDriversLicense": {
                "displayName": "com.ofacapi.service.v3.CaseDriversLicense",
                "description": "com.ofacapi.service.v3.CaseDriversLicense",
                "properties": {
                    "licenseNumber": {
                        "displayName": "licenseNumber",
                        "type": "string",
                        "description": "licenseNumber Value"
                    },
                    "licenseCountry": {
                        "displayName": "licenseCountry",
                        "type": "string",
                        "description": "licenseCountry Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.CaseDriversLicense Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["licenseNumber", "licenseCountry"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["licenseNumber", "licenseCountry"],
                        "outputs": ["JSON.String"]
                    },
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.CaseDriversLicense Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["licenseNumber", "licenseCountry"]
                    }
                }
            },
            "com.ofacapi.service.v3.CasePassport": {
                "displayName": "com.ofacapi.service.v3.CasePassport",
                "description": "com.ofacapi.service.v3.CasePassport",
                "properties": {
                    "passportNumber": {
                        "displayName": "passportNumber",
                        "type": "string",
                        "description": "passportNumber Value"
                    },
                    "passportCountry": {
                        "displayName": "passportCountry",
                        "type": "string",
                        "description": "passportCountry Value"
                    },
                    "JSON.String": {
                        "displayName": "Packed JSON Item",
                        "type": "string",
                        "extendedType": "k2.com/2019/memo"
                    }
                },
                "methods": {
                    "UnpackJSONObject": {
                        "displayName": "Unpack JSON Object",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.CasePassport Object String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["passportNumber", "passportCountry"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["passportNumber", "passportCountry"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.SearchRequestV3": {
                "displayName": "com.ofacapi.service.v3.SearchRequestV3",
                "description": "com.ofacapi.service.v3.SearchRequestV3",
                "properties": {
                    "apiKey": {
                        "displayName": "apiKey",
                        "type": "string",
                        "description": "apiKey Value"
                    },
                    "includeAlias": {
                        "displayName": "includeAlias",
                        "type": "boolean",
                        "description": "includeAlias Value"
                    },
                    "informalName": {
                        "displayName": "informalName",
                        "type": "boolean",
                        "description": "informalName Value"
                    },
                    "minScore": {
                        "displayName": "minScore",
                        "type": "number",
                        "description": "minScore Value"
                    },
                    "format": {
                        "displayName": "format",
                        "type": "string",
                        "description": "format Value"
                    },
                    "source": {
                        "displayName": "source",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "source Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "type Value"
                    },
                    "cases": {
                        "displayName": "cases is a JSON Object Array of com.ofacapi.service.v3.Case",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v3.Case to resolve"
                    }
                },
                "methods": {
                    "post_3": {
                        "displayName": "post_3",
                        "type": "create",
                        "inputs": ["apiKey", "includeAlias", "informalName", "minScore", "format", "source", "type", "cases"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["error", "errorMessage", "sourcesUsed", "matches"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v3/",
                            "httpResponseObject": ""
                        }
                    },
                    "post_4": {
                        "displayName": "post_4",
                        "type": "create",
                        "inputs": ["apiKey", "includeAlias", "informalName", "minScore", "format", "source", "type", "cases"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["error", "errorMessage", "sourcesUsed", "matches"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v3",
                            "httpResponseObject": ""
                        }
                    }
                }
            },
            "com.ofacapi.listentry.AKA": {
                "displayName": "com.ofacapi.listentry.AKA",
                "description": "com.ofacapi.listentry.AKA",
                "properties": {
                    "score": {
                        "displayName": "score",
                        "type": "number",
                        "description": "score Value"
                    },
                    "uid": {
                        "displayName": "uid",
                        "type": "number",
                        "description": "uid Value"
                    },
                    "category": {
                        "displayName": "category",
                        "type": "string",
                        "description": "category Value"
                    },
                    "lastName": {
                        "displayName": "lastName",
                        "type": "string",
                        "description": "lastName Value"
                    },
                    "firstName": {
                        "displayName": "firstName",
                        "type": "string",
                        "description": "firstName Value"
                    },
                    "city": {
                        "displayName": "city",
                        "type": "string",
                        "description": "city Value"
                    },
                    "country": {
                        "displayName": "country",
                        "type": "string",
                        "description": "country Value"
                    },
                    "dob": {
                        "displayName": "dob",
                        "type": "string",
                        "description": "dob Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.listentry.AKA Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["score", "uid", "category", "lastName", "firstName", "city", "country", "dob"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["score", "uid", "category", "lastName", "firstName", "city", "country", "dob"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.listentry.Address": {
                "displayName": "com.ofacapi.listentry.Address",
                "description": "com.ofacapi.listentry.Address",
                "properties": {
                    "uid": {
                        "displayName": "uid",
                        "type": "number",
                        "description": "uid Value"
                    },
                    "address1": {
                        "displayName": "address1",
                        "type": "string",
                        "description": "address1 Value"
                    },
                    "address2": {
                        "displayName": "address2",
                        "type": "string",
                        "description": "address2 Value"
                    },
                    "address3": {
                        "displayName": "address3",
                        "type": "string",
                        "description": "address3 Value"
                    },
                    "city": {
                        "displayName": "city",
                        "type": "string",
                        "description": "city Value"
                    },
                    "stateOrProvince": {
                        "displayName": "stateOrProvince",
                        "type": "string",
                        "description": "stateOrProvince Value"
                    },
                    "postalCode": {
                        "displayName": "postalCode",
                        "type": "string",
                        "description": "postalCode Value"
                    },
                    "country": {
                        "displayName": "country",
                        "type": "string",
                        "description": "country Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.listentry.Address Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["uid", "address1", "address2", "address3", "city", "stateOrProvince", "postalCode", "country"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["uid", "address1", "address2", "address3", "city", "stateOrProvince", "postalCode", "country"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.listentry.Passport": {
                "displayName": "com.ofacapi.listentry.Passport",
                "description": "com.ofacapi.listentry.Passport",
                "properties": {
                    "passport": {
                        "displayName": "passport",
                        "type": "string",
                        "description": "passport Value"
                    },
                    "passportCountry": {
                        "displayName": "passportCountry",
                        "type": "string",
                        "description": "passportCountry Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.listentry.Passport Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["passport", "passportCountry"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["passport", "passportCountry"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.SearchMatch": {
                "displayName": "com.ofacapi.service.v3.SearchMatch",
                "description": "com.ofacapi.service.v3.SearchMatch",
                "properties": {
                    "score": {
                        "displayName": "score",
                        "type": "number",
                        "description": "score Value"
                    },
                    "source": {
                        "displayName": "source",
                        "type": "string",
                        "description": "source Value"
                    },
                    "firstName": {
                        "displayName": "firstName",
                        "type": "string",
                        "description": "firstName Value"
                    },
                    "lastName": {
                        "displayName": "lastName",
                        "type": "string",
                        "description": "lastName Value"
                    },
                    "fullName": {
                        "displayName": "fullName",
                        "type": "string",
                        "description": "fullName Value"
                    },
                    "dob": {
                        "displayName": "dob",
                        "type": "string",
                        "description": "dob Value"
                    },
                    "addresses": {
                        "displayName": "addresses is a JSON Object Array of com.ofacapi.listentry.Address",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.Address to resolve"
                    },
                    "citizenship": {
                        "displayName": "citizenship",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "citizenship Value"
                    },
                    "phoneNumbers": {
                        "displayName": "phoneNumbers",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "phoneNumbers Value"
                    },
                    "title": {
                        "displayName": "title",
                        "type": "string",
                        "description": "title Value"
                    },
                    "uid": {
                        "displayName": "uid",
                        "type": "number",
                        "description": "uid Value"
                    },
                    "sdnType": {
                        "displayName": "sdnType",
                        "type": "string",
                        "description": "sdnType Value"
                    },
                    "remarks": {
                        "displayName": "remarks",
                        "type": "string",
                        "description": "remarks Value"
                    },
                    "gender": {
                        "displayName": "gender",
                        "type": "string",
                        "description": "gender Value"
                    },
                    "programs": {
                        "displayName": "programs",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "programs Value"
                    },
                    "additionalSanctions": {
                        "displayName": "additionalSanctions",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "additionalSanctions Value"
                    },
                    "passports": {
                        "displayName": "passports is a JSON Object Array of com.ofacapi.listentry.Passport",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.Passport to resolve"
                    },
                    "driversLicenses": {
                        "displayName": "driversLicenses is a JSON Object Array of com.ofacapi.service.v3.CaseDriversLicense",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v3.CaseDriversLicense to resolve"
                    },
                    "callSign": {
                        "displayName": "callSign",
                        "type": "string",
                        "description": "callSign Value"
                    },
                    "vesselType": {
                        "displayName": "vesselType",
                        "type": "string",
                        "description": "vesselType Value"
                    },
                    "vesselFlag": {
                        "displayName": "vesselFlag",
                        "type": "string",
                        "description": "vesselFlag Value"
                    },
                    "tonnage": {
                        "displayName": "tonnage",
                        "type": "string",
                        "description": "tonnage Value"
                    },
                    "grossRegisteredTonnage": {
                        "displayName": "grossRegisteredTonnage",
                        "type": "string",
                        "description": "grossRegisteredTonnage Value"
                    },
                    "vesselOwner": {
                        "displayName": "vesselOwner",
                        "type": "string",
                        "description": "vesselOwner Value"
                    },
                    "effectiveDate": {
                        "displayName": "effectiveDate",
                        "type": "string",
                        "description": "effectiveDate Value"
                    },
                    "expirationDate": {
                        "displayName": "expirationDate",
                        "type": "string",
                        "description": "expirationDate Value"
                    },
                    "standardOrder": {
                        "displayName": "standardOrder",
                        "type": "string",
                        "description": "standardOrder Value"
                    },
                    "lastUpdate": {
                        "displayName": "lastUpdate",
                        "type": "string",
                        "description": "lastUpdate Value"
                    },
                    "action": {
                        "displayName": "action",
                        "type": "string",
                        "description": "action Value"
                    },
                    "frCitation": {
                        "displayName": "frCitation",
                        "type": "string",
                        "description": "frCitation Value"
                    },
                    "description": {
                        "displayName": "description",
                        "type": "string",
                        "description": "description Value"
                    },
                    "eccn": {
                        "displayName": "eccn",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "eccn Value"
                    },
                    "ids": {
                        "displayName": "ids is a JSON Object Array of com.ofacapi.listentry.ID",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.ID to resolve"
                    },
                    "akas": {
                        "displayName": "akas is a JSON Object Array of com.ofacapi.listentry.AKA",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.AKA to resolve"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.SearchMatch Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["score", "source", "firstName", "lastName", "fullName", "dob", "addresses", "citizenship", "phoneNumbers", "title", "uid", "sdnType", "remarks", "gender", "programs", "additionalSanctions", "passports", "driversLicenses", "callSign", "vesselType", "vesselFlag", "tonnage", "grossRegisteredTonnage", "vesselOwner", "effectiveDate", "expirationDate", "standardOrder", "lastUpdate", "action", "frCitation", "description", "eccn", "ids", "akas"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["score", "source", "firstName", "lastName", "fullName", "dob", "addresses", "citizenship", "phoneNumbers", "title", "uid", "sdnType", "remarks", "gender", "programs", "additionalSanctions", "passports", "driversLicenses", "callSign", "vesselType", "vesselFlag", "tonnage", "grossRegisteredTonnage", "vesselOwner", "effectiveDate", "expirationDate", "standardOrder", "lastUpdate", "action", "frCitation", "description", "eccn", "ids", "akas"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v3.UsedSourceV3": {
                "displayName": "com.ofacapi.service.v3.UsedSourceV3",
                "description": "com.ofacapi.service.v3.UsedSourceV3",
                "properties": {
                    "source": {
                        "displayName": "source",
                        "type": "string",
                        "description": "source Value"
                    },
                    "publishDate": {
                        "displayName": "publishDate",
                        "type": "string",
                        "description": "publishDate Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v3.UsedSourceV3 Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["source", "publishDate"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["source", "publishDate"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v2.UsedSource": {
                "displayName": "com.ofacapi.service.v2.UsedSource",
                "description": "com.ofacapi.service.v2.UsedSource",
                "properties": {
                    "source": {
                        "displayName": "source",
                        "type": "string",
                        "description": "source Value"
                    }
                },
                "methods": {
                    "UnpackJSONObjectArray": {
                        "displayName": "Unpack JSON Object Array",
                        "type": "list",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "JSON.String.Param": {
                                "displayName": "JSON com.ofacapi.service.v2.UsedSource Object Array String",
                                "description": "JSON String",
                                "type": "string",
                                "extendedType": "k2.com/2019/memo"
                            }
                        },
                        "requiredParameters": ["JSON.String.Param"],
                        "outputs": ["source"]
                    },
                    "PackJSONObject": {
                        "displayName": "Pack JSON Object",
                        "type": "read",
                        "inputs": ["source"],
                        "outputs": ["JSON.String"]
                    }
                }
            },
            "com.ofacapi.service.v2.BatchSearchRequestV2": {
                "displayName": "com.ofacapi.service.v2.BatchSearchRequestV2",
                "description": "com.ofacapi.service.v2.BatchSearchRequestV2",
                "properties": {
                    "apiKey": {
                        "displayName": "apiKey",
                        "type": "string",
                        "description": "apiKey Value"
                    },
                    "includeAlias": {
                        "displayName": "includeAlias",
                        "type": "boolean",
                        "description": "includeAlias Value"
                    },
                    "includeID": {
                        "displayName": "includeID",
                        "type": "boolean",
                        "description": "includeID Value"
                    },
                    "informalName": {
                        "displayName": "informalName",
                        "type": "boolean",
                        "description": "informalName Value"
                    },
                    "type": {
                        "displayName": "type",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "type Value"
                    },
                    "minScore": {
                        "displayName": "minScore",
                        "type": "number",
                        "description": "minScore Value"
                    },
                    "format": {
                        "displayName": "format",
                        "type": "string",
                        "description": "format Value"
                    },
                    "source": {
                        "displayName": "source",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "source Value"
                    },
                    "names": {
                        "displayName": "names",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "names Value"
                    }
                },
                "methods": {
                    "post_5": {
                        "displayName": "post_5",
                        "type": "create",
                        "inputs": ["apiKey", "includeAlias", "includeID", "informalName", "type", "minScore", "format", "source", "names"],
                        "requiredInputs": [],
                        "parameters": {},
                        "requiredParameters": [],
                        "outputs": ["error", "errorMessage", "searchTerm", "sourcesUsed", "matches"],
                        "data": {
                            "httpMethod": "post",
                            "httpPath": "/v2/batch",
                            "httpResponseObject": ""
                        }
                    }
                }
            },
            "com.ofacapi.service.v4.EntityResponse": {
                "displayName": "com.ofacapi.service.v4.EntityResponse",
                "description": "com.ofacapi.service.v4.EntityResponse",
                "properties": {
                    "error": {
                        "displayName": "error",
                        "type": "boolean",
                        "description": "error Value"
                    },
                    "errorMessage": {
                        "displayName": "errorMessage",
                        "type": "string",
                        "description": "errorMessage Value"
                    },
                    "sources": {
                        "displayName": "sources is a JSON Object Array of com.ofacapi.service.v4.SourceData",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.SourceData to resolve"
                    },
                    "entities": {
                        "displayName": "entities is a JSON Object Array of com.rockandwelch.entity.model.Entity",
                        "type": "extendedString",
                        "extendedType": "k2.com/2019/memo",
                        "description": "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Entity to resolve"
                    }
                },
                "methods": {
                    "getEntityById": {
                        "displayName": "getEntityById",
                        "type": "read",
                        "inputs": [],
                        "requiredInputs": [],
                        "parameters": {
                            "id": {
                                "displayName": "id",
                                "type": "string"
                            }
                        },
                        "requiredParameters": ["id"],
                        "outputs": ["error", "errorMessage", "sources", "entities"],
                        "data": {
                            "httpMethod": "get",
                            "httpPath": "/v4/entities/{id}",
                            "httpResponseObject": ""
                        }
                    }
                }
            }
        }
    })
};

onexecute = async function({
    objectName,
    methodName,
    parameters,
    properties,
    configuration
}): Promise < void > {
    switch (objectName) {
        case "com.ofacapi.service.v4.Case":
            await onexecutecom_ofacapi_service_v4_Case(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v4.CaseRequest":
            await onexecutecom_ofacapi_service_v4_CaseRequest(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.Address":
            await onexecutecom_rockandwelch_entity_model_Address(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.Identification":
            await onexecutecom_rockandwelch_entity_model_Identification(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v4.SourceData":
            await onexecutecom_ofacapi_service_v4_SourceData(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.AdditionalInformation":
            await onexecutecom_rockandwelch_entity_model_AdditionalInformation(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.AircraftData":
            await onexecutecom_rockandwelch_entity_model_AircraftData(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.Alias":
            await onexecutecom_rockandwelch_entity_model_Alias(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.CryptoWallet":
            await onexecutecom_rockandwelch_entity_model_CryptoWallet(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.Entity":
            await onexecutecom_rockandwelch_entity_model_Entity(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.OrganizationData":
            await onexecutecom_rockandwelch_entity_model_OrganizationData(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.PersonData":
            await onexecutecom_rockandwelch_entity_model_PersonData(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.entity.model.VesselData":
            await onexecutecom_rockandwelch_entity_model_VesselData(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.search.manager.domain.Match":
            await onexecutecom_rockandwelch_search_manager_domain_Match(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.search.manager.domain.MatchField":
            await onexecutecom_rockandwelch_search_manager_domain_MatchField(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.search.manager.domain.MatchSummary":
            await onexecutecom_rockandwelch_search_manager_domain_MatchSummary(methodName, parameters, properties, configuration);
            break;
        case "com.rockandwelch.search.manager.domain.ScreenResult":
            await onexecutecom_rockandwelch_search_manager_domain_ScreenResult(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v4.bulk.JobRequest":
            await onexecutecom_ofacapi_service_v4_bulk_JobRequest(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.dao.entity.Job":
            await onexecutecom_ofacapi_dao_entity_Job(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.listentry.ID":
            await onexecutecom_ofacapi_listentry_ID(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.Case":
            await onexecutecom_ofacapi_service_v3_Case(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.CaseAddress":
            await onexecutecom_ofacapi_service_v3_CaseAddress(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.CaseDriversLicense":
            await onexecutecom_ofacapi_service_v3_CaseDriversLicense(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.CasePassport":
            await onexecutecom_ofacapi_service_v3_CasePassport(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.SearchRequestV3":
            await onexecutecom_ofacapi_service_v3_SearchRequestV3(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.listentry.AKA":
            await onexecutecom_ofacapi_listentry_AKA(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.listentry.Address":
            await onexecutecom_ofacapi_listentry_Address(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.listentry.Passport":
            await onexecutecom_ofacapi_listentry_Passport(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.SearchMatch":
            await onexecutecom_ofacapi_service_v3_SearchMatch(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v3.UsedSourceV3":
            await onexecutecom_ofacapi_service_v3_UsedSourceV3(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v2.UsedSource":
            await onexecutecom_ofacapi_service_v2_UsedSource(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v2.BatchSearchRequestV2":
            await onexecutecom_ofacapi_service_v2_BatchSearchRequestV2(methodName, parameters, properties, configuration);
            break;
        case "com.ofacapi.service.v4.EntityResponse":
            await onexecutecom_ofacapi_service_v4_EntityResponse(methodName, parameters, properties, configuration);
            break;

        default:
            throw new Error("The object " + objectName + " is not supported.");
    }
}

async function onexecutecom_ofacapi_service_v4_Case(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v4_CaseUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v4_CasePackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v4_CaseRequest(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "post":
            await onexecutecom_ofacapi_service_v4_CaseRequestpost(parameters, properties, configuration);
            break;
        case "post_1":
            await onexecutecom_ofacapi_service_v4_CaseRequestpost_1(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_Address(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AddressUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AddressPackJSONObject(parameters, properties, configuration);
            break;
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_AddressUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_Identification(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_IdentificationUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_IdentificationPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v4_SourceData(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v4_SourceDataUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v4_SourceDataPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_AdditionalInformation(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_AdditionalInformationUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AdditionalInformationPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_AircraftData(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AircraftDataUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AircraftDataPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_Alias(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_AliasUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_AliasPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_CryptoWallet(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_CryptoWalletUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_CryptoWalletPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_Entity(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "getEntities":
            await onexecutecom_rockandwelch_entity_model_EntitygetEntities(parameters, properties, configuration);
            break;
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_EntityUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_EntityPackJSONObject(parameters, properties, configuration);
            break;
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_entity_model_EntityUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_OrganizationData(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_OrganizationDataUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_OrganizationDataPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_PersonData(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_PersonDataUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_PersonDataPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_entity_model_VesselData(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_entity_model_VesselDataUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_entity_model_VesselDataPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_search_manager_domain_Match(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_search_manager_domain_MatchUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_search_manager_domain_MatchPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_search_manager_domain_MatchField(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_search_manager_domain_MatchFieldUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_search_manager_domain_MatchFieldPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_search_manager_domain_MatchSummary(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_rockandwelch_search_manager_domain_MatchSummaryUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_search_manager_domain_MatchSummaryPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_rockandwelch_search_manager_domain_ScreenResult(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_rockandwelch_search_manager_domain_ScreenResultUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_rockandwelch_search_manager_domain_ScreenResultPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v4_bulk_JobRequest(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "post_2":
            await onexecutecom_ofacapi_service_v4_bulk_JobRequestpost_2(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_dao_entity_Job(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "status":
            await onexecutecom_ofacapi_dao_entity_Jobstatus(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_listentry_ID(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_listentry_IDUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_listentry_IDPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_Case(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v3_CaseUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_CasePackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_CaseAddress(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_ofacapi_service_v3_CaseAddressUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_CaseAddressPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_CaseDriversLicense(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_ofacapi_service_v3_CaseDriversLicenseUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_CaseDriversLicensePackJSONObject(parameters, properties, configuration);
            break;
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v3_CaseDriversLicenseUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_CasePassport(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObject":
            await onexecutecom_ofacapi_service_v3_CasePassportUnpackJSONObject(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_CasePassportPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_SearchRequestV3(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "post_3":
            await onexecutecom_ofacapi_service_v3_SearchRequestV3post_3(parameters, properties, configuration);
            break;
        case "post_4":
            await onexecutecom_ofacapi_service_v3_SearchRequestV3post_4(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_listentry_AKA(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_listentry_AKAUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_listentry_AKAPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_listentry_Address(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_listentry_AddressUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_listentry_AddressPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_listentry_Passport(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_listentry_PassportUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_listentry_PassportPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_SearchMatch(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v3_SearchMatchUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_SearchMatchPackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v3_UsedSourceV3(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v3_UsedSourceV3UnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v3_UsedSourceV3PackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v2_UsedSource(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "UnpackJSONObjectArray":
            await onexecutecom_ofacapi_service_v2_UsedSourceUnpackJSONObjectArray(parameters, properties, configuration);
            break;
        case "PackJSONObject":
            await onexecutecom_ofacapi_service_v2_UsedSourcePackJSONObject(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v2_BatchSearchRequestV2(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "post_5":
            await onexecutecom_ofacapi_service_v2_BatchSearchRequestV2post_5(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}
async function onexecutecom_ofacapi_service_v4_EntityResponse(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    switch (methodName) {
        case "getEntityById":
            await onexecutecom_ofacapi_service_v4_EntityResponsegetEntityById(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecutecom_ofacapi_service_v4_CaseUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v4_CasePackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v4_CaseRequestpost(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/search`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_ofacapi_service_v4_CaseRequestpost_1(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/screen`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_rockandwelch_entity_model_AddressUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AddressPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AddressUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_IdentificationUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_IdentificationPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v4_SourceDataUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v4_SourceDataPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AdditionalInformationUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AdditionalInformationPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AircraftDataUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AircraftDataPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AliasUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_AliasPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_CryptoWalletUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_CryptoWalletPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_EntitygetEntities(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/entities`;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("get", urlValue + httpPath);
        xhr.send();
    });
}

function onexecutecom_rockandwelch_entity_model_EntityUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_EntityPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_EntityUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_OrganizationDataUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_OrganizationDataPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_PersonDataUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_PersonDataPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_VesselDataUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_entity_model_VesselDataPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchFieldUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchFieldPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchSummaryUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_MatchSummaryPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_ScreenResultUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_rockandwelch_search_manager_domain_ScreenResultPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v4_bulk_JobRequestpost_2(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/beta/jobs`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_ofacapi_dao_entity_Jobstatus(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/beta/jobs/${encodeURIComponent(parameters['id'] as string)}`;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("get", urlValue + httpPath);
        xhr.send();
    });
}

function onexecutecom_ofacapi_listentry_IDUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_IDPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CasePackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseAddressUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseAddressPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseDriversLicenseUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseDriversLicensePackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CaseDriversLicenseUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CasePassportUnpackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = JSON.parse(parameters["JSON.String.Param"] as string);
            for (const propKey in obj) {
                if (obj.hasOwnProperty(propKey)) {
                    const prop = obj[propKey];
                    if (typeof(prop) == "object")
                        obj[propKey] = JSON.stringify(obj[propKey]);
                }
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_CasePassportPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_SearchRequestV3post_3(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v3/`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_ofacapi_service_v3_SearchRequestV3post_4(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v3`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_ofacapi_listentry_AKAUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_AKAPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_AddressUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_AddressPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_PassportUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_listentry_PassportPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_SearchMatchUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_SearchMatchPackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_UsedSourceV3UnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v3_UsedSourceV3PackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v2_UsedSourceUnpackJSONObjectArray(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let objArray = JSON.parse(parameters["JSON.String.Param"] as string);
            objArray.forEach(obj => {
                for (const propKey in obj) {
                    if (obj.hasOwnProperty(propKey)) {
                        const prop = obj[propKey];
                        if (typeof(prop) == "object")
                            obj[propKey] = JSON.stringify(obj[propKey]);
                    }
                }
            });
            postResult(objArray);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v2_UsedSourcePackJSONObject(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        try {
            let obj = {
                "JSON.String": JSON.stringify(properties)
            }
            postResult(obj);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function onexecutecom_ofacapi_service_v2_BatchSearchRequestV2post_5(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v2/batch`;
        let parsedData = parseInputObject(properties); //pull objects out of stringified object properties
        let packedData = unflattenObject(parsedData); //turn dot notation flattened properties into objects
        let data = JSON.stringify(packedData);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutecom_ofacapi_service_v4_EntityResponsegetEntityById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        let urlValue = configuration["ServiceURL"] as string;
        let httpPath = `/v4/entities/${encodeURIComponent(parameters['id'] as string)}`;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
                let obj = JSON.parse(xhr.responseText);
                let unpackedObject: any = {};
                let executeResult: ExecuteResult = unpackObject(obj, "", unpackedObject);
                postResult(executeResult);
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";

        xhr.open("get", urlValue + httpPath);
        xhr.send();
    });
}


function unpackObject(sourceObject: any, propPrefix: string, unpackedObject: any): ExecuteResult {
    if (sourceObject.length > 0) {
        unpackedObject = sourceObject.map(x => {
            let unpackedSingleObject: any = {};
            flattenProperties(x, propPrefix, unpackedSingleObject);
            return unpackedSingleObject;
        });
    } else {
        flattenProperties(sourceObject, propPrefix, unpackedObject);
    }
    return unpackedObject;
}

function flattenProperties(xSourceObject: any, propPrefix: string, unpackedObject: any): void {
    for (const propKey in xSourceObject) {
        if (xSourceObject.hasOwnProperty(propKey)) {
            const prop = xSourceObject[propKey];
            let propName = (propPrefix != "" ? propPrefix + "." : "") + propKey;
            if (typeof(prop) == "object" && prop != null && prop != undefined) {
                if (prop.length === undefined && propName.split(".").length < 1) {
                    unpackObject(prop, propName, unpackedObject);
                } else {
                    unpackedObject[propName] = JSON.stringify(xSourceObject[propKey]);
                }
            } else {
                unpackedObject[propName] = xSourceObject[propKey];
            }
        }
    }
}

function parseInputObject(object: any): any {
    for (const propKey in object) {
        if (object.hasOwnProperty(propKey)) {
            const value = object[propKey];
            try {
                object[propKey] = JSON.parse(value);
                if (typeof(object[propKey]) === "object") {
                    parseInputObject(object[propKey]);
                }
            } catch (error) {
                object[propKey] = value;
            }
        }
    }
    return object
}

function unflattenObject(inputObject: any): any {
    let unflattenedObject: any = {};
    for (const propName in inputObject) {
        if (inputObject.hasOwnProperty(propName)) {
            const propValue = inputObject[propName];
            if (propName.indexOf(".") > 0) { //we have a flattened property - build object
                let propObjectComponents = propName.split(".");
                //unflattenedObject[propName[0]] = unflattenProperty(propValue);
                unflattenedObject[propObjectComponents[0]] = buildObject(unflattenedObject[propObjectComponents[0]], propName.replace(`${propObjectComponents[0]}.`, ""), propValue);
            } else {
                unflattenedObject[propName] = propValue;
            }
        }
    }
    return unflattenedObject;
}

function buildObject(currentObject: any, propName: string, propValue: any): any {
    if (currentObject === undefined || currentObject === null) {
        currentObject = {};
    }
    if (propName.indexOf(".") > 0) {
        let propObjectComponents = propName.split(".");
        currentObject[propObjectComponents[0]] = buildObject(currentObject[propObjectComponents[0]], propName.replace(`${propObjectComponents[0]}.`, ""), propValue);
    } else {
        currentObject[propName] = propValue;
    }
    return currentObject;
}

function buildXtraParams(pathUrl: string, parameters: SingleRecord, properties: SingleRecord): string {
    let andFilter = "";
    for (const propKey in properties) {
        if (properties.hasOwnProperty(propKey)) {
            const element = properties[propKey];
            if (element && (typeof(element) === "bigint" || typeof(element) === "boolean" || typeof(element) === "number")) {
                andFilter += ` and ${propKey} eq ${element}`;
            } else if (element && typeof(element) != "undefined") {
                andFilter += ` and ${propKey} eq '${element}'`;
            }
        }
    }

    let xtraParams = "";

    if (parameters && parameters.$filter && parameters.$filter != "" || andFilter != "") {
        xtraParams = pathUrl.indexOf("?") > 0 ? "&$filter=" : "?$filter=";
    }

    if (parameters && parameters.$filter && parameters.$filter) {
        xtraParams += `(${parameters.$filter})`;
    }

    if (andFilter != "") {
        xtraParams += andFilter;
    }

    xtraParams = xtraParams.replace("$filter= and", "$filter=");

    for (const paramKey in parameters) {
        if (paramKey === "$select" || paramKey === "$top" || paramKey === "$skip" || paramKey === "$orderby") {
            const paramValue = parameters[paramKey];
            if (paramValue && paramValue != "") {
                xtraParams += `${xtraParams.indexOf('?') >= 0?'&':'?'}${paramKey}=${paramValue}`;
            }

        }
    }

    return xtraParams;
}
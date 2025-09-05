metadata = {
  systemName: "ofac.api.jssp.broker",
  displayName: "OFAC API JSSP Broker",
  description: "OFAC API service documentation. ",
  configuration: {
    ServiceURL: {
      displayName: "Service URL",
      type: "string",
      value: "https://api.ofac-api.com"
    }
  }
};
ondescribe = async function({
  configuration: a
}) {
  postSchema({
    objects: {
      "com.ofacapi.service.v4.Case": {
        displayName: "com.ofacapi.service.v4.Case",
        description: "com.ofacapi.service.v4.Case",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          type: {
            displayName: "type",
            type: "string",
            description: "type Value"
          },
          dob: {
            displayName: "dob",
            type: "string",
            description: "dob Value"
          },
          gender: {
            displayName: "gender",
            type: "string",
            description: "gender Value"
          },
          citizenship: {
            displayName: "citizenship",
            type: "string",
            description: "citizenship Value"
          },
          nationality: {
            displayName: "nationality",
            type: "string",
            description: "nationality Value"
          },
          address: {
            displayName: "address is a JSON Object of com.rockandwelch.entity.model.Address",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.Address to resolve"
          },
          phoneNumber: {
            displayName: "phoneNumber",
            type: "string",
            description: "phoneNumber Value"
          },
          emailAddress: {
            displayName: "emailAddress",
            type: "string",
            description: "emailAddress Value"
          },
          cryptoId: {
            displayName: "cryptoId",
            type: "string",
            description: "cryptoId Value"
          },
          identification: {
            displayName: "identification is a JSON Object Array of com.rockandwelch.entity.model.Identification",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Identification to resolve"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v4.Case Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "name", "type", "dob", "gender", "citizenship", "nationality", "address", "phoneNumber", "emailAddress", "cryptoId", "identification"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "name", "type", "dob", "gender", "citizenship", "nationality", "address", "phoneNumber", "emailAddress", "cryptoId", "identification"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v4.CaseRequest": {
        displayName: "com.ofacapi.service.v4.CaseRequest",
        description: "com.ofacapi.service.v4.CaseRequest",
        properties: {
          apiKey: {
            displayName: "apiKey",
            type: "string",
            description: "apiKey Value"
          },
          minScore: {
            displayName: "minScore",
            type: "number",
            description: "minScore Value"
          },
          sources: {
            displayName: "sources",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "sources Value"
          },
          types: {
            displayName: "types",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "types Value"
          },
          cases: {
            displayName: "cases is a JSON Object Array of com.ofacapi.service.v4.Case",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.Case to resolve"
          }
        },
        methods: {
          post: {
            displayName: "post",
            type: "create",
            inputs: ["apiKey", "minScore", "sources", "types", "cases"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["error", "errorMessage", "sources", "results"],
            data: {
              httpMethod: "post",
              httpPath: "/v4/search",
              httpResponseObject: ""
            }
          },
          post_1: {
            displayName: "post_1",
            type: "create",
            inputs: ["apiKey", "minScore", "sources", "types", "cases"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["error", "errorMessage", "sources", "results"],
            data: {
              httpMethod: "post",
              httpPath: "/v4/screen",
              httpResponseObject: ""
            }
          }
        }
      },
      "com.rockandwelch.entity.model.Address": {
        displayName: "com.rockandwelch.entity.model.Address",
        description: "com.rockandwelch.entity.model.Address",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          address1: {
            displayName: "address1",
            type: "string",
            description: "address1 Value"
          },
          address2: {
            displayName: "address2",
            type: "string",
            description: "address2 Value"
          },
          city: {
            displayName: "city",
            type: "string",
            description: "city Value"
          },
          stateOrProvince: {
            displayName: "stateOrProvince",
            type: "string",
            description: "stateOrProvince Value"
          },
          postalCode: {
            displayName: "postalCode",
            type: "string",
            description: "postalCode Value"
          },
          country: {
            displayName: "country",
            type: "string",
            description: "country Value"
          },
          fullAddress: {
            displayName: "fullAddress",
            type: "string",
            description: "fullAddress Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Address Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"],
            outputs: ["JSON.String"]
          },
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Address Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "address1", "address2", "city", "stateOrProvince", "postalCode", "country", "fullAddress"]
          }
        }
      },
      "com.rockandwelch.entity.model.Identification": {
        displayName: "com.rockandwelch.entity.model.Identification",
        description: "com.rockandwelch.entity.model.Identification",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          type: {
            displayName: "type",
            type: "string",
            description: "type Value"
          },
          idNumber: {
            displayName: "idNumber",
            type: "string",
            description: "idNumber Value"
          },
          country: {
            displayName: "country",
            type: "string",
            description: "country Value"
          },
          issueDate: {
            displayName: "issueDate",
            type: "string",
            description: "issueDate Value"
          },
          expirationDate: {
            displayName: "expirationDate",
            type: "string",
            description: "expirationDate Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Identification Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "type", "idNumber", "country", "issueDate", "expirationDate"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "type", "idNumber", "country", "issueDate", "expirationDate"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v4.SourceData": {
        displayName: "com.ofacapi.service.v4.SourceData",
        description: "com.ofacapi.service.v4.SourceData",
        properties: {
          source: {
            displayName: "source",
            type: "string",
            description: "source Value"
          },
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          publishDate: {
            displayName: "publishDate",
            type: "string",
            description: "publishDate Value"
          },
          downloadDate: {
            displayName: "downloadDate",
            type: "string",
            description: "downloadDate Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v4.SourceData Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["source", "name", "publishDate", "downloadDate"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["source", "name", "publishDate", "downloadDate"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.AdditionalInformation": {
        displayName: "com.rockandwelch.entity.model.AdditionalInformation",
        description: "com.rockandwelch.entity.model.AdditionalInformation",
        properties: {
          label: {
            displayName: "label",
            type: "string",
            description: "label Value"
          },
          value: {
            displayName: "value",
            type: "string",
            description: "value Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.AdditionalInformation Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["label", "value"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["label", "value"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.AircraftData": {
        displayName: "com.rockandwelch.entity.model.AircraftData",
        description: "com.rockandwelch.entity.model.AircraftData",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          owner: {
            displayName: "owner",
            type: "string",
            description: "owner Value"
          },
          registrationNumber: {
            displayName: "registrationNumber",
            type: "string",
            description: "registrationNumber Value"
          },
          manufacturer: {
            displayName: "manufacturer",
            type: "string",
            description: "manufacturer Value"
          },
          model: {
            displayName: "model",
            type: "string",
            description: "model Value"
          },
          year: {
            displayName: "year",
            type: "string",
            description: "year Value"
          },
          icaoCode: {
            displayName: "icaoCode",
            type: "string",
            description: "icaoCode Value"
          },
          serialNumber: {
            displayName: "serialNumber",
            type: "string",
            description: "serialNumber Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.AircraftData Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "icaoCode", "serialNumber"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "icaoCode", "serialNumber"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.Alias": {
        displayName: "com.rockandwelch.entity.model.Alias",
        description: "com.rockandwelch.entity.model.Alias",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          firstName: {
            displayName: "firstName",
            type: "string",
            description: "firstName Value"
          },
          lastName: {
            displayName: "lastName",
            type: "string",
            description: "lastName Value"
          },
          nameFormatted: {
            displayName: "nameFormatted",
            type: "string",
            description: "nameFormatted Value"
          },
          comment: {
            displayName: "comment",
            type: "string",
            description: "comment Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Alias Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "name", "firstName", "lastName", "nameFormatted", "comment"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "name", "firstName", "lastName", "nameFormatted", "comment"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.CryptoWallet": {
        displayName: "com.rockandwelch.entity.model.CryptoWallet",
        description: "com.rockandwelch.entity.model.CryptoWallet",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          publicKey: {
            displayName: "publicKey",
            type: "string",
            description: "publicKey Value"
          },
          description: {
            displayName: "description",
            type: "string",
            description: "description Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.CryptoWallet Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "publicKey", "description"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "publicKey", "description"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.Entity": {
        displayName: "com.rockandwelch.entity.model.Entity",
        description: "com.rockandwelch.entity.model.Entity",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          type: {
            displayName: "type",
            type: "string",
            description: "type Value"
          },
          categories: {
            displayName: "categories",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "categories Value"
          },
          source: {
            displayName: "source",
            type: "string",
            description: "source Value"
          },
          sourceId: {
            displayName: "sourceId",
            type: "string",
            description: "sourceId Value"
          },
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          nameFormatted: {
            displayName: "nameFormatted",
            type: "string",
            description: "nameFormatted Value"
          },
          description: {
            displayName: "description",
            type: "string",
            description: "description Value"
          },
          entityLink: {
            displayName: "entityLink",
            type: "string",
            description: "entityLink Value"
          },
          alias: {
            displayName: "alias is a JSON Object Array of com.rockandwelch.entity.model.Alias",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Alias to resolve"
          },
          sourceLinks: {
            displayName: "sourceLinks",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "sourceLinks Value"
          },
          additionalSanctions: {
            displayName: "additionalSanctions",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "additionalSanctions Value"
          },
          programs: {
            displayName: "programs",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "programs Value"
          },
          remarks: {
            displayName: "remarks",
            type: "string",
            description: "remarks Value"
          },
          effectiveDate: {
            displayName: "effectiveDate",
            type: "string",
            description: "effectiveDate Value"
          },
          expirationDate: {
            displayName: "expirationDate",
            type: "string",
            description: "expirationDate Value"
          },
          addresses: {
            displayName: "addresses is a JSON Object Array of com.rockandwelch.entity.model.Address",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Address to resolve"
          },
          identifications: {
            displayName: "identifications is a JSON Object Array of com.rockandwelch.entity.model.Identification",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Identification to resolve"
          },
          phoneNumbers: {
            displayName: "phoneNumbers",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "phoneNumbers Value"
          },
          websites: {
            displayName: "websites",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "websites Value"
          },
          emailAddresses: {
            displayName: "emailAddresses",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "emailAddresses Value"
          },
          cryptoWallets: {
            displayName: "cryptoWallets is a JSON Object Array of com.rockandwelch.entity.model.CryptoWallet",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.CryptoWallet to resolve"
          },
          additionalInformation: {
            displayName: "additionalInformation is a JSON Object Array of com.rockandwelch.entity.model.AdditionalInformation",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.AdditionalInformation to resolve"
          },
          personDetails: {
            displayName: "personDetails is a JSON Object of com.rockandwelch.entity.model.PersonData",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.PersonData to resolve"
          },
          organizationDetails: {
            displayName: "organizationDetails is a JSON Object of com.rockandwelch.entity.model.OrganizationData",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.OrganizationData to resolve"
          },
          vesselDetails: {
            displayName: "vesselDetails is a JSON Object of com.rockandwelch.entity.model.VesselData",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.VesselData to resolve"
          },
          aircraftDetails: {
            displayName: "aircraftDetails is a JSON Object of com.rockandwelch.entity.model.AircraftData",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.AircraftData to resolve"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          getEntities: {
            displayName: "getEntities",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              sources: {
                displayName: "sources",
                type: "string"
              },
              types: {
                displayName: "types",
                type: "string"
              },
              categories: {
                displayName: "categories",
                type: "string"
              }
            },
            requiredParameters: [],
            outputs: ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"],
            data: {
              httpMethod: "get",
              httpPath: "/v4/entities",
              httpResponseObject: ""
            }
          },
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Entity Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"],
            outputs: ["JSON.String"]
          },
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.Entity Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "type", "categories", "source", "sourceId", "name", "nameFormatted", "description", "entityLink", "alias", "sourceLinks", "additionalSanctions", "programs", "remarks", "effectiveDate", "expirationDate", "addresses", "identifications", "phoneNumbers", "websites", "emailAddresses", "cryptoWallets", "additionalInformation", "personDetails", "organizationDetails", "vesselDetails", "aircraftDetails"]
          }
        }
      },
      "com.rockandwelch.entity.model.OrganizationData": {
        displayName: "com.rockandwelch.entity.model.OrganizationData",
        description: "com.rockandwelch.entity.model.OrganizationData",
        properties: {
          registrationNumbers: {
            displayName: "registrationNumbers",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "registrationNumbers Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.OrganizationData Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["registrationNumbers"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["registrationNumbers"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.PersonData": {
        displayName: "com.rockandwelch.entity.model.PersonData",
        description: "com.rockandwelch.entity.model.PersonData",
        properties: {
          firstName: {
            displayName: "firstName",
            type: "string",
            description: "firstName Value"
          },
          middleName: {
            displayName: "middleName",
            type: "string",
            description: "middleName Value"
          },
          lastName: {
            displayName: "lastName",
            type: "string",
            description: "lastName Value"
          },
          title: {
            displayName: "title",
            type: "string",
            description: "title Value"
          },
          gender: {
            displayName: "gender",
            type: "string",
            description: "gender Value"
          },
          birthDates: {
            displayName: "birthDates",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "birthDates Value"
          },
          birthPlaces: {
            displayName: "birthPlaces",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "birthPlaces Value"
          },
          citizenships: {
            displayName: "citizenships",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "citizenships Value"
          },
          nationalities: {
            displayName: "nationalities",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "nationalities Value"
          },
          positions: {
            displayName: "positions",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "positions Value"
          },
          education: {
            displayName: "education",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "education Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.PersonData Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["firstName", "middleName", "lastName", "title", "gender", "birthDates", "birthPlaces", "citizenships", "nationalities", "positions", "education"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["firstName", "middleName", "lastName", "title", "gender", "birthDates", "birthPlaces", "citizenships", "nationalities", "positions", "education"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.entity.model.VesselData": {
        displayName: "com.rockandwelch.entity.model.VesselData",
        description: "com.rockandwelch.entity.model.VesselData",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          owner: {
            displayName: "owner",
            type: "string",
            description: "owner Value"
          },
          registrationNumber: {
            displayName: "registrationNumber",
            type: "string",
            description: "registrationNumber Value"
          },
          manufacturer: {
            displayName: "manufacturer",
            type: "string",
            description: "manufacturer Value"
          },
          model: {
            displayName: "model",
            type: "string",
            description: "model Value"
          },
          year: {
            displayName: "year",
            type: "string",
            description: "year Value"
          },
          callSign: {
            displayName: "callSign",
            type: "string",
            description: "callSign Value"
          },
          vesselType: {
            displayName: "vesselType",
            type: "string",
            description: "vesselType Value"
          },
          flag: {
            displayName: "flag",
            type: "string",
            description: "flag Value"
          },
          imoNumber: {
            displayName: "imoNumber",
            type: "string",
            description: "imoNumber Value"
          },
          tonnage: {
            displayName: "tonnage",
            type: "string",
            description: "tonnage Value"
          },
          grossTonnage: {
            displayName: "grossTonnage",
            type: "string",
            description: "grossTonnage Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.entity.model.VesselData Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "callSign", "vesselType", "flag", "imoNumber", "tonnage", "grossTonnage"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "owner", "registrationNumber", "manufacturer", "model", "year", "callSign", "vesselType", "flag", "imoNumber", "tonnage", "grossTonnage"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.search.manager.domain.Match": {
        displayName: "com.rockandwelch.search.manager.domain.Match",
        description: "com.rockandwelch.search.manager.domain.Match",
        properties: {
          score: {
            displayName: "score",
            type: "number",
            description: "score Value"
          },
          matchSummary: {
            displayName: "matchSummary is a JSON Object of com.rockandwelch.search.manager.domain.MatchSummary",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.search.manager.domain.MatchSummary to resolve"
          },
          sanction: {
            displayName: "sanction is a JSON Object of com.rockandwelch.entity.model.Entity",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.rockandwelch.entity.model.Entity to resolve"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.search.manager.domain.Match Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["score", "matchSummary", "sanction"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["score", "matchSummary", "sanction"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.search.manager.domain.MatchField": {
        displayName: "com.rockandwelch.search.manager.domain.MatchField",
        description: "com.rockandwelch.search.manager.domain.MatchField",
        properties: {
          similarity: {
            displayName: "similarity",
            type: "string",
            description: "similarity Value"
          },
          fieldName: {
            displayName: "fieldName",
            type: "string",
            description: "fieldName Value"
          },
          caseField: {
            displayName: "caseField",
            type: "string",
            description: "caseField Value"
          },
          sanctionField: {
            displayName: "sanctionField",
            type: "string",
            description: "sanctionField Value"
          },
          sanctionFieldNote: {
            displayName: "sanctionFieldNote",
            type: "string",
            description: "sanctionFieldNote Value"
          },
          sanctionFieldId: {
            displayName: "sanctionFieldId",
            type: "string",
            description: "sanctionFieldId Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.search.manager.domain.MatchField Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["similarity", "fieldName", "caseField", "sanctionField", "sanctionFieldNote", "sanctionFieldId"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["similarity", "fieldName", "caseField", "sanctionField", "sanctionFieldNote", "sanctionFieldId"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.search.manager.domain.MatchSummary": {
        displayName: "com.rockandwelch.search.manager.domain.MatchSummary",
        description: "com.rockandwelch.search.manager.domain.MatchSummary",
        properties: {
          matchFields: {
            displayName: "matchFields is a JSON Object Array of com.rockandwelch.search.manager.domain.MatchField",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.MatchField to resolve"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.search.manager.domain.MatchSummary Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["matchFields"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["matchFields"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.rockandwelch.search.manager.domain.ScreenResult": {
        displayName: "com.rockandwelch.search.manager.domain.ScreenResult",
        description: "com.rockandwelch.search.manager.domain.ScreenResult",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          matchCount: {
            displayName: "matchCount",
            type: "number",
            description: "matchCount Value"
          },
          matches: {
            displayName: "matches is a JSON Object Array of com.rockandwelch.search.manager.domain.Match",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.Match to resolve"
          },
          matchesAndCount: {
            displayName: "matchesAndCount is a JSON Object Array of com.rockandwelch.search.manager.domain.Match",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.search.manager.domain.Match to resolve"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.rockandwelch.search.manager.domain.ScreenResult Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["id", "name", "matchCount", "matches", "matchesAndCount"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["id", "name", "matchCount", "matches", "matchesAndCount"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v4.bulk.JobRequest": {
        displayName: "com.ofacapi.service.v4.bulk.JobRequest",
        description: "com.ofacapi.service.v4.bulk.JobRequest",
        properties: {
          apiKey: {
            displayName: "apiKey",
            type: "string",
            description: "apiKey Value"
          },
          sources: {
            displayName: "sources",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "sources Value"
          },
          types: {
            displayName: "types",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "types Value"
          },
          cases: {
            displayName: "cases is a JSON Object Array of com.ofacapi.service.v4.Case",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.Case to resolve"
          },
          webhookUrl: {
            displayName: "webhookUrl",
            type: "string",
            description: "webhookUrl Value"
          },
          jobName: {
            displayName: "jobName",
            type: "string",
            description: "jobName Value"
          }
        },
        methods: {
          post_2: {
            displayName: "post_2",
            type: "create",
            inputs: ["apiKey", "sources", "types", "cases", "webhookUrl", "jobName"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["id", "error", "errorMessage", "jobName", "startTime", "endTime", "totalCases", "estimatedRunTime", "status", "webhookUrl", "reportUrl"],
            data: {
              httpMethod: "post",
              httpPath: "/v4/beta/jobs",
              httpResponseObject: ""
            }
          }
        }
      },
      "com.ofacapi.dao.entity.Job": {
        displayName: "com.ofacapi.dao.entity.Job",
        description: "com.ofacapi.dao.entity.Job",
        properties: {
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          },
          error: {
            displayName: "error",
            type: "string",
            description: "error Value"
          },
          errorMessage: {
            displayName: "errorMessage",
            type: "string",
            description: "errorMessage Value"
          },
          jobName: {
            displayName: "jobName",
            type: "string",
            description: "jobName Value"
          },
          startTime: {
            displayName: "startTime",
            type: "string",
            description: "startTime Value"
          },
          endTime: {
            displayName: "endTime",
            type: "string",
            description: "endTime Value"
          },
          totalCases: {
            displayName: "totalCases",
            type: "number",
            description: "totalCases Value"
          },
          estimatedRunTime: {
            displayName: "estimatedRunTime",
            type: "number",
            description: "estimatedRunTime Value"
          },
          status: {
            displayName: "status",
            type: "string",
            description: "status Value"
          },
          webhookUrl: {
            displayName: "webhookUrl",
            type: "string",
            description: "webhookUrl Value"
          },
          reportUrl: {
            displayName: "reportUrl",
            type: "string",
            description: "reportUrl Value"
          }
        },
        methods: {
          status: {
            displayName: "status",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              id: {
                displayName: "id",
                type: "string"
              }
            },
            requiredParameters: ["id"],
            outputs: ["id", "error", "errorMessage", "jobName", "startTime", "endTime", "totalCases", "estimatedRunTime", "status", "webhookUrl", "reportUrl"],
            data: {
              httpMethod: "get",
              httpPath: "/v4/beta/jobs/{id}",
              httpResponseObject: ""
            }
          }
        }
      },
      "com.ofacapi.listentry.ID": {
        displayName: "com.ofacapi.listentry.ID",
        description: "com.ofacapi.listentry.ID",
        properties: {
          type: {
            displayName: "type",
            type: "string",
            description: "type Value"
          },
          id: {
            displayName: "id",
            type: "string",
            description: "id Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.listentry.ID Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["type", "id"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["type", "id"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.Case": {
        displayName: "com.ofacapi.service.v3.Case",
        description: "com.ofacapi.service.v3.Case",
        properties: {
          name: {
            displayName: "name",
            type: "string",
            description: "name Value"
          },
          dob: {
            displayName: "dob",
            type: "string",
            description: "dob Value"
          },
          citizenship: {
            displayName: "citizenship",
            type: "string",
            description: "citizenship Value"
          },
          phoneNumber: {
            displayName: "phoneNumber",
            type: "string",
            description: "phoneNumber Value"
          },
          type: {
            displayName: "type",
            type: "string",
            description: "type Value"
          },
          address: {
            displayName: "address is a JSON Object of com.ofacapi.service.v3.CaseAddress",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CaseAddress to resolve"
          },
          passport: {
            displayName: "passport is a JSON Object of com.ofacapi.service.v3.CasePassport",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CasePassport to resolve"
          },
          driversLicense: {
            displayName: "driversLicense is a JSON Object of com.ofacapi.service.v3.CaseDriversLicense",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Read Method on com.ofacapi.service.v3.CaseDriversLicense to resolve"
          },
          gender: {
            displayName: "gender",
            type: "string",
            description: "gender Value"
          },
          ssn: {
            displayName: "ssn",
            type: "string",
            description: "ssn Value"
          },
          taxId: {
            displayName: "taxId",
            type: "string",
            description: "taxId Value"
          },
          digitalCurrencyAddress: {
            displayName: "digitalCurrencyAddress",
            type: "string",
            description: "digitalCurrencyAddress Value"
          },
          ids: {
            displayName: "ids is a JSON Object Array of com.ofacapi.listentry.ID",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.ID to resolve"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.Case Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["name", "dob", "citizenship", "phoneNumber", "type", "address", "passport", "driversLicense", "gender", "ssn", "taxId", "digitalCurrencyAddress", "ids"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["name", "dob", "citizenship", "phoneNumber", "type", "address", "passport", "driversLicense", "gender", "ssn", "taxId", "digitalCurrencyAddress", "ids"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.CaseAddress": {
        displayName: "com.ofacapi.service.v3.CaseAddress",
        description: "com.ofacapi.service.v3.CaseAddress",
        properties: {
          address1: {
            displayName: "address1",
            type: "string",
            description: "address1 Value"
          },
          address2: {
            displayName: "address2",
            type: "string",
            description: "address2 Value"
          },
          address3: {
            displayName: "address3",
            type: "string",
            description: "address3 Value"
          },
          address4: {
            displayName: "address4",
            type: "string",
            description: "address4 Value"
          },
          city: {
            displayName: "city",
            type: "string",
            description: "city Value"
          },
          stateOrProvince: {
            displayName: "stateOrProvince",
            type: "string",
            description: "stateOrProvince Value"
          },
          postalCode: {
            displayName: "postalCode",
            type: "string",
            description: "postalCode Value"
          },
          country: {
            displayName: "country",
            type: "string",
            description: "country Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.CaseAddress Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["address1", "address2", "address3", "address4", "city", "stateOrProvince", "postalCode", "country"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["address1", "address2", "address3", "address4", "city", "stateOrProvince", "postalCode", "country"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.CaseDriversLicense": {
        displayName: "com.ofacapi.service.v3.CaseDriversLicense",
        description: "com.ofacapi.service.v3.CaseDriversLicense",
        properties: {
          licenseNumber: {
            displayName: "licenseNumber",
            type: "string",
            description: "licenseNumber Value"
          },
          licenseCountry: {
            displayName: "licenseCountry",
            type: "string",
            description: "licenseCountry Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.CaseDriversLicense Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["licenseNumber", "licenseCountry"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["licenseNumber", "licenseCountry"],
            outputs: ["JSON.String"]
          },
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.CaseDriversLicense Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["licenseNumber", "licenseCountry"]
          }
        }
      },
      "com.ofacapi.service.v3.CasePassport": {
        displayName: "com.ofacapi.service.v3.CasePassport",
        description: "com.ofacapi.service.v3.CasePassport",
        properties: {
          passportNumber: {
            displayName: "passportNumber",
            type: "string",
            description: "passportNumber Value"
          },
          passportCountry: {
            displayName: "passportCountry",
            type: "string",
            description: "passportCountry Value"
          },
          "JSON.String": {
            displayName: "Packed JSON Item",
            type: "string",
            extendedType: "k2.com/2019/memo"
          }
        },
        methods: {
          UnpackJSONObject: {
            displayName: "Unpack JSON Object",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.CasePassport Object String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["passportNumber", "passportCountry"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["passportNumber", "passportCountry"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.SearchRequestV3": {
        displayName: "com.ofacapi.service.v3.SearchRequestV3",
        description: "com.ofacapi.service.v3.SearchRequestV3",
        properties: {
          apiKey: {
            displayName: "apiKey",
            type: "string",
            description: "apiKey Value"
          },
          includeAlias: {
            displayName: "includeAlias",
            type: "boolean",
            description: "includeAlias Value"
          },
          informalName: {
            displayName: "informalName",
            type: "boolean",
            description: "informalName Value"
          },
          minScore: {
            displayName: "minScore",
            type: "number",
            description: "minScore Value"
          },
          format: {
            displayName: "format",
            type: "string",
            description: "format Value"
          },
          source: {
            displayName: "source",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "source Value"
          },
          type: {
            displayName: "type",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "type Value"
          },
          cases: {
            displayName: "cases is a JSON Object Array of com.ofacapi.service.v3.Case",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v3.Case to resolve"
          }
        },
        methods: {
          post_3: {
            displayName: "post_3",
            type: "create",
            inputs: ["apiKey", "includeAlias", "informalName", "minScore", "format", "source", "type", "cases"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["error", "errorMessage", "sourcesUsed", "matches"],
            data: {
              httpMethod: "post",
              httpPath: "/v3/",
              httpResponseObject: ""
            }
          },
          post_4: {
            displayName: "post_4",
            type: "create",
            inputs: ["apiKey", "includeAlias", "informalName", "minScore", "format", "source", "type", "cases"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["error", "errorMessage", "sourcesUsed", "matches"],
            data: {
              httpMethod: "post",
              httpPath: "/v3",
              httpResponseObject: ""
            }
          }
        }
      },
      "com.ofacapi.listentry.AKA": {
        displayName: "com.ofacapi.listentry.AKA",
        description: "com.ofacapi.listentry.AKA",
        properties: {
          score: {
            displayName: "score",
            type: "number",
            description: "score Value"
          },
          uid: {
            displayName: "uid",
            type: "number",
            description: "uid Value"
          },
          category: {
            displayName: "category",
            type: "string",
            description: "category Value"
          },
          lastName: {
            displayName: "lastName",
            type: "string",
            description: "lastName Value"
          },
          firstName: {
            displayName: "firstName",
            type: "string",
            description: "firstName Value"
          },
          city: {
            displayName: "city",
            type: "string",
            description: "city Value"
          },
          country: {
            displayName: "country",
            type: "string",
            description: "country Value"
          },
          dob: {
            displayName: "dob",
            type: "string",
            description: "dob Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.listentry.AKA Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["score", "uid", "category", "lastName", "firstName", "city", "country", "dob"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["score", "uid", "category", "lastName", "firstName", "city", "country", "dob"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.listentry.Address": {
        displayName: "com.ofacapi.listentry.Address",
        description: "com.ofacapi.listentry.Address",
        properties: {
          uid: {
            displayName: "uid",
            type: "number",
            description: "uid Value"
          },
          address1: {
            displayName: "address1",
            type: "string",
            description: "address1 Value"
          },
          address2: {
            displayName: "address2",
            type: "string",
            description: "address2 Value"
          },
          address3: {
            displayName: "address3",
            type: "string",
            description: "address3 Value"
          },
          city: {
            displayName: "city",
            type: "string",
            description: "city Value"
          },
          stateOrProvince: {
            displayName: "stateOrProvince",
            type: "string",
            description: "stateOrProvince Value"
          },
          postalCode: {
            displayName: "postalCode",
            type: "string",
            description: "postalCode Value"
          },
          country: {
            displayName: "country",
            type: "string",
            description: "country Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.listentry.Address Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["uid", "address1", "address2", "address3", "city", "stateOrProvince", "postalCode", "country"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["uid", "address1", "address2", "address3", "city", "stateOrProvince", "postalCode", "country"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.listentry.Passport": {
        displayName: "com.ofacapi.listentry.Passport",
        description: "com.ofacapi.listentry.Passport",
        properties: {
          passport: {
            displayName: "passport",
            type: "string",
            description: "passport Value"
          },
          passportCountry: {
            displayName: "passportCountry",
            type: "string",
            description: "passportCountry Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.listentry.Passport Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["passport", "passportCountry"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["passport", "passportCountry"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.SearchMatch": {
        displayName: "com.ofacapi.service.v3.SearchMatch",
        description: "com.ofacapi.service.v3.SearchMatch",
        properties: {
          score: {
            displayName: "score",
            type: "number",
            description: "score Value"
          },
          source: {
            displayName: "source",
            type: "string",
            description: "source Value"
          },
          firstName: {
            displayName: "firstName",
            type: "string",
            description: "firstName Value"
          },
          lastName: {
            displayName: "lastName",
            type: "string",
            description: "lastName Value"
          },
          fullName: {
            displayName: "fullName",
            type: "string",
            description: "fullName Value"
          },
          dob: {
            displayName: "dob",
            type: "string",
            description: "dob Value"
          },
          addresses: {
            displayName: "addresses is a JSON Object Array of com.ofacapi.listentry.Address",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.Address to resolve"
          },
          citizenship: {
            displayName: "citizenship",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "citizenship Value"
          },
          phoneNumbers: {
            displayName: "phoneNumbers",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "phoneNumbers Value"
          },
          title: {
            displayName: "title",
            type: "string",
            description: "title Value"
          },
          uid: {
            displayName: "uid",
            type: "number",
            description: "uid Value"
          },
          sdnType: {
            displayName: "sdnType",
            type: "string",
            description: "sdnType Value"
          },
          remarks: {
            displayName: "remarks",
            type: "string",
            description: "remarks Value"
          },
          gender: {
            displayName: "gender",
            type: "string",
            description: "gender Value"
          },
          programs: {
            displayName: "programs",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "programs Value"
          },
          additionalSanctions: {
            displayName: "additionalSanctions",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "additionalSanctions Value"
          },
          passports: {
            displayName: "passports is a JSON Object Array of com.ofacapi.listentry.Passport",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.Passport to resolve"
          },
          driversLicenses: {
            displayName: "driversLicenses is a JSON Object Array of com.ofacapi.service.v3.CaseDriversLicense",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v3.CaseDriversLicense to resolve"
          },
          callSign: {
            displayName: "callSign",
            type: "string",
            description: "callSign Value"
          },
          vesselType: {
            displayName: "vesselType",
            type: "string",
            description: "vesselType Value"
          },
          vesselFlag: {
            displayName: "vesselFlag",
            type: "string",
            description: "vesselFlag Value"
          },
          tonnage: {
            displayName: "tonnage",
            type: "string",
            description: "tonnage Value"
          },
          grossRegisteredTonnage: {
            displayName: "grossRegisteredTonnage",
            type: "string",
            description: "grossRegisteredTonnage Value"
          },
          vesselOwner: {
            displayName: "vesselOwner",
            type: "string",
            description: "vesselOwner Value"
          },
          effectiveDate: {
            displayName: "effectiveDate",
            type: "string",
            description: "effectiveDate Value"
          },
          expirationDate: {
            displayName: "expirationDate",
            type: "string",
            description: "expirationDate Value"
          },
          standardOrder: {
            displayName: "standardOrder",
            type: "string",
            description: "standardOrder Value"
          },
          lastUpdate: {
            displayName: "lastUpdate",
            type: "string",
            description: "lastUpdate Value"
          },
          action: {
            displayName: "action",
            type: "string",
            description: "action Value"
          },
          frCitation: {
            displayName: "frCitation",
            type: "string",
            description: "frCitation Value"
          },
          description: {
            displayName: "description",
            type: "string",
            description: "description Value"
          },
          eccn: {
            displayName: "eccn",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "eccn Value"
          },
          ids: {
            displayName: "ids is a JSON Object Array of com.ofacapi.listentry.ID",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.ID to resolve"
          },
          akas: {
            displayName: "akas is a JSON Object Array of com.ofacapi.listentry.AKA",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.listentry.AKA to resolve"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.SearchMatch Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["score", "source", "firstName", "lastName", "fullName", "dob", "addresses", "citizenship", "phoneNumbers", "title", "uid", "sdnType", "remarks", "gender", "programs", "additionalSanctions", "passports", "driversLicenses", "callSign", "vesselType", "vesselFlag", "tonnage", "grossRegisteredTonnage", "vesselOwner", "effectiveDate", "expirationDate", "standardOrder", "lastUpdate", "action", "frCitation", "description", "eccn", "ids", "akas"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["score", "source", "firstName", "lastName", "fullName", "dob", "addresses", "citizenship", "phoneNumbers", "title", "uid", "sdnType", "remarks", "gender", "programs", "additionalSanctions", "passports", "driversLicenses", "callSign", "vesselType", "vesselFlag", "tonnage", "grossRegisteredTonnage", "vesselOwner", "effectiveDate", "expirationDate", "standardOrder", "lastUpdate", "action", "frCitation", "description", "eccn", "ids", "akas"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v3.UsedSourceV3": {
        displayName: "com.ofacapi.service.v3.UsedSourceV3",
        description: "com.ofacapi.service.v3.UsedSourceV3",
        properties: {
          source: {
            displayName: "source",
            type: "string",
            description: "source Value"
          },
          publishDate: {
            displayName: "publishDate",
            type: "string",
            description: "publishDate Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v3.UsedSourceV3 Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["source", "publishDate"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["source", "publishDate"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v2.UsedSource": {
        displayName: "com.ofacapi.service.v2.UsedSource",
        description: "com.ofacapi.service.v2.UsedSource",
        properties: {
          source: {
            displayName: "source",
            type: "string",
            description: "source Value"
          }
        },
        methods: {
          UnpackJSONObjectArray: {
            displayName: "Unpack JSON Object Array",
            type: "list",
            inputs: [],
            requiredInputs: [],
            parameters: {
              "JSON.String.Param": {
                displayName: "JSON com.ofacapi.service.v2.UsedSource Object Array String",
                description: "JSON String",
                type: "string",
                extendedType: "k2.com/2019/memo"
              }
            },
            requiredParameters: ["JSON.String.Param"],
            outputs: ["source"]
          },
          PackJSONObject: {
            displayName: "Pack JSON Object",
            type: "read",
            inputs: ["source"],
            outputs: ["JSON.String"]
          }
        }
      },
      "com.ofacapi.service.v2.BatchSearchRequestV2": {
        displayName: "com.ofacapi.service.v2.BatchSearchRequestV2",
        description: "com.ofacapi.service.v2.BatchSearchRequestV2",
        properties: {
          apiKey: {
            displayName: "apiKey",
            type: "string",
            description: "apiKey Value"
          },
          includeAlias: {
            displayName: "includeAlias",
            type: "boolean",
            description: "includeAlias Value"
          },
          includeID: {
            displayName: "includeID",
            type: "boolean",
            description: "includeID Value"
          },
          informalName: {
            displayName: "informalName",
            type: "boolean",
            description: "informalName Value"
          },
          type: {
            displayName: "type",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "type Value"
          },
          minScore: {
            displayName: "minScore",
            type: "number",
            description: "minScore Value"
          },
          format: {
            displayName: "format",
            type: "string",
            description: "format Value"
          },
          source: {
            displayName: "source",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "source Value"
          },
          names: {
            displayName: "names",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "names Value"
          }
        },
        methods: {
          post_5: {
            displayName: "post_5",
            type: "create",
            inputs: ["apiKey", "includeAlias", "includeID", "informalName", "type", "minScore", "format", "source", "names"],
            requiredInputs: [],
            parameters: {},
            requiredParameters: [],
            outputs: ["error", "errorMessage", "searchTerm", "sourcesUsed", "matches"],
            data: {
              httpMethod: "post",
              httpPath: "/v2/batch",
              httpResponseObject: ""
            }
          }
        }
      },
      "com.ofacapi.service.v4.EntityResponse": {
        displayName: "com.ofacapi.service.v4.EntityResponse",
        description: "com.ofacapi.service.v4.EntityResponse",
        properties: {
          error: {
            displayName: "error",
            type: "boolean",
            description: "error Value"
          },
          errorMessage: {
            displayName: "errorMessage",
            type: "string",
            description: "errorMessage Value"
          },
          sources: {
            displayName: "sources is a JSON Object Array of com.ofacapi.service.v4.SourceData",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.ofacapi.service.v4.SourceData to resolve"
          },
          entities: {
            displayName: "entities is a JSON Object Array of com.rockandwelch.entity.model.Entity",
            type: "extendedString",
            extendedType: "k2.com/2019/memo",
            description: "Call the Unpack JSON Object Array List Method on com.rockandwelch.entity.model.Entity to resolve"
          }
        },
        methods: {
          getEntityById: {
            displayName: "getEntityById",
            type: "read",
            inputs: [],
            requiredInputs: [],
            parameters: {
              id: {
                displayName: "id",
                type: "string"
              }
            },
            requiredParameters: ["id"],
            outputs: ["error", "errorMessage", "sources", "entities"],
            data: {
              httpMethod: "get",
              httpPath: "/v4/entities/{id}",
              httpResponseObject: ""
            }
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: a,
  methodName: t,
  parameters: s,
  properties: r,
  configuration: o
}) {
  switch (a) {
    case "com.ofacapi.service.v4.Case":
      await f(t, s, r);
      break;
    case "com.ofacapi.service.v4.CaseRequest":
      await h(t, s, r, o);
      break;
    case "com.rockandwelch.entity.model.Address":
      await k(t, s, r);
      break;
    case "com.rockandwelch.entity.model.Identification":
      await b(t, s, r);
      break;
    case "com.ofacapi.service.v4.SourceData":
      await J(t, s, r);
      break;
    case "com.rockandwelch.entity.model.AdditionalInformation":
      await w(t, s, r);
      break;
    case "com.rockandwelch.entity.model.AircraftData":
      await _(t, s, r);
      break;
    case "com.rockandwelch.entity.model.Alias":
      await P(t, s, r);
      break;
    case "com.rockandwelch.entity.model.CryptoWallet":
      await v(t, s, r);
      break;
    case "com.rockandwelch.entity.model.Entity":
      await j(t, s, r, o);
      break;
    case "com.rockandwelch.entity.model.OrganizationData":
      await x(t, s, r);
      break;
    case "com.rockandwelch.entity.model.PersonData":
      await A(t, s, r);
      break;
    case "com.rockandwelch.entity.model.VesselData":
      await V(t, s, r);
      break;
    case "com.rockandwelch.search.manager.domain.Match":
      await U(t, s, r);
      break;
    case "com.rockandwelch.search.manager.domain.MatchField":
      await T(t, s, r);
      break;
    case "com.rockandwelch.search.manager.domain.MatchSummary":
      await C(t, s, r);
      break;
    case "com.rockandwelch.search.manager.domain.ScreenResult":
      await R(t, s, r);
      break;
    case "com.ofacapi.service.v4.bulk.JobRequest":
      await D(t, s, r, o);
      break;
    case "com.ofacapi.dao.entity.Job":
      await I(t, s, r, o);
      break;
    case "com.ofacapi.listentry.ID":
      await q(t, s, r);
      break;
    case "com.ofacapi.service.v3.Case":
      await M(t, s, r);
      break;
    case "com.ofacapi.service.v3.CaseAddress":
      await E(t, s, r);
      break;
    case "com.ofacapi.service.v3.CaseDriversLicense":
      await L(t, s, r);
      break;
    case "com.ofacapi.service.v3.CasePassport":
      await K(t, s, r);
      break;
    case "com.ofacapi.service.v3.SearchRequestV3":
      await F(t, s, r, o);
      break;
    case "com.ofacapi.listentry.AKA":
      await z(t, s, r);
      break;
    case "com.ofacapi.listentry.Address":
      await W(t, s, r);
      break;
    case "com.ofacapi.listentry.Passport":
      await H(t, s, r);
      break;
    case "com.ofacapi.service.v3.SearchMatch":
      await B(t, s, r);
      break;
    case "com.ofacapi.service.v3.UsedSourceV3":
      await X(t, s, r);
      break;
    case "com.ofacapi.service.v2.UsedSource":
      await $(t, s, r);
      break;
    case "com.ofacapi.service.v2.BatchSearchRequestV2":
      await G(t, s, r, o);
      break;
    case "com.ofacapi.service.v4.EntityResponse":
      await Q(t, s, r, o);
      break;
    default:
      throw new Error("The object " + a + " is not supported.");
  }
};
async function f(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Y(t);
      break;
    case "PackJSONObject":
      await Z(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function h(a, t, s, r) {
  switch (a) {
    case "post":
      await ee(t, s, r);
      break;
    case "post_1":
      await te(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function k(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await ae(t);
      break;
    case "PackJSONObject":
      await re(t, s);
      break;
    case "UnpackJSONObjectArray":
      await ie(t);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function b(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await se(t);
      break;
    case "PackJSONObject":
      await oe(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function J(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ne(t);
      break;
    case "PackJSONObject":
      await ce(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function w(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await pe(t);
      break;
    case "PackJSONObject":
      await de(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function _(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await le(t);
      break;
    case "PackJSONObject":
      await me(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function P(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ye(t);
      break;
    case "PackJSONObject":
      await ue(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function v(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Ne(t);
      break;
    case "PackJSONObject":
      await Oe(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function j(a, t, s, r) {
  switch (a) {
    case "getEntities":
      await Se(t, s, r);
      break;
    case "UnpackJSONObject":
      await ge(t);
      break;
    case "PackJSONObject":
      await fe(t, s);
      break;
    case "UnpackJSONObjectArray":
      await he(t);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function x(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await ke(t);
      break;
    case "PackJSONObject":
      await be(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function A(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await Je(t);
      break;
    case "PackJSONObject":
      await we(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function V(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await _e(t);
      break;
    case "PackJSONObject":
      await Pe(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function U(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ve(t);
      break;
    case "PackJSONObject":
      await je(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function T(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await xe(t);
      break;
    case "PackJSONObject":
      await Ae(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function C(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await Ve(t);
      break;
    case "PackJSONObject":
      await Ue(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function R(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Te(t);
      break;
    case "PackJSONObject":
      await Ce(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function D(a, t, s, r) {
  switch (a) {
    case "post_2":
      await Re(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function I(a, t, s, r) {
  switch (a) {
    case "status":
      await De(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function q(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Ie(t);
      break;
    case "PackJSONObject":
      await qe(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function M(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Me(t);
      break;
    case "PackJSONObject":
      await Ee(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function E(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await Le(t);
      break;
    case "PackJSONObject":
      await Ke(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function L(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await Fe(t);
      break;
    case "PackJSONObject":
      await ze(t, s);
      break;
    case "UnpackJSONObjectArray":
      await We(t);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function K(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObject":
      await He(t);
      break;
    case "PackJSONObject":
      await Be(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function F(a, t, s, r) {
  switch (a) {
    case "post_3":
      await Xe(t, s, r);
      break;
    case "post_4":
      await $e(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function z(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Ge(t);
      break;
    case "PackJSONObject":
      await Qe(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function W(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Ye(t);
      break;
    case "PackJSONObject":
      await Ze(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function H(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await et(t);
      break;
    case "PackJSONObject":
      await tt(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function B(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await at(t);
      break;
    case "PackJSONObject":
      await rt(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function X(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await it(t);
      break;
    case "PackJSONObject":
      await st(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function $(a, t, s, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ot(t);
      break;
    case "PackJSONObject":
      await nt(t, s);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function G(a, t, s, r) {
  switch (a) {
    case "post_5":
      await ct(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function Q(a, t, s, r) {
  switch (a) {
    case "getEntityById":
      await pt(t, s, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
function Y(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Z(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ee(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v4/search", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function te(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v4/screen", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function ae(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function re(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ie(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function se(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function oe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ne(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ce(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function pe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function de(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function le(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function me(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ye(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ue(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ne(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Oe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Se(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v4/entities", n = new XMLHttpRequest();
    n.onreadystatechange = function() {
      try {
        if (n.readyState !== 4) return;
        if (n.status !== 200) throw new Error("Failed with status " + n.status);
        let p = JSON.parse(n.responseText), c = y(p, "", {});
        postResult(c), r();
      } catch (p) {
        o(p);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", n.open("get", e + i), n.send();
  });
}
function ge(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function fe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function he(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ke(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function be(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Je(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function we(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function _e(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Pe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ve(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function je(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function xe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ae(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ve(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ue(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Te(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ce(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Re(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v4/beta/jobs", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function De(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = `/v4/beta/jobs/${encodeURIComponent(a.id)}`, n = new XMLHttpRequest();
    n.onreadystatechange = function() {
      try {
        if (n.readyState !== 4) return;
        if (n.status !== 200) throw new Error("Failed with status " + n.status);
        let p = JSON.parse(n.responseText), c = y(p, "", {});
        postResult(c), r();
      } catch (p) {
        o(p);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", n.open("get", e + i), n.send();
  });
}
function Ie(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function qe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Me(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ee(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Le(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ke(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Fe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ze(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function We(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function He(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const i in e)
        e.hasOwnProperty(i) && typeof e[i] == "object" && (e[i] = JSON.stringify(e[i]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Be(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Xe(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v3/", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function $e(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v3", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function Ge(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Qe(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ye(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Ze(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function et(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function tt(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function at(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function rt(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function it(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function st(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ot(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((i) => {
        for (const n in i)
          i.hasOwnProperty(n) && typeof i[n] == "object" && (i[n] = JSON.stringify(i[n]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function nt(a, t, s) {
  return new Promise((r, o) => {
    try {
      let e = {
        "JSON.String": JSON.stringify(t)
      };
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ct(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = "/v2/batch", n = u(t), p = N(n), l = JSON.stringify(p), c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      try {
        if (c.readyState !== 4) return;
        if (c.status !== 200 && c.status !== 201) throw new Error("Failed with status " + c.status);
        let d = JSON.parse(c.responseText), m = y(d, "", {});
        postResult(m), r();
      } catch (d) {
        o(d);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", c.open("post", e + i), c.setRequestHeader("Content-Type", "application/json"), c.send(l);
  });
}
function pt(a, t, s) {
  return new Promise((r, o) => {
    let e = s.ServiceURL, i = `/v4/entities/${encodeURIComponent(a.id)}`, n = new XMLHttpRequest();
    n.onreadystatechange = function() {
      try {
        if (n.readyState !== 4) return;
        if (n.status !== 200) throw new Error("Failed with status " + n.status);
        let p = JSON.parse(n.responseText), c = y(p, "", {});
        postResult(c), r();
      } catch (p) {
        o(p);
      }
    }, e = e.endsWith("/") ? e : e + "/", i = i.startsWith("/") ? i.substr(1) : i + "/", n.open("get", e + i), n.send();
  });
}
function y(a, t, s) {
  return a.length > 0 ? s = a.map((r) => {
    let o = {};
    return S(r, t, o), o;
  }) : S(a, t, s), s;
}
function S(a, t, s) {
  for (const r in a)
    if (a.hasOwnProperty(r)) {
      const o = a[r];
      let e = (t != "" ? t + "." : "") + r;
      typeof o == "object" && o != null && o != null ? o.length === void 0 && e.split(".").length < 1 ? y(o, e, s) : s[e] = JSON.stringify(a[r]) : s[e] = a[r];
    }
}
function u(a) {
  for (const t in a)
    if (a.hasOwnProperty(t)) {
      const s = a[t];
      try {
        a[t] = JSON.parse(s), typeof a[t] == "object" && u(a[t]);
      } catch {
        a[t] = s;
      }
    }
  return a;
}
function N(a) {
  let t = {};
  for (const s in a)
    if (a.hasOwnProperty(s)) {
      const r = a[s];
      if (s.indexOf(".") > 0) {
        let o = s.split(".");
        t[o[0]] = g(t[o[0]], s.replace(`${o[0]}.`, ""), r);
      } else
        t[s] = r;
    }
  return t;
}
function g(a, t, s) {
  if (a == null && (a = {}), t.indexOf(".") > 0) {
    let r = t.split(".");
    a[r[0]] = g(a[r[0]], t.replace(`${r[0]}.`, ""), s);
  } else
    a[t] = s;
  return a;
}
//# sourceMappingURL=index.js.map

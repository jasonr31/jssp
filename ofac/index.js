metadata = {
  systemName: "ofac.api.jssp.broker",
  displayName: "OFAC API JSSP Broker",
  description: "OFAC API service documentation.",
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
          }
        }
      },
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
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: a,
  methodName: t,
  parameters: i,
  properties: r,
  configuration: o
}) {
  switch (a) {
    case "com.ofacapi.service.v4.CaseRequest":
      await S(t, i, r, o);
      break;
    case "com.ofacapi.service.v4.Case":
      await g(t, i, r);
      break;
    case "com.rockandwelch.entity.model.Address":
      await h(t, i, r);
      break;
    case "com.rockandwelch.entity.model.Identification":
      await k(t, i, r);
      break;
    case "com.ofacapi.service.v4.SourceData":
      await f(t, i, r);
      break;
    case "com.rockandwelch.search.manager.domain.ScreenResult":
      await J(t, i, r);
      break;
    case "com.rockandwelch.search.manager.domain.Match":
      await w(t, i, r);
      break;
    case "com.rockandwelch.search.manager.domain.MatchSummary":
      await b(t, i, r);
      break;
    case "com.rockandwelch.search.manager.domain.MatchField":
      await P(t, i, r);
      break;
    case "com.rockandwelch.entity.model.Alias":
      await _(t, i, r);
      break;
    case "com.rockandwelch.entity.model.CryptoWallet":
      await j(t, i, r);
      break;
    case "com.rockandwelch.entity.model.AdditionalInformation":
      await x(t, i, r);
      break;
    case "com.rockandwelch.entity.model.PersonData":
      await A(t, i, r);
      break;
    case "com.rockandwelch.entity.model.OrganizationData":
      await V(t, i, r);
      break;
    case "com.rockandwelch.entity.model.VesselData":
      await v(t, i, r);
      break;
    case "com.rockandwelch.entity.model.AircraftData":
      await D(t, i, r);
      break;
    case "com.rockandwelch.entity.model.Entity":
      await U(t, i, r);
      break;
    default:
      throw new Error("The object " + a + " is not supported.");
  }
};
async function S(a, t, i, r) {
  switch (a) {
    case "post":
      await T(t, i, r);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function g(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await I(t);
      break;
    case "PackJSONObject":
      await C(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function h(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await R(t);
      break;
    case "PackJSONObject":
      await M(t, i);
      break;
    case "UnpackJSONObjectArray":
      await F(t);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function k(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await q(t);
      break;
    case "PackJSONObject":
      await E(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function f(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await K(t);
      break;
    case "PackJSONObject":
      await z(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function J(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await L(t);
      break;
    case "PackJSONObject":
      await W(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function w(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await H(t);
      break;
    case "PackJSONObject":
      await $(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function b(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await B(t);
      break;
    case "PackJSONObject":
      await X(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function P(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await G(t);
      break;
    case "PackJSONObject":
      await Q(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function _(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await Y(t);
      break;
    case "PackJSONObject":
      await Z(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function j(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ee(t);
      break;
    case "PackJSONObject":
      await te(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function x(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObjectArray":
      await ae(t);
      break;
    case "PackJSONObject":
      await re(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function A(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await ie(t);
      break;
    case "PackJSONObject":
      await ne(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function V(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await oe(t);
      break;
    case "PackJSONObject":
      await ce(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function v(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await se(t);
      break;
    case "PackJSONObject":
      await de(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function D(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await pe(t);
      break;
    case "PackJSONObject":
      await me(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
async function U(a, t, i, r) {
  switch (a) {
    case "UnpackJSONObject":
      await le(t);
      break;
    case "PackJSONObject":
      await ye(t, i);
      break;
    default:
      throw new Error("The method " + a + " is not supported.");
  }
}
function T(a, t, i) {
  return new Promise((r, o) => {
    let e = i.ServiceURL, n = "/v4/search", c = y(t), s = ue(c), N = JSON.stringify(s), d = new XMLHttpRequest();
    d.onreadystatechange = function() {
      try {
        if (d.readyState !== 4) return;
        if (d.status !== 200 && d.status !== 201) throw new Error("Failed with status " + d.status);
        let p = JSON.parse(d.responseText), O = l(p, "", {});
        postResult(O), r();
      } catch (p) {
        o(p);
      }
    }, e = e.endsWith("/") ? e : e + "/", n = n.startsWith("/") ? n.substr(1) : n + "/", d.open("post", e + n), d.setRequestHeader("Content-Type", "application/json"), d.send(N);
  });
}
function I(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function C(a, t, i) {
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
function R(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function M(a, t, i) {
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
function F(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function q(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function E(a, t, i) {
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
function K(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function z(a, t, i) {
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
function L(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function W(a, t, i) {
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
function H(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function $(a, t, i) {
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
function B(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function X(a, t, i) {
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
function G(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Q(a, t, i) {
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
function Y(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function Z(a, t, i) {
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
function ee(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function te(a, t, i) {
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
function ae(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      e.forEach((n) => {
        for (const c in n)
          n.hasOwnProperty(c) && typeof n[c] == "object" && (n[c] = JSON.stringify(n[c]));
      }), postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function re(a, t, i) {
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
function ie(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ne(a, t, i) {
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
function oe(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ce(a, t, i) {
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
function se(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function de(a, t, i) {
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
function pe(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function me(a, t, i) {
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
function le(a, t, i) {
  return new Promise((r, o) => {
    try {
      let e = JSON.parse(a["JSON.String.Param"]);
      for (const n in e)
        e.hasOwnProperty(n) && typeof e[n] == "object" && (e[n] = JSON.stringify(e[n]));
      postResult(e), r();
    } catch (e) {
      o(e);
    }
  });
}
function ye(a, t, i) {
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
function l(a, t, i) {
  return a.length > 0 ? i = a.map((r) => {
    let o = {};
    return m(r, t, o), o;
  }) : m(a, t, i), i;
}
function m(a, t, i) {
  for (const r in a)
    if (a.hasOwnProperty(r)) {
      const o = a[r];
      let e = (t != "" ? t + "." : "") + r;
      typeof o == "object" && o != null && o != null ? o.length === void 0 && e.split(".").length < 1 ? l(o, e, i) : i[e] = JSON.stringify(a[r]) : i[e] = a[r];
    }
}
function y(a) {
  for (const t in a)
    if (a.hasOwnProperty(t)) {
      const i = a[t];
      try {
        a[t] = JSON.parse(i), typeof a[t] == "object" && y(a[t]);
      } catch {
        a[t] = i;
      }
    }
  return a;
}
function ue(a) {
  let t = {};
  for (const i in a)
    if (a.hasOwnProperty(i)) {
      const r = a[i];
      if (i.indexOf(".") > 0) {
        let o = i.split(".");
        t[o[0]] = u(t[o[0]], i.replace(`${o[0]}.`, ""), r);
      } else
        t[i] = r;
    }
  return t;
}
function u(a, t, i) {
  if (a == null && (a = {}), t.indexOf(".") > 0) {
    let r = t.split(".");
    a[r[0]] = u(a[r[0]], t.replace(`${r[0]}.`, ""), i);
  } else
    a[t] = i;
  return a;
}
//# sourceMappingURL=index.js.map

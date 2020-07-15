
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  debugLib,
  sqltag
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

/**
 * Prisma Client JS version: 2.2.2
 * Query Engine version: a9e8c3d97ef2a0cf59256e6b26097f2a80f0a6a4
 */
exports.prismaVersion = {
  client: "2.2.2",
  engine: "a9e8c3d97ef2a0cf59256e6b26097f2a80f0a6a4"
}

exports.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = PrismaClientRustPanicError;
exports.PrismaClientInitializationError = PrismaClientInitializationError;
exports.PrismaClientValidationError = PrismaClientValidationError;

/**
 * Re-export of sql-template-tag
 */

exports.sql = sqltag.sqltag
exports.empty = sqltag.empty
exports.join = sqltag.join
exports.raw = sqltag.raw


/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(__dirname, 'query-engine-windows');

/**
 * Annotation for `node-file-trace`
**/
path.join(__dirname, 'schema.prisma');

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.OrderByArg = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Link\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":true,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"DateTime\",\"hasDefaultValue\":true,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"mappings\":[{\"model\":\"Link\",\"plural\":\"links\",\"findOne\":\"findOneLink\",\"findMany\":\"findManyLink\",\"create\":\"createOneLink\",\"delete\":\"deleteOneLink\",\"update\":\"updateOneLink\",\"deleteMany\":\"deleteManyLink\",\"updateMany\":\"updateManyLink\",\"upsert\":\"upsertOneLink\",\"aggregate\":\"aggregateLink\"}],\"schema\":{\"enums\":[{\"name\":\"OrderByArg\",\"values\":[\"asc\",\"desc\"]}],\"outputTypes\":[{\"name\":\"Link\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"createdAt\",\"args\":[],\"outputType\":{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"description\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"url\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"LinkAvgAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Float\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"LinkSumAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"LinkMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"LinkMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"AggregateLink\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"avg\",\"args\":[],\"outputType\":{\"type\":\"LinkAvgAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"sum\",\"args\":[],\"outputType\":{\"type\":\"LinkSumAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"min\",\"args\":[],\"outputType\":{\"type\":\"LinkMinAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"max\",\"args\":[],\"outputType\":{\"type\":\"LinkMaxAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Query\",\"fields\":[{\"name\":\"findManyLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"LinkOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":true,\"isList\":true,\"isNullable\":false}},{\"name\":\"aggregateLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"LinkOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"AggregateLink\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"findOneLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneLink\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"LinkCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteOneLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateOneLink\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"LinkUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"upsertOneLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"create\",\"inputType\":[{\"type\":\"LinkCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"update\",\"inputType\":[{\"type\":\"LinkUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Link\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateManyLink\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"LinkUpdateManyMutationInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteManyLink\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]}],\"inputTypes\":[{\"name\":\"LinkWhereInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"type\":\"IntFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"createdAt\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"type\":\"DateTimeFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"description\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"url\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"AND\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"OR\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"NOT\",\"inputType\":[{\"type\":\"LinkWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true}],\"isWhereType\":true,\"atLeastOne\":false},{\"name\":\"LinkWhereUniqueInput\",\"isOneOf\":true,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"atLeastOne\":true},{\"name\":\"LinkCreateInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"description\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"url\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"LinkUpdateInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"description\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"url\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"LinkUpdateManyMutationInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"description\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"url\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"IntFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"IntFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]}],\"atLeastOne\":false},{\"name\":\"DateTimeFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTimeFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]}],\"atLeastOne\":false},{\"name\":\"StringFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"StringFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"contains\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"startsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"endsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]}],\"atLeastOne\":false},{\"name\":\"LinkOrderByInput\",\"atLeastOne\":true,\"atMostOne\":true,\"isOrderType\":true,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"description\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"url\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false}]}]}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "binaryTargets": [],
    "experimentalFeatures": [],
    "config": {
      "copyRuntime": "true"
    },
    "name": "photon",
    "provider": "prisma-client-js",
    "output": "G:\\100dayschallenge\\hackernews-api\\Prisma\\Studio\\-100dayschallenge-hackernews-api",
    "isCustomOutput": true
  },
  "sqliteDatasourceOverrides": [
    {
      "name": "db",
      "url": "..\\..\\dev.db"
    }
  ],
  "relativePath": "..\\..",
  "clientVersion": "2.2.2",
  "engineVersion": "a9e8c3d97ef2a0cf59256e6b26097f2a80f0a6a4"
}
config.document = dmmf
config.dirname = __dirname

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
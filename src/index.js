const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Link = require('./resolvers/Link');
const User = require('./resolvers/User');

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  Link,
  User,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request) => {
    return { ...request, prisma };
  },
});

server.start(() => console.log('Server is listening to the port: 4000'));

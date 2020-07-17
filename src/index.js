const { GraphQLServer } = require('graphql-yoga');

const { PrismaClient } = require('@prisma/client');
const { PubSub } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Link = require('./resolvers/Link');
const User = require('./resolvers/User');
const Subscription = require('./resolvers/Subscription');
const Vote = require('./resolvers/Vote');

const prisma = new PrismaClient();

const pubsub = new PubSub();
const resolvers = {
  Query,
  Mutation,
  Link,
  User,
  Subscription,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request) => {
    return { ...request, prisma, pubsub };
  },
});

server.start(() => console.log('Server is listening to the port: 4000'));

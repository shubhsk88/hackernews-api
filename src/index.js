const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
}
`;

const resolvers = {
  Query: {
    info: () => `this is API of hackernews clone`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is listening to the port: 4000'));

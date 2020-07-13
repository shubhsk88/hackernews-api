const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
    feed:[Link!]!
}
type Link{
  id:ID!
  description:String!
  url:String!
}
`;

const links = [
  {
    id: 'link-0',
    url: 'www.reactjs.org',
    description: 'The component based library for developers',
  },
];
const resolvers = {
  Query: {
    feed: () => links,
    info: () => `This is API of hackernews clone`,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is listening to the port: 4000'));

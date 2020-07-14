const { GraphQLServer } = require('graphql-yoga');

const links = [
  {
    id: 'link-0',
    url: 'www.reactjs.org',
    description: 'The component based library for developers',
  },
];
let idCount = links.length;
const resolvers = {
  Query: {
    feed: () => links,
    info: () => `This is API of hackernews clone`,
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    deleteLink: (parent, args) => {
      let count;
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === args.id) {
          count = i;
        }
      }
      return links.splice(count, 1);
    },
    updateLink: (parent, args) => {
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === args.id) {
          links[i].description = args.description;
          links[i].url = args.url;
          return links[i];
        }
      }
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log('Server is listening to the port: 4000'));

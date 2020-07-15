const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    feed: (parent, args, context) => context.prisma.link.findMany(),
    info: () => `This is API of hackernews clone`,
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: { description: args.description, url: args.url },
      });

      return newLink;
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
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is listening to the port: 4000'));

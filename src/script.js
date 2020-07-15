const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'Doesnksat know',
      url: 'www.google.com',
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(newLink);
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => await prisma.disconnect());

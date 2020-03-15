const { PrismaClient } = require("@prisma/client");

async function main() {
  const prisma = new PrismaClient();

  try {
    console.time("remove");
    await prisma.user.deleteMany();
    console.timeEnd("remove");
    console.time("create");
    const user = await prisma.user.create({
      data: {
        email: "yann@test.com",
        password: "password",
        fullName: "Yann"
      }
    });
    console.timeEnd("create");

    console.log(user);
  } finally {
    await prisma.disconnect();
  }
}

main();

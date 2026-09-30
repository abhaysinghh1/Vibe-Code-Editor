import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create a sample user
  const user = await prisma.user.upsert({
    where: { email: "demo@vibecode.dev" },
    update: {},
    create: {
      email: "demo@vibecode.dev",
      name: "Demo User",
      image: null,
      role: "USER",
    },
  });

  console.log(`✅ Created user: ${user.name} (${user.email})`);

  // Create sample playgrounds
  const templates = ["REACT", "NEXTJS", "EXPRESS", "VUE", "HONO", "ANGULAR"] as const;

  for (const template of templates) {
    const playground = await prisma.playground.upsert({
      where: {
        id: `seed-${template.toLowerCase()}`,
      },
      update: {},
      create: {
        id: `seed-${template.toLowerCase()}`,
        title: `${template} Starter`,
        description: `A sample ${template} playground for development testing.`,
        template,
        userId: user.id,
      },
    });

    console.log(`✅ Created playground: ${playground.title}`);
  }

  console.log("🎉 Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });

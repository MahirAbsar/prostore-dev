import { PrismaClient } from "@/generated/prisma/client";
import { adapter } from "@/db/constants";
import sampleData from "@/db/sample-data";

async function main() {
  const prisma = new PrismaClient(adapter);
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully");
}

main();

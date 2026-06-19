"use server";
import { PrismaClient } from "@/generated/prisma/client";
import { adapter } from "@/db/constants";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
  const prisma = new PrismaClient(adapter);

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
}

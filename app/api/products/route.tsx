import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {

  const products = await prisma.product.findMany();
if(!products) return NextResponse.json({error: "No products found"}, {status: 404})
  return NextResponse.json(products, {status: 200});
}


export async function POST(request: NextRequest) {
  const body = await request.json();

  const validate = schema.safeParse(body);
  if(!validate.success) {
    return NextResponse.json({error: validate.error.errors}, {status: 400});
  }

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price
    }
  })
  return NextResponse.json(product, {status: 200});
}
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { stat } from "fs";



export async function GET(request: NextRequest, {params: {id}}: {params: {id: string}} ){

    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if(!product) {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }
    return NextResponse.json(product, {status: 200});
    
}

export async function PUT(request: NextRequest, {params: {id}}: {params: {id: string}}) {
    const body = await request.json();
    const validate = schema.safeParse(body);
    if(!validate.success) {
        return NextResponse.json({error: validate.error.errors}, {status: 400});
    }
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!product) return NextResponse.json({error: "Product does not exist"}, {status: 404});

    const updatedProduct = await prisma.product.update({
        where: {id: parseInt(id)},
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(updatedProduct, {status: 200});
}

export async function DELETE(request: NextRequest, {params: {id}}: {params: {id: string}}) {

    const body = await request.json();
    const validate = schema.safeParse(body);
    if(!validate.success) {
        return NextResponse.json({error: validate.error.errors}, {status: 400});
    }

    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!product) {
        return NextResponse.json({error: "Product does not exist."}, {status: 400});
    }
    const deletedProduct = await prisma.product.delete({
        where: {id: parseInt(id)}
    })

    return NextResponse.json(deletedProduct, {status: 200});
}
import { NextRequest, NextResponse } from "next/server"
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validate = schema.safeParse(body);
    if(!validate.success) return NextResponse.json(validate.error.errors, {status: 400});
    
    const checkUser = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if( checkUser ) return NextResponse.json({error: 'User already exists'}, {status: 400});

    const user = await prisma.user.create({
        data: {
            name: body.name, 
            email: body.email
        }
    })
    return NextResponse.json(user, {status: 201});
}
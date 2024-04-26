import prisma from "@/prisma/client";
import Email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validate = schema.safeParse(body);

    if(!validate.success) {
        return NextResponse.json({error: validate.error.errors}, {status: 400});
    } 

    const user = await prisma.user.findUnique({
        where: {email: body.email},
    })

    if(user) {
        return NextResponse.json({error: 'User already exists'}, {status: 400});
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({  
        data: {
            email: body.email,
            hashedPassword: hashedPassword,
        }
    })

    return NextResponse.json(newUser, {status: 201});
}
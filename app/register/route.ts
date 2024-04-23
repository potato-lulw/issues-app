import prisma from "@/prisma/client";
import Email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    prisma.user.findUnique({
        where: {email: body.email},
    })
}
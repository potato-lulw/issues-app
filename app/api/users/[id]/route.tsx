import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// interface Props {
//     params: {id: number} ;
// }

export async function GET(request: NextRequest, {params: {id}} : {params: {id: string}} ) {

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if(!user) {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }

    return NextResponse.json(user)
}


export async function PUT(request: NextRequest, {params: {id}} : {params: {id: number}} ) {
    const body = await request.json();

    const validate = schema.safeParse(body);
    if(!validate.success) {
        return NextResponse.json(validate.error.errors, {status: 400});
    }

    if(id > 10) {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }

    return NextResponse.json({id: 1, name: body.name}, {status: 200})
}

export async function DELETE(request: NextRequest, {params: {id}}: {params: {id: number}}) {
    if(id > 10) {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }

    return NextResponse.json({mssg: 'User Deleted'});
}
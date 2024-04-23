
import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';

export const authOptions = 
{
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email : {label: 'Email', type: 'email', placeholder: 'xyz@abc.com'},
                password : {label: 'Password', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                if(!user) return null;
                const passwordsMatched = await bcrypt.compare(credentials.password, user.hashedPassword || "");

                return passwordsMatched? user as any : null; 
            }
        }),
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            
        })
    ]
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
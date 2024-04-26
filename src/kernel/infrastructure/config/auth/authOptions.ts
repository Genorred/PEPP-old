import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {db} from "~/kernel/infrastructure/config/db";
import {Adapter} from "next-auth/adapters";
import {AuthOptions, getServerSession} from "next-auth";
import {api} from "~/kernel/infrastructure/config/trpc/server";
const prismaAdapter = PrismaAdapter(db) as Adapter
export const authOptions: AuthOptions = {
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    session: { strategy: 'database' },
    adapter: {
           ...prismaAdapter,
        createUser: api.user.create
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    pages: {
        signIn: "/auth/login",
        verifyRequest: "/auth/verify",
        newUser: "/auth/new-user"
    }
}
export const getServerAuthSession = () => getServerSession(authOptions);
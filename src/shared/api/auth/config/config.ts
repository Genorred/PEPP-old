import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {AuthOptions} from "next-auth";
import EmailProvider from "next-auth/providers/email";
export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: 'email', type: 'email'},
        //         password: { label: 'password', type: 'password'}
        //     },
        //     async authorize(credentials){
        //         if(!credentials?.email || !credentials?.password) return null
        //         const {email, password} = credentials
        //         return null
        //         // const user = Users.fi
        //     }
        // }),
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM
        // })
    ],
}
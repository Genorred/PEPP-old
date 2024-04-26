import NextAuth, { DefaultSession } from "next-auth"
export { User as appUser } from '../../../core/domain/User'
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's name. */
            id: string
            email: string;
            name?: string | null;
            image?: string | null;
        } & DefaultSession["user"]
    }
    type User = appUser
    // interface User extends  appUser {}
}

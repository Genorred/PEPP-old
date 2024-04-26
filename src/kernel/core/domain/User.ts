import {z} from 'zod'
export type UserId = string
export interface User {
    id: UserId;
    email: string | null;
    emailVerified?: Date | null;
    name?: string | null;
    image?: string | null;
}
export interface Session {
    user: {
        id: UserId;
        email: string| null;
        name?: string | null;
        image?: string | null;
    };
    expires: string;
}
export const UserSchema = z.object({
    email: z.string(),
    emailVerified: z.date().nullable(),
    name: z.string().nullable().optional(),
    image: z.string().nullable().optional()
})
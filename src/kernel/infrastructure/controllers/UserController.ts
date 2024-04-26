import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/kernel/infrastructure/config/trpc/trpc";
import {UserSchema} from "~/kernel/core/domain/User";
import {UserService} from "~/kernel/core/service/UserService";
import {UserRepositoryImpl} from "~/kernel/infrastructure/repository/UserRepositoryImpl";
import {AdapterUser} from "next-auth/adapters";


const userService = new UserService(new UserRepositoryImpl)
export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(UserSchema)
        .mutation(async ({input }) => {
            const res = await userService.create(input)
            return {...res, emailVerified: res?.emailVerified ?? null} as AdapterUser;
        }),
});

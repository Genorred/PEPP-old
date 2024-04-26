import type {UserRepository} from "~/kernel/core/repository/UserRepository";
import type {User, UserId} from "~/kernel/core/domain/User";
import {db} from "~/kernel/infrastructure/config/db";
import {AdapterUser} from "next-auth/adapters";

export class UserRepositoryImpl implements UserRepository {
    async create(user: Omit<AdapterUser, "id">): Promise<User> {
        return await db.user.create({ data: user})
    }
    async update(userId: UserId, user: User): Promise<User> {
        return await db.user.update({ where: {id: userId}, data: user})
    }
    async delete(userId: UserId): Promise<User> {
        return await db.user.delete({ where: { id: userId} })
    }
    async getAll(): Promise<User[]> {
        return await db.user.findMany()
    }
    async getOne(userId: UserId): Promise<User> {
        return await db.user.findFirstOrThrow({ where: {id: userId}})
    }
}
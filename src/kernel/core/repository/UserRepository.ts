import {User, UserId} from "~/kernel/core/domain/User";
import {AdapterUser} from "next-auth/adapters";

export interface UserRepository {
   create(user: Omit<AdapterUser, "id">): Promise<User>
   update(userId: UserId, user: Partial<User>): Promise<User>
   delete(userId: UserId): Promise<User>
   getAll(): Promise<User[]>
   getOne(userId: UserId): Promise<User>
}
import {UserRepository} from "~/kernel/core/repository/UserRepository";
import {User, UserId} from "~/kernel/core/domain/User";
import {AdapterUser} from "next-auth/adapters";

export class UserService {
    constructor(readonly userRepository: UserRepository) {
    }

    async create(user: Omit<AdapterUser, "id">): Promise<User> {
        return await this.userRepository.create(user)
    }

    update(userId: UserId, user: Partial<User>) {
        return this.userRepository.update(userId, user)
    }

    delete(userId: UserId) {
        try {
            return this.userRepository.delete(userId)
        } catch (e) {

        }
    }

    getAll() {
        try {
            return this.userRepository.getAll()
        } catch (e) {

        }
    }

    getOne(userId: UserId) {
        try {
            return this.userRepository.getOne(userId)
        } catch (e) {

        }
    }
}
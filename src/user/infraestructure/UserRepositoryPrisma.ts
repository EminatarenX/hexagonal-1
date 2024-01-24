import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/puertos/IUserRepository";
import { User } from "../dominio/user";

export class UserRepositoryPrisma implements IUserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<User> {
        const userSaved = await this.prisma.user.create({
            data: {
                name: user.name,
                lastName: user.lastName
            }
        })

        return new User(
            userSaved.name,
            userSaved.lastName,
            userSaved.id,
            userSaved.createdAt,
            userSaved.updatedAt
        );
    }
}
import { User } from "../../dominio/user";

export interface IUserRepository {
    create(user: User): Promise<User>;
}
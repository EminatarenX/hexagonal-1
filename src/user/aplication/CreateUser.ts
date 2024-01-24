import { IUserRepository } from "../interfaces/puertos/IUserRepository";
import { User } from "../dominio/user";

export class CreateUser {
    constructor(private readonly repository: IUserRepository){}
    async run(name: string, lastName: string){
        const user = new User(name, lastName)
        return await this.repository.create(user)
    }
}
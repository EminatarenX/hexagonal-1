import { IProductRepository } from "../interfaces/puertos/IProductRepository";

export class DeleteProduct {
    constructor(private readonly repository: IProductRepository){}
    async run(id: string) {
        return await this.repository.delete(id)
    }
}
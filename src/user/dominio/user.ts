export class User {
    constructor(
        public name: string,
        public lastName: string,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ){}

    
}
import { Router } from "express";
import { CreateUser } from "../../aplication/CreateUser";
import { UserRepositoryPrisma } from "../../infraestructure/UserRepositoryPrisma";

const UserRouter = Router()
const repository = new UserRepositoryPrisma()
const createUser = new CreateUser(repository)

UserRouter.post('/create', async(req, res) => {
    const { name, lastName } = req.body;
    const user = await createUser.run(name, lastName)
    res.status(201).json({user})
})

// soon find by id, find all, update, delete

export default UserRouter;

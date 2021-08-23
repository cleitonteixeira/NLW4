import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserControllers {
        
    async create(request: Request, response: Response){
        const { Nome, Email } = request.body;
        
        const usersRepository = await getRepository(User);

        const user = usersRepository.create({
            Nome, Email
        });

        await usersRepository.save(user);

        return response.json(user);
    }

}

export { UserControllers };
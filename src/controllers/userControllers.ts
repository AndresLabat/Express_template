import { Request, Response } from "express";
import { Users } from "../models/Users";

const getUserName = async (req: Request, res: Response) => {

    try {
        const userByName = req.params.name
        const getUserByName = await Users.findOneBy({
            name: userByName 
        })
        return res.json(`Aqui tienes la información del usuario con name ${userByName}: ${getUserByName?.name}, ${getUserByName?.age}`);
    } catch (error) {
        return res.json(error);
    }
}

export {getUserName};
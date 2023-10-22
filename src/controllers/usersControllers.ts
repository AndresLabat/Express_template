import { Request, Response } from "express";
import { Users } from "../models/Users";

const getUsers = async (req: Request, res: Response) => {

    try {
        const getAllUsers = await Users.find()
        return res.json(getAllUsers);
    } catch (error) {
        return res.json(error);
    }
}

const getUserId = async (req: Request, res: Response) => {

    try {
        const userById = parseInt(req.params.id)
        const getUserById = await Users.findOneBy({
            id: userById 
        })
        return res.json(`Aqui tienes la información del usuario con id ${userById}: ${getUserById?.name}, ${getUserById?.age}`);
    } catch (error) {
        return res.json(error);
    }
}

const createUser = async (req: Request, res: Response) => {

    try {
        const newUser = await Users.create({
            name: req.body.name,
            age: req.body.age
        }
        ).save();
        return res.json(newUser);
    } catch (error) {
        return res.json(error);
    }
}

const updateUser = async (req: Request, res: Response) => {

    try {
        const userIdToUpdate = req.params.id;
        await Users.update(
            {
                id: parseInt(userIdToUpdate)
            },
            {
                name: req.body.name,
                age: req.body.age
            }
        );
        return res.json("se ha actualizado correctamente el usuario con id: " + userIdToUpdate);
    } catch (error) {
        return res.json(error);
    }
}

const deleteUser = async (req: Request, res: Response) => {

    try {
        const userIdToDelete = req.params.id;
        const userDelete = await Users.delete({
            id:parseInt(userIdToDelete)
        });
    
        if(userDelete.affected){
            return res.json("se ha eliminado correctamente el usuario con id: " + userIdToDelete);
        }
        return res.json("no se ha eliminado correctamente el usuario con id: " + userIdToDelete);
    } catch (error) {
        return res.json(error);
    }
}

export { getUsers, createUser, updateUser, deleteUser, getUserId};
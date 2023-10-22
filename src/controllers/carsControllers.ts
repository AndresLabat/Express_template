import { Request, Response } from "express";
import { Cars } from "../models/Cars";

const getCars = async (req:Request, res:Response)=>{

    try {
        const getAllCars = await Cars.find()
        return res.json(getAllCars);
    } catch (error) {
        return res.json(error);
    }
}

const createCars = async (req:Request, res:Response)=>{

    try {
        const CarBody = req.body;
        await Cars.create({
            model: CarBody.model,
            kilometers: CarBody.kilometers,
            userId: CarBody.userId
        }).save()
        return res.json(`El coche con modelo ${CarBody.model} ha sido creado con éxito`);
    } catch (error) {
        return res.json(error);
    }
}

const updateCars = async(req:Request, res:Response)=>{

    try {
        const updateById = parseInt(req.params.id)
        const updateByBody = req.body
        const updateCar = await Cars.update({
            id: updateById
        }, {
            model:updateByBody.model,
            kilometers: updateByBody.kilometers
        })
        return res.json(`El coche con modelo ${updateByBody.model} ha sido actualizado con éxito`);
    } catch (error) {
        return res.json(error);
    }
}

const deleteCars = async (req:Request, res:Response)=>{

    try {
        const deleteCarId = parseInt(req.params.id)
        await Cars.delete({
            id: deleteCarId
        })
        return res.json(`El coche con id ${deleteCarId} ha sido borrado con éxito`);
    } catch (error) {
        return res.json(error);
    }
}

export {getCars, createCars, updateCars, deleteCars}
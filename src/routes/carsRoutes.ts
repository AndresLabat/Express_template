import { Router } from "express";
import { createCars, deleteCars, getCars, updateCars } from "../controllers/carsControllers";

const carsRoutes = Router();

carsRoutes.get("/cars", getCars)
carsRoutes.post("/cars", createCars)
carsRoutes.put("/cars/:id", updateCars)
carsRoutes.delete("/cars/:id", deleteCars)

export {carsRoutes}
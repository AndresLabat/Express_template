import express from "express";
import { usersRoutes } from "./routes/usersRoutes";
import { AppDataSource } from "./db";
import { usersRoutesName } from "./routes/userRoutes";
import { carsRoutes } from "./routes/carsRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", usersRoutes);
app.use("/", usersRoutesName);
app.use("/", carsRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
        //encendido servidor 
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
    });
})
.catch(error => {
    console.log(error)
})

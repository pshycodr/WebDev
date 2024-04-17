import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./env",
});

const PORT = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`ERROR : `, error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`Server is running at PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`DB CONNECTION ERROR : `, err);
        throw err;
    });
























    
/* THIS APPROCH IS CORRECT BUT NOT SO GOOD ENOUGH

import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listing in ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();
*/

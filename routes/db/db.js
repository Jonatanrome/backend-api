const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
    
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("base de datos conectada")

    } catch {
        console.log("error al iniciar la base de datos")

    }
}

module.exports = {dbConnection}
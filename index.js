require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require("./models/model");
const PORT = process.env.PORT || 5000;
const app = express();


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => { console.log(`запуск на порте: ${PORT}`); });

    } catch (err) {
        console.log(err);
    }
};

start();
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require("./models/model");
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const ErrorHandlingMiddleware = require('./midlleware/ErrorHandlingMiddleware');
const router = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// обработка ошибок, последний middleware
app.use(ErrorHandlingMiddleware);



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
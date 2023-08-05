import axios from "axios";
import { config } from "dotenv";

const $host = axios.create({
    baseURL: "http://localhost:3000"

});

const $authHost = axios.create({
    baseURL: "http://localhost:3000"
});


const authInterceptor = config => {
    config.headers.authorization;
};

export default $host;
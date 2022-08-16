import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.31.32.1:3010/',
})


export default  api;
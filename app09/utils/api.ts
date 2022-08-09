import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.28.128.1:3010/',
})


export default  api;
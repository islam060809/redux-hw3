import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.sampleapis.com/coffee/"
})

export default instance;
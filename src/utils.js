import axios from "axios";

export const backendAxios=axios.create({
    baseURL:"localhost:8000"
})

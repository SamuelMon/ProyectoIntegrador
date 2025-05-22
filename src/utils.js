import axios from "axios";

export const backendAxios=axios.create({
    baseURL:"http://<tu_direccion_ip_publica>:5000",
    timeout: 1000
});

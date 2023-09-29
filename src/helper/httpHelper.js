import axios from "axios";

export const httpAxios  = axios.create({
    baseurl : process.env.baseurl,
});
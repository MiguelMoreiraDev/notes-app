import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.jotform.com",
    headers: {
        "Content-Type": "application/json",
    },
});

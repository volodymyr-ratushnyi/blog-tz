import axios from "axios";

export const apiJsonPlaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

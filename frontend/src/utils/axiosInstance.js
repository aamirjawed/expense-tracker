/* eslint-disable no-unused-vars */
import axios from "axios"
import {BASE_URL} from "./apiPaths";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",

    },
});


// request Interceptor

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");

        if(accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error)
    }
)


// response interceptors

axiosInstance.interceptors.request.use(
    (response) => {
        return response;
    },

    (error) =>{
        //handle common errors globally
        if(error.response){
            if(error.response.status === 401){
                //redirect  to login page
                window.location.href = "/login";
            }else if(error.response.staust === 500){
                console.log("Server error. Please try again later.");
            }
        }else if(error.code === "ECONNABORTED"){
            console.log("Request timeout. Please try again");
        }
        return Promise.reject(error);
    }
)


export default axiosInstance;


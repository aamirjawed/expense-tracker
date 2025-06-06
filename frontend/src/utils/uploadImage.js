/* eslint-disable no-unused-vars */
import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();

    // Append image file to form data

    formData.append('image', imageFile);

    try{
        const response  = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers:{
                'Content-Type':'multipart/form-data', // set header for file input
            }
        })
        return response.data;
    }catch(error){
        console.log("Error uploading the image", error);
        throw error; // rethrow error for handling
    }
}


export default uploadImage
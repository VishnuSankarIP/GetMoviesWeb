
import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";


// get all movies

export const getAllMoviesAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/movies`)
}

// search movies

export const getSearchMoviesAPI = async (title)=>{
    return await commonAPI("GET",`${SERVER_URL}/search?title=${title}`)
}






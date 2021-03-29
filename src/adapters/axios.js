import axios from "axios";

const initializers = {
    baseURL:"https://fakestoreapi.com/products"
}

const returnAxiosInstance = () => {
    return axios.create(initializers)
}

export const get = url => {
    const axios = returnAxiosInstance()
    return axios.get(url)
}

export const post = (url,requestData) => {
    const axios = returnAxiosInstance()
    return axios.post(url,requestData)
}
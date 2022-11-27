import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {Storage} from "../utils/storage";

const PORT = 3000

export const API_BASE_URL = "https://api.tm-she.com";
export const APP_BASE_URL = `http://localhost:3000`

const $api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        common: {
            accept: 'application/json'
        }
    }
});

const $api_with_auth = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        common: {
            accept: 'application/json'
        }
    }
});

const authInterceptor = (config: AxiosRequestConfig) => {
    if(config.headers){
        config.headers.Authorization = Storage.get("accessToken");
    }
    return config;
};

$api.interceptors.request.use(authInterceptor)
$api.interceptors.response.use((config: AxiosResponse) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${API_BASE_URL}/api_v2/jwt/refresh`)
            Storage.set('accessToken', 'Bearer ' + response.data.access);
            originalRequest.headers.Authorization = 'Bearer ' + response.data.access
            return $api.request(originalRequest);
        } catch (e) {
            Storage.delete('accessToken');
            window.location.replace('/')
        }
    }
    throw error;
})

export { $api, $api_with_auth };
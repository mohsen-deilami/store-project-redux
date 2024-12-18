import axios from "axios";
const api=axios.create({baseURL:'http://fakestoreapi.com'});
axios.interceptors.response.use(response=>response.data, error =>promise.reject(error))
export default api
import { axiosClient } from './axiosClient';
import axios from 'axios';
const categoryApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    delete(token,categoryId,userId){
        const url = `http://localhost:4000/api/category/${categoryId}/${userId}`;
        return axios.delete(url,{
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + token
            }
        });
    },
    update(data,token,categoryId,userId){
        const url = `http://localhost:4000/api/category/${categoryId}/${userId}`;
        return axios.put(url,data,{
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + token
            }
        });
    },
    add(data ,token,id){
        const url = `http://localhost:4000/api/category/${id}`;
        return axios.post(url,data,{
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + token
            }
        });
    }
}
export default categoryApi;
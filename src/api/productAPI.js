import { axiosClient ,axiosClientForm } from './axiosClient';
import axios from 'axios';
const ProductApi = {
    getAll(){
        // const url = `/products?_expand=category`;
        const url = `/products`;
        
        return axiosClient.get(url);
        
    },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getRalated(data){
      const url = `/products/related/${data}`;
      return axiosClient.get(url);
    },
    getseach(seach){
      const url = `/products?q=${seach}`;
      return axiosClient.get(url);
    },
    getSort(a,b=9999999999999){
        const url = `/products?price_gte=${a}&price_lte=${b}`;
        return axiosClient.get(url);
    },
    getclassify(){
        const url = `products/classify?classify=1`;
        return axiosClient.get(url);
    },
     getSortOrder(a,b){
        const url = `/products?_sort=${a}&_order=${b}`;
        return axiosClient.get(url);
    },
    add(product ,token,userId){
        const url = `http://localhost:4000/api/products/${userId}`
        return axios.post(url,product,{
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`
            }
        })
    },
    delete(token,productId,userId){
        const url = `http://localhost:4000/api/products/${productId}/${userId}`
        return axios.delete(url,{
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`
            }
        })
    },
    update(product ,token,productId,userId){
        const url = `http://localhost:4000/api/products/${productId}/${userId}`
        return axios.put(url,product,{
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`
            }
        })
    }
}
export default ProductApi;
import ProductApi from "../api/productAPI";
import { parseRequestUrl } from "../utils";

const SearchPage = {
   async render() {
       const {id} = parseRequestUrl()
       const dataSearch = id.split('%20').join(' ');
       console.log(dataSearch)
        const {data : products } = await ProductApi.getseach(dataSearch);
        if(products.length > 0){
            const listProduct = products.map(product => {
                return /*html*/`
            <div class="product_box shadow" >
                <div class="product">
                    <a href="/#/products/${product._id}">
                        <img src="http://localhost:4000/api/product/photo/${product._id}"class="img-fluid1"></a>
                    <div class="product_icon">
                        <a href="#"><i class="far fa-eye product_item"></i></a>
                        <a href="#"><i class="far fa-heart product_item"></i></a>
                        <a href="#"><i class="fas fa-balance-scale product_item"></i></a>
                    </div>
                </div>
                <div class="product_information">
                    <div>
                        <i class="far fa-star" id="star"></i>
                        <i class="far fa-star" id="star"></i>
                        <i class="far fa-star" id="star"></i>
                        <i class="far fa-star" id="star"></i>
                        <i class="far fa-star" id="star"></i>
                    </div>
                    <p><a href="/#/products/${product._id}">${product.name}</a></p>
                    <p><del class="text-red-500">${product.price}</del><span class="font-medium"> ${product.price1}</span></p>
                    <div class="mt-4">
                    <div class="product_btn_icon_shopping w-36 py-3 mx-auto" id="addcart" data-id="${product._id}"> <i class="fas fa-cart-plus"></i> ADD TO CART </div>
                    </div>

                </div>
            </div>
    `
            }).join('');
            return /*html*/`
            <div class="container">
            <div class="text-center text-4xl my-7">
            SEARCH RESULTS FOR "${dataSearch}"(${products.length})
            </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 sm:px-10 my-8">${listProduct}</div>
            </div>
            `
           }else{
           return /*html */`
            <div class="text-center my-24">
               <i class="fas fa-search text-9xl text-gray-300"></i>
               <p class="text-4xl mt-5">YOUR SEARCH RETURNS NO RESULTS.</p>
            </div>
            `
           } 
    }
}
export default SearchPage;
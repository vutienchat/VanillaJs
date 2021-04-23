import ProductApi from "../api/productAPI.js";
import { $, customNameProduct } from "../utils.js";
const Sort = {
    async sortPrice() {
        document.querySelectorAll(".sort-price").forEach(sort => {
            sort.addEventListener('click', async () => {
                const datasort = sort.dataset.id;
                if (datasort == 1) {
                    var { data: products } = await ProductApi.getSort(0,300);
                } else if (datasort == 2) {
                    var { data: products } = await ProductApi.getSort(300,600)
                } else if (datasort == 3) {
                    var { data: products } = await ProductApi.getSort(600)
                }else if (datasort == 4) {
                    var { data: products } = await ProductApi.getSortOrder('new_price','ASC')
                }else if (datasort == 5) {
                    var { data: products } = await ProductApi.getSortOrder('new_price','DESC')
                }else if (datasort == 6) {
                    var { data: products } = await ProductApi.getSortOrder('name','ASC')
                }else if (datasort == 7) {
                    var { data: products } = await ProductApi.getSortOrder('name','DESC')
                }
                const countProducts =products.length;
                const result = products.map(product => {
                    return /*html */ `
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
                    <p><a href="/#/products/${product.id}">${customNameProduct(product.name)}</a></p>
                    <p class="pt-2"><del class="text-red-500">${product.old_price}</del><span class="font-medium"> ${product.new_price}</span></p>
                    <div class="mt-4">
                    <div class="product_btn_icon_shopping w-36 py-3 mx-auto" id="addcart" data-id="${product._id}"> <i class="fas fa-cart-plus"></i> ADD TO CART </div>
                    </div>

                </div>
            </div>
                `
                }).join('')
                $('#sortpro').innerHTML = `
               <div class="text-center"> <span class="text-4xl">Products</span><span class="text-3xl">(${countProducts})</span></div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 sm:px-10 my-8 fade1">${result}</div>
                `
            })
        })
    }
}
export default Sort;
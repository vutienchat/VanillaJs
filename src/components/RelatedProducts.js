import ProductApi from "../api/productAPI.js";
import { customNameProduct, parseRequestUrl } from "../utils.js";

const RalatedProducts = {
  async render() {
    const {id} = parseRequestUrl()
      const {data : listProducts} = await ProductApi.getRalated(id);
     const result = listProducts.map(product => {
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
            <p class="pt-2"><a href="/#/products/${product._id}">${customNameProduct(product.name)}</a></p>
            <p><del class="text-red-500">${product.old_price}</del><span class="font-medium"> ${product.new_price}</span></p>
            <div class="mt-4">
            <div class="product_btn_icon_shopping w-36 py-3 mx-auto" id="addcart" data-id="${product._id}"> <i class="fas fa-cart-plus"></i> ADD TO CART </div>
            </div>
        </div>
    </div>
        `
      }).join('');
      return /*html */ `
      <div class="text-2xl pl-10">RELATED PRODUCTS</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 sm:px-10 my-8">${result}</div>
      `
   }
}
export default RalatedProducts;
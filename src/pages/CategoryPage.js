import ProductApi from "../api/productAPI";
import { customNameProduct, parseRequestUrl } from "../utils";

const CategoryPage = {
    async render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' });
        const { id } = parseRequestUrl()
        const { data: products } = await ProductApi.getAll();
        const result1 = products.filter(product => product.category._id == id);
        const countCategoies = result1.length;
        const nameCategoies = result1[0].category.name;
        const result = result1.map(product => {
            return /*html*/`
                  <div class="product_box my-7 shadow" >
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
        return /*html */`
        <div class="container my-5 fade">
            <div class="pt-10 text-center">
                <span class="text-4xl">${nameCategoies}</span><span class="text-3xl">(${countCategoies})</span>
            </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5 sm:px-10">${result}</div>
        </div>
      `
    }
}
export default CategoryPage;
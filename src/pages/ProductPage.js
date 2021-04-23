import ProductApi from '../api/productAPI.js';
import Sort from '../components/Sort.js';
import { customNameProduct } from '../utils.js';
const ProductPage = {
   async render() {
      window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        const { data : products} = await ProductApi.getAll()
        const countProducts = products.length; 
        const result = products.map(product => {
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
                            <p class="pt-2"><a href="/#/products/${product._id}">${customNameProduct(product.name)}</a></p>
                            <p><del class="text-red-500">${product.old_price}</del><span class="font-medium"> ${product.new_price}</span></p>
                            <div class="mt-4">
                            <div class="product_btn_icon_shopping w-36 py-3 mx-auto" id="addcart" data-id="${product._id}"> <i class="fas fa-cart-plus"></i> ADD TO CART </div>
                            </div>

                        </div>
                    </div>
            `
        }).join('');
        return /*html*/`
        <div class="container fade">
           <div class="pt-10">
                <div class="group inline-block relative z-10">
                        <button class="outline-none md:ml-10 focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                            <span class="pr-1 font-semibold flex-1">Sắp Xếp</span>
                            <span>
                                <i class="fas fa-angle-down fill-current h-4 w-4 transform group-hover:-rotate-180
                                transition duration-150 ease-in-out"></i>
                            </span>
                        </button>
                        <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                    transition duration-150 ease-in-out origin-top min-w-32 md:ml-10">
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="1">Giá 0 --> 300</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="2">Giá 300 --> 600</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="3">Giá trên 600</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="4">Giá tăng dần</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="5">Giá giảm dần</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="6">Tên tăng dần</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100 sort-price" data-id="7">Tên giảm dần</li>
                        </ul>
                    </div>
           </div>
           <div id="sortpro">
            <div class="text-center"><span class="text-4xl">Products</span><span class="text-3xl">(${countProducts})</span></div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 sm:px-10 my-8">${result}</div>
           </div>
                
        </div>
       `
    },
   async afterRender(){
    Sort.sortPrice()
    }
}
export default ProductPage;
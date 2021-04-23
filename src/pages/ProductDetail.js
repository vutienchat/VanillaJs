import ProductApi from '../api/productAPI.js';
import Cart from '../components/Cart.js';
import RalatedProducts from '../components/RelatedProducts.js';
import { parseRequestUrl, $, customNameProduct } from '../utils.js';
import swal from 'sweetalert';

const ProductDetail = {
   async render(){
    window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        const {id} = parseRequestUrl();
        const {data : product} = await ProductApi.get(id);
        return /*html*/`
         <div class="container px-10 fade">
          <div class="grid grid-cols-1 md:grid-cols-2 my-10 gap-5">
              <div class="flex justify-center">
                <img class="w-3/5 object-cover" src="http://localhost:4000/api/product/photo/${product._id}" alt="">
              </div>
              <div>
                  <div class="font-medium text-3xl pb-5">${customNameProduct(product.name)}</div>
                  <div class="pb-5"><span class="text-3xl">Giá: </span><span class="text-red-500 text-2xl">${product.new_price}</span><del class="text-primary text-2xl"> ${product.old_price}</del></div>
                    <div class="flex">
                      <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300 w-20" type="number" value="1">
                      <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg w-80 ml-5" id="orderDetail">Đặt Hàng</button>
                    </div>
                    <div class=" py-9 font-medium text-xl">DESCRIPTION :</div>
                    <div class="text-sm text-gray-700 leading-relaxed">${product.description}</div>
              </div>
            </div>
         </div>
        ${await RalatedProducts.render()}
        `
        
    },
    async afterRender(){
     const orderDetail = $('#orderDetail');
     orderDetail.addEventListener('click',async () => {
        const numberProduct = orderDetail.parentElement.querySelector('input').value;
        const {id} = parseRequestUrl()
        let carts = localStorage.getItem('carts');
        carts = carts == null ? [] : JSON.parse(carts);

        let existed = carts.map(cart => cart._id).indexOf(id);
        if (existed === -1) {
          let { data: product } = await ProductApi.get(id);
          product.quantityy = parseInt(numberProduct);
          carts.push(product);
          localStorage.setItem('carts', JSON.stringify(carts));
        } else {
          carts[existed].quantityy += parseInt(numberProduct);
          localStorage.setItem('carts', JSON.stringify(carts));
        }
        Cart.countNumCart();
        swal("Sản phẩm đã được thêm vào giỏ hàng", {
          buttons: true,
          timer: 3000,
        });
     })
    }
}
export default ProductDetail;
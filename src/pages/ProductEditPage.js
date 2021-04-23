import categoryApi from "../api/categoryAPI";
import ProductApi from "../api/productAPI";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import firebase from "../firebase"
// import Category from "../components/Category";
import { $, displayError, parseRequestUrl } from "../utils";

const ProductEditPage = {
    async render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        const { data: categories } = await categoryApi.getAll();
        return /*html*/ `
        <div x-data="{ sidebarOpen: false, darkMode: false }" :class="{ 'dark': darkMode }">
        <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
           <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
               class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
                   ${ await Sidebar.render()}
                   <div class="flex-1 flex flex-col overflow-hidden">
                       ${ await Navbar.render()}
                       <main id="list-product" class="flex-1 overflow-x-hidden overflow-y-auto py-7 px-10 fade">
                       <div id="error"></div>
                       <form id="from-edit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                       <div class="mb-4">
                           <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">Tên sản phẩm</label>
                           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                           value="${product.name}" id="product-name" type="text" required>
                       </div>
                       <div class="mb-4">
                           <label class="block text-gray-700 text-sm font-bold mb-2" for="product-price">Giá sản phẩm</label>
                           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                           value="${product.old_price}" id="product-old-price" type="text" required>
                       </div>
                       <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-price1">Giá bán sản phẩm</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                           value="${product.new_price}" id="product-new-price" type="text" required>
                        </div>
                       <div class="mb-4">
                           <label class="block text-gray-700 text-sm font-bold mb-2" for="product-num">Số Lượng sản phẩm</label>
                           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                           value="${product.quantity}" id="product-quantity" type="text" required>
                       </div>
                       <div class="mb-4">
                       <label for="product-category" class="block text-gray-700 text-sm font-bold mb-2">Loại sản phẩm</label>
                       <select id="product-category" class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300">
                           ${categories.map(category => {
                               if (category._id == product.category._id) {
                                   return ` <option selected value="${category._id}">${category.name}</option>`
                               } else {
                                   return ` <option value="${category._id}">${category.name}</option>`
                               }
                           })
                               }
                       </select>
                       </div>
                       <div class="mb-4">
                       <label class="block text-gray-700 text-sm font-bold mb-2" for="product-description">Mô tả sản phẩm</label>
                           <textarea id="product-description" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300">${product.description}</textarea>
                       </div>
                       <div class="mb-4">
                           <label class="block text-gray-700 text-sm font-bold mb-2">Phân Loại</label>
                           Đặc biệt<input type="radio" name="classify" value="1" ${product.classify == 1 ? "checked" : ''} class="mr-4">
                           Bình thường<input type="radio" name="classify" value="0" ${product.classify == 0 ? "checked" : ''}>
                       </div>
                       <div class="mb-4">
                           <label class="block text-gray-700 text-sm font-bold mb-2" for="product-image">Hình ảnh</label>
                           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                            id="product-image" type="file">
                            <img src="http://localhost:4000/api/product/photo/${product._id}" width="15%" alt="">
                       </div>
                       
                       <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Update</button>
                   </form>
                       </main>
                   </div>
             </div>
           </div>
       </div>


      `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        $('#from-edit').addEventListener('submit',async e => {
            e.preventDefault();
            const newproduct = new FormData()
            newproduct.append('name',$('#product-name').value)
            newproduct.append('old_price',parseInt($('#product-old-price').value))
            newproduct.append('new_price',parseInt($('#product-new-price').value))
            newproduct.append('description',$('#product-description').value)
            newproduct.append('classify',parseInt( document.querySelector('input[name="classify"]:checked').value))
            newproduct.append('quantity',$('#product-quantity').value)
            const productImage = $('#product-image').files[0];
            if(productImage){
                newproduct.append('photo',productImage)
            }
            newproduct.append('category',$('#product-category').value)
            const token = localStorage.getItem('token');
            const userlocal = localStorage.getItem('user');
            const {_id} = userlocal ? JSON.parse(userlocal) : ' '
            try {
                await ProductApi.update(newproduct,token,id,_id);
                window.location.hash = '/admin/listproduct'
            } catch (err) {
                const {error} = err.response.data;
                        $('#error').innerHTML = displayError(error);
            }
           
           
        });
    }
}
export default ProductEditPage;
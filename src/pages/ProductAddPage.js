import ProductApi from "../api/productAPI";
import { $ , displayError} from "../utils";
import firebase from "../firebase"
import Category from "../components/Category.js";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar";
const ProductAddPage = {
    async render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html*/ `
        <div x-data="{ sidebarOpen: false, darkMode: false }" :class="{ 'dark': darkMode }">
        <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
           <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
               class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
                   ${ await Sidebar.render()}
                   <div class="flex-1 flex flex-col overflow-hidden">
                       ${ await Navbar.render()}
                       <main id="list-product" class="flex-1 overflow-x-hidden overflow-y-auto p-4 fade">
                       <div id="error"></div>
                                <form id="from-add"  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">Tên sản phẩm</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                                    id="product-name" type="text" >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-old-price">Giá sản phẩm</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                                    id="product-old-price" type="text" >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-new-price">Giá bán sản phẩm</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                                    id="product-new-price" type="text" >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-quantity">Số Lượng sản phẩm</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                                        id="product-quantity" type="text" >
                                </div>
                                <div class="mb-4">
                                <label for="product-category" class="block text-gray-700 text-sm font-bold mb-2">Loại sản phẩm</label>
                                <select id="product-category" class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300">
                                        ${await Category.render()}
                                </select>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-description">Mô tả sản phẩm</label>
                                        <textarea id="product-description" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"></textarea>
                                    </div>
                                    <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">Phân Loại</label>
                                    Đặc biệt<input type="radio" name="classify" value="1" class="mr-4">
                                    Bình thường<input type="radio" name="classify" checked value="0">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="product-image">Hình ảnh</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                                        id="product-image" type="file">
                                </div>
                                <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Add</button>
                    
                            </form>
                       </main>
                   </div>
             </div>
           </div>
       </div>
     `
    },
    async afterRender() {
        $('#from-add').addEventListener('submit',async e => {
            e.preventDefault();
            const token = localStorage.getItem('token');
            const userlocal = localStorage.getItem('user');
            const {_id} = userlocal ? JSON.parse(userlocal) : ' '
            const fd = new FormData()
            fd.append('name',$('#product-name').value)
            fd.append('old_price',parseInt($('#product-old-price').value))
            fd.append('new_price',parseInt($('#product-new-price').value))
            fd.append('description',$('#product-description').value)
            fd.append('classify',parseInt( document.querySelector('input[name="classify"]:checked').value))
            fd.append('quantity',$('#product-quantity').value)
            fd.append('photo',$('#product-image').files[0])
            fd.append('category',$('#product-category').value)
            try {
               await ProductApi.add(fd ,token,_id);
               await  swal({ 
                    title: "Good job!",
                    text: "Thêm Sản Phẩm Thành Công",
                    icon: "success",
                });
                window.location.hash = '/admin/listproduct'
            } catch (err) {
                
                const {error} = err.response.data;
                $('#error').innerHTML = displayError(error);
                
            }
            
        })
    }
}
export default ProductAddPage;
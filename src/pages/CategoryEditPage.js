import categoryApi from "../api/categoryAPI.js";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
import { $, displayError, parseRequestUrl, reRender } from "../utils.js";

const CategoryEditPage = {
  async render(){
    window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' });
      const {id} = parseRequestUrl();
       const {data : category} = await categoryApi.get(id)
       return /*html*/`
       <div x-data="{ sidebarOpen: false, darkMode: false }" :class="{ 'dark': darkMode }">
       <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
          <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
              class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
                  ${ await Sidebar.render()}
                  <div class="flex-1 flex flex-col overflow-hidden">
                      ${ await Navbar.render()}
                      <main id="list-category" class="flex-1 overflow-x-hidden overflow-y-auto p-4 fade">
                      <div id="error"></div>
                      <form id="from-edit" class="shadow-md bg-white p-4">
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="category-name">Tên Danh Mục</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
                            value="${category.name}" id="category-name" type="text" required>
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
            const newCategory = {
                id: id,
                name: $('#category-name').value,
            }
            const token = localStorage.getItem('token');
            const userlocal = localStorage.getItem('user');
            const {_id} = userlocal ? JSON.parse(userlocal) : ' '
            try {
                await categoryApi.update(newCategory,token,id,_id);
                  window.location.hash ='/admin/listcategory';
            } catch (err) {
                const {error} = err.response.data;
                $('#error').innerHTML = displayError(error);
            }
       });
       }
}
export default CategoryEditPage;
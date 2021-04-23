import categoryApi from "../api/categoryAPI.js";
import { $,displayError,reRender } from "../utils.js";
import Header from "./Header.js";
const ListCategory = {
   async render() {
     const {data : categories} = await categoryApi.getAll();
     return /*html*/`
     <div id="error"></div>
     <div class="flex flex-end mb-5 justify-end">
     <a href="#/admin/addcategory"> <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Thêm Danh Mục</button></a>
      </div>
     <div class="flex justify-center">
     <table class="min-w-max w-4/5 table-auto text-center shadow-md">
     <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
         <th class="py-3 px-6 font-medium">#</th>
         <th class="py-3 px-6">Name Category</th>
         <th class="py-3 px-6" colspan="2">Actions</th>
     </tr>
     <tbody class="text-gray-600 text-sm font-light">
     ${
        categories.map((category,index) =>{
            return /*html*/`
            <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 font-medium">${index + 1}</td>
                    <td class="py-3 px-6">${category.name}</td>
                    <td class="py-3"><a href="#/admin/editcategory/${category._id}"><span><i class="hover:text-blue-500 fas fa-pen transform hover:scale-125 text-base"></i></span></a>
                    <span class="w-4 mr-2 pl-5 hover:text-blue-500 cursor-pointer" data-id="${category._id}" id="btn-remove"><i class="far fa-trash-alt transform hover:scale-125 text-base"></i></span></td>
                </tr>
            `
        }).join('')
     }
     </tbody>
     </table>
     </div>
     `
    },
   async afterRender(){
        const btns = document.querySelectorAll('#btn-remove');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
              swal({
                title: "BIN SHOP",
                text: "Bạn có chắc chắn muốn xóa nó k",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then( async (willDelete) => {
                
                  const token = localStorage.getItem('token');
                  const userlocal = localStorage.getItem('user');
                  const {_id} = userlocal ? JSON.parse(userlocal) : ' '
                  try {
                    if (willDelete) {
                      await categoryApi.delete(token,id,_id);
                      reRender(ListCategory,'#list-category');
                      swal("Đã xóa sản phẩm", {
                        icon: "success",
                      });
                    } else {
                      swal("ok sản phẩm vẫn còn");
                    }
                   
                  } catch (err) {
                    const {error} = err.response.data;
                    $('#error').innerHTML = displayError(error);
                  }
                 
                
              });
            })
        });
    }
}
export default ListCategory;
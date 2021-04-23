import ProductApi from "../api/productAPI.js";
import { $, customNameProduct, displayError, reRender } from "../utils.js";
import swal from 'sweetalert';
const listProduct = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return /*html*/`
        <div id="error"></div>
      <div class="fade">
          <div class="flex flex-end mb-5 justify-end">
          <a href="#/admin/addproduct"> <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Thêm Sản Phẩm</button></a>
          </div>
          <table class="min-w-max w-full table-auto text-center shadow-md">
              <thead>
              <tr class="bg-white text-gray-600 uppercase text-sm leading-normal">
                      <th class="py-3 px-6 font-medium">#</th>
                      <th class="py-3 px-6">Name</th>
                      <th  class="py-3 px-6">Giá Sp</th>
                      <th  class="py-3 px-6">Giá Bán</th>
                      <th  class="py-3 px-6">Phân Loại</th>
                      <th  class="py-3 px-6" colspan="2">action</th>
                  </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
              ${products.map((product, index) => {
              return /*html*/`
              <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td  class="py-3 px-6 whitespace-nowrap font-medium">${index + 1}</td>
                  <td class="py-3 px-6">${customNameProduct(product.name) }</td>
                  <td class="py-3 px-6">${product.old_price}</td>
                  <td class="py-3 px-6">${product.new_price}</td>
                  <td class="py-3 px-6">${product.classify == 1 ?  '<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Đặc Biệt</span>' : '<span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Bình thường</span>'}</td>
                  <td class="py-3 "><a href="#/admin/editproduct/${product._id}"><span><i class="hover:text-blue-500 fas fa-pen transform hover:scale-125 text-base"></i></span></a> <span class="w-4 pl-5  hover:text-blue-500 cursor-pointer" data-id="${product._id}" id="btn-remove"><i class="far fa-trash-alt transform hover:scale-125 text-base"></i></span></td>
              
                  </tr>`
          }).join('')}
                  
              </tbody>
          </table>
      </div>
`
    },
    async afterRender() {
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
                  .then( async(willDelete) => {
                  const token = localStorage.getItem('token');
                  const userlocal = localStorage.getItem('user');
                  const {_id} = userlocal ? JSON.parse(userlocal) : ' '
                    try {
                      if (willDelete) {
                      await ProductApi.delete(token,id,_id);
                      swal("Đã xóa sản phẩm", {
                        icon: "success",
                      });
                       reRender(listProduct, '#list-product');
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
export default listProduct;
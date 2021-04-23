import ContactApi from "../api/ContactAPI.js";
import { reRender } from "../utils.js";
import swal from 'sweetalert';
const ListContact = {
   async render() {
        const {data : contacts} = await ContactApi.getAll();
        return /*html */`
        <table class="min-w-max w-full table-auto text-center shadow-md fade1">
        <thead>
        <tr class="bg-white text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 font-medium">#</th>
                <th class="py-3 px-6">Name</th>
                <th  class="py-3 px-6">Email</th>
                <th  class="py-3 px-6">Title</th>
                <th  class="py-3 px-6">Content</th>
                <th  class="py-3 px-6">action</th>
           </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
        ${contacts.map((contact, index) => {
        return /*html*/`
        <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
            <td  class="py-3 px-6 whitespace-nowrap font-medium">${index + 1}</td>
            <td class="py-3 px-6">${contact.name}</td>
            <td class="py-3 px-6">${contact.email}</td>
            <td class="py-3 px-6">${contact.title}</td>
            <td class="py-3 px-6">${contact.content}</td>
            <td class="py-3 ">
             <span class="w-4  hover:text-blue-500 cursor-pointer" data-id="${contact._id}" id="btn-remove"><i class="far fa-trash-alt transform hover:scale-125 text-base"></i></span></td>
            </tr>`
    }).join('')}
           
        </tbody>
    </table>
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
                    if (willDelete) {
                      swal("Đã xóa sản phẩm", {
                        icon: "success",
                      });
                    await ContactApi.delete(id);
                     reRender(ListContact, '#list-contacts');
                    } else {
                      swal("ok sản phẩm vẫn còn");
                    }
                  });
            })
        });
    }
}
export default ListContact;
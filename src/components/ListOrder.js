import OrderAPI from "../api/OrderAPI.js";

const ListOrder = {
   async render(){
        const {data : listOrder} = await OrderAPI.getAll();
      return /*html */`
      <table class="min-w-max w-full table-auto text-center shadow-md fade1">
        <thead>
            <tr class="bg-white text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 font-medium">#</th>
                    <th class="py-3 px-6 font-medium">Name</th>
                    <th class="py-3 px-6 font-medium">Phone</th>
                    <th class="py-3 px-6 font-medium">Address</th>
                    <th class="py-3 px-6 font-medium">Email</th>
                    <th class="py-3 px-6 font-medium">Amount</th>
                    <th class="py-3 px-6 font-medium">Total</th>
                    <th class="py-3 px-6 font-medium">Action</th>
            </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
        ${listOrder.map((orderItem,index) =>{
           return /*html */ `
           <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
                        <td  class="py-3 px-6 whitespace-nowrap font-medium">${index + 1}</td>
                        <td class="py-3 px-6">${orderItem.name}</td>
                        <td class="py-3 px-6">${orderItem.phone}</td>
                        <td class="py-3 px-6">${orderItem.address}</td>
                        <td class="py-3 px-6">${orderItem.email}</td>
                        <td class="py-3 px-6">${orderItem.quantity}</td>
                        <td class="py-3 px-6">${orderItem.total}</td>
                        <td class="py-3 px-6">
                        <a href="#/admin/detail/${orderItem._id}">
                            <button class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-500 hover:text-white">
                                Chi Tiết
                            </button>
                        </a>
                        </td>
            </tr>
            `
        }).join('')
    }
        </tbody>
      </table>
      `
    }
}
export default ListOrder;
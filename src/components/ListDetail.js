import OrderDetailApi from "../api/OrderDetailAPI.js";
import { parseRequestUrl } from "../utils.js";

const ListDetail = {
  async render(){
      const {id} = parseRequestUrl()
      const { data : Listdetails} = await OrderDetailApi.get(id)
        return /*html */ `
        <table class="min-w-max w-full table-auto text-center shadow-md fade1">
        <thead>
            <tr class="bg-white text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 font-medium">#</th>
              <th class="py-3 px-6 font-medium">Name</th>
              <th class="py-3 px-6 font-medium">Image</th>
              <th class="py-3 px-6 font-medium">Price</th>
              <th class="py-3 px-6 font-medium">Quantity</th>
              <th class="py-3 px-6 font-medium">Total</th>
            </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
        ${Listdetails.map((detailItem,index) =>{
           return /*html */ `
              <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td  class="py-3 px-6 whitespace-nowrap font-medium">${index + 1}</td>
                <td class="py-3 px-6">${detailItem.productId.name}</td>
                <td class="py-3 px-6"><img class="w-24 mx-auto" src="http://localhost:4000/api/product/photo/${detailItem.productId._id}" alt=""></td>
                <td class="py-3 px-6">${detailItem.productId.new_price}</td>
                <td class="py-3 px-6">${detailItem.quantity}</td>
                <td class="py-3 px-6">${detailItem.intomoney}</td>
              </tr>
            `
        }).join('')
    }
        </tbody>
      </table>
        `
    }
}
export default ListDetail;
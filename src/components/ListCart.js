import { reRender } from "../utils.js"

const ListCart = {
    render() {
        let carts = localStorage.getItem('carts')
        carts = carts == null ? [] : JSON.parse(carts)
        return /*html*/`
        <tbody id="listcart">
        ${carts.map(cart => {
            return /*html*/`
                <tr class=" border-b border-gray-300 ">
                <td class="w-1/4 text-left ">${cart.name}</td>
                <td class="flex justify-center">
                    <a href="#/products/${cart._id}">
                        <img class="h-40 py-4" src="http://localhost:4000/api/product/photo/${cart._id}"/>
                    </a>
                </td>
                <td class="text-primary">$${cart.new_price} </td>
                <td><input class="w-16 sm:pl-4 Quantity" type="number" min="1" value="${cart.quantityy}"> </td>
                <td class="text-primary">$${cart.new_price * cart.quantityy}</td>
                <td><i data-id="${cart._id}" id="btn-remove" class="far fa-trash-alt text-black hover:text-blue-500 pr-4"></i></td>
            </tr>
                `
        }).join('')
            }
        </tbody>
            `
    },
    informationOrderRender() {
        let carts = localStorage.getItem('carts')
        carts = carts == null ? [] : JSON.parse(carts)
        let total = 0;
        return `
         <div id="infoOrder">
         ${carts.map(cart => {
             total += parseInt(cart.new_price * cart.quantityy)
            return `
            <div class="flex justify-between py-2  border-b border-gray-400 load_price">
               <div class="text-gray-600">${cart.name}</div>
               <div class=" mr-4 text-primary">$${cart.new_price * cart.quantityy}</div>
            </div>
            `
        }).join('')}
         
            <div class="don_hang_total">
                <div class="flex justify-between py-2  border-b border-gray-400 load_price2">
                    <div class="font-semibold">Tổng</div>
                    <div class="text-primary mr-4" id="totalOrder">$${total}</div>
                </div>
            </div>
         </div>
         `

    },
    afterRender(){
      
    }
}
export default ListCart;
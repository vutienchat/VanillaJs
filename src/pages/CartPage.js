import Cart from "../components/Cart.js";
import ListCart from "../components/ListCart.js";
import { reRender } from "../utils.js";
const CartPage = {
    async render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        let carts = localStorage.getItem('carts')
        carts = carts == null ? [] : JSON.parse(carts)
        if(carts.length > 0){
            return /*html*/ `
            <div class="container md:px-10 fade">
           <div class="my-5">
           <h2 class="text-center text-3xl py-8">GIỎ HÀNG CỦA BẠN</h2>
           <form id="id_soluong">
               <div class="table_cart">
                   <table class=" w-full text-center table-hover my-8 load_price1">
                      <thead>
                        <tr class="border-b-4">
                            <th class="w-1/4 text-left">TÊN SẢN PHẨM</th>
                            <th>HÌNH</th>
                            <th>ĐƠN GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>THÀNH TIỀN</th>
                            <th></th>
                        </tr>
                      <thead>
                         ${ListCart.render()}
                   </table>
               </div>
               <a href="#"><button class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-500 hover:text-white" type="button"> <i
                           class="fas fa-arrow-left"></i> Tiếp tục xem Sản Phẩm</button></a>
               <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg" id="update-cart" type="button">Cập nhật giỏ hàng</button>
           </form>
       </div>
       <div class="mb-8">
       
           <div class="text-2xl my-4 font-semibold">THÔNG TIN KHÁCH HÀNG</div>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div class="">
                   <form id="thong_tin_kh">
                       <input class="w-full md:w-10/12 p-2 my-4 border focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-70 focus:border-blue-400 transition duration-300" id="ho_ten" value="" required placeholder="Họ và Tên"
                           type="text">
                       <input class="w-full md:w-10/12 p-2 my-4 border focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-70 focus:border-blue-400 transition duration-300" id="dia_chi" value="" required placeholder="Địa chỉ giao hàng"
                           type="text">
                       <input class="w-full md:w-10/12 p-2 my-4 border focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-70 focus:border-blue-400 transition duration-300" id="sdt" value="" required placeholder="số điện thoại"
                           type="text">
                       <input class="w-full md:w-10/12 p-2 my-4 border focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-70 focus:border-blue-400 transition duration-300" id="email" value="" required placeholder="Địa chỉ email"
                           type="text"><br>
                       <input name="vai_tro" value="0" type="hidden">
                       <input name="kich_hoat" value="0" type="hidden">
                       <button type="button" id="order" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Đặt Hàng</button>
                   </form>
               </div>
               <div class="border-2 border-gray-400 p-4 mt-4">
                   <div class="text-2xl mb-4 font-semibold">ĐƠN HÀNG CỦA BẠN</div>
                   <div class="flex justify-between border-b-4 border-gray-400 py-2">
                       <div class="font-semibold">Sản Phẩm</div>
                       <div class="font-semibold mr-4">Tổng</div>
                   </div>
                   ${ListCart.informationOrderRender()}
                   <div class="py-4">Thực hiện thanh toán khi hàng đã giao, Khách hàng có quyền kiểm tra hàng trước khi thanh
                       toán</div>
               </div>
           </div>
           </div>
           </div>
            `
        }else{
            return `
            <div class="text-center py-24 fade">
                <div><i class="fas fa-shopping-bag text-6xl "></i></div>
                <div class="text-3xl py-4">CHƯA CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG</div>
                <a href="#"><button class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-500 hover:text-white" type="button"> <i class="fas fa-arrow-left"></i> Tiếp tục xem Sản Phẩm</button></a>
            </div>
            `
        }
    },
    async afterRender() {
       await Cart.delete();
       await Cart.updateCart();
       await Cart.checkout();
    }
}
export default CartPage;
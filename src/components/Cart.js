import ProductApi from "../api/productAPI.js";
import swal from 'sweetalert';
import { $, reRender } from "../utils.js";
import CartPage from "../pages/CartPage.js";
import OrderAPI from "../api/OrderAPI.js";
import OrderDetailApi from "../api/OrderDetailAPI.js";
const Cart = {
  async AddCart() {
    const btns = document.querySelectorAll('#addcart');
    btns.forEach(btn => {
      btn.addEventListener('click', async () => {
        let carts = localStorage.getItem('carts');
        carts = carts == null ? [] : JSON.parse(carts);

        let existed = carts.map(o => o._id).indexOf(btn.dataset.id);
        console.log(existed);
        if (existed === -1) {
          let { data: product } = await ProductApi.get(btn.dataset.id);
          product.quantityy = 1;
          carts.push(product);
          localStorage.setItem('carts', JSON.stringify(carts));
        } else {
          carts[existed].quantityy += 1;
          localStorage.setItem('carts', JSON.stringify(carts));
        }
        Cart.countNumCart()
        swal(
        {
          text : "Sản phẩm đã được thêm vào giỏ hàng", 
          buttons: true,
          timer: 3000,
        });
      })
    })

  },
  countNumCart() {
    let carts = localStorage.getItem('carts');
    carts = carts == null ? [] : JSON.parse(carts);
    let totalProduct = 0;
    carts.forEach(element => {
      totalProduct += parseInt(element.quantityy)
    });
    const countCart = document.querySelectorAll('#countCart')
    if (totalProduct === 0) {
      countCart.forEach(element => {
        element.classList.add('hidden')
      });
    } else {
      countCart.forEach(element => {
        element.classList.remove('hidden');
        element.innerText = totalProduct;
      })
    }
  },
  async delete() {
    const btnRemove = document.querySelectorAll('#btn-remove');
    let carts = localStorage.getItem('carts');
    carts = carts == null ? [] : JSON.parse(carts);
    btnRemove.forEach(btn => {
      btn.addEventListener('click', async () => {
        let existed = carts.map(cart => cart._id).indexOf(btn.dataset.id);
        swal({
          title: "BIN SHOP",
          text: "Bạn có chắc chắn muốn xóa nó k",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Đã xóa sản phẩm", {
                icon: "success",
              });
              console.log(existed);
              carts.splice(existed, 1)
              localStorage.setItem('carts', JSON.stringify(carts))
              Cart.countNumCart()
              reRender(CartPage);
            } else {
              swal("ok sản phẩm vẫn còn");
            }
          });

      })
    });
  },
  async order() {
    const order = {
      name: $('#ho_ten').value,
      address: $('#dia_chi').value,
      phone: parseInt($('#sdt').value),
      email: $('#email').value,
      quantity: parseInt(document.querySelector('#countCart').innerText.trim()),
      total: parseInt($('#totalOrder').innerText.trim().replace('$', '')),
    }
    const { data: newOrder } = await OrderAPI.add(order);
    return newOrder._id;
  },
  async OrderDetail(orderId){
    let carts = localStorage.getItem('carts');
    carts = carts == null ? [] : JSON.parse(carts);
    carts.forEach( async cart => {
     const {_id ,quantityy , new_price} = cart;
      const dataOrderdetail = {
        productId: _id,
        quantity: parseInt(quantityy),
        orderId,
        intomoney: parseInt(quantityy) * new_price
      }
    await OrderDetailApi.add(dataOrderdetail);
    });
  },
  async checkout() {
    const order = document.querySelector('#order');
    if (order) {
      order.addEventListener('click', async () => {
        const orderId =  await this.order();
        await this.OrderDetail(orderId);
        localStorage.removeItem('carts');
       await swal("BIN SHOP","Bạn đã đặt hàng thành công", {
          buttons: false,
          timer: 3000,
        });
        window.location.hash = '#/checkout';
      })
    }
  },
 async updateCart(){
    const btn_updateCart = document.querySelector('#update-cart');
    if(btn_updateCart){
      btn_updateCart.addEventListener('click', async () => {
        const updateQuantity = document.querySelectorAll('.Quantity');
        updateQuantity.forEach(item => {
            const id = item.parentElement.parentElement.querySelector('#btn-remove').dataset.id;
            const quantity = parseInt(item.value);
            let carts = localStorage.getItem('carts');
            carts = carts == null ? [] : JSON.parse(carts);
            let existed = carts.map(o => o._id).indexOf(id);
           carts[existed].quantityy = quantity;
              localStorage.setItem('carts', JSON.stringify(carts));
            Cart.countNumCart();
             swal("BIN SHOP","Bạn đã cập nhật thành công", {
              buttons: false,
              timer: 3000,
            });
        });
         await  reRender(CartPage);
      })
    }
  }
}
export default Cart;
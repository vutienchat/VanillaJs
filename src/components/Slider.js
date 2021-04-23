import ListProductSpecial from "./ListProductSpecial"

const Slider = {
   render() {
        return /*html*/ `
                  
        <div id="slideshow-container" class="slideshow-container">
        <div class="slide-item bgimg fade1" style="background-image: url('//cdn.shopify.com/s/files/1/0033/3647/0628/files/demo06_13_x1024.jpg?v=1542725993');">
          <div class="flex items-center justify-center h-full">
            <div class="text-center toright">
              <h2 class="text-white text-3xl font-medium mb-7">Bin Shop</h2>
              <p class="text-white text-4xl my-3">Ờ Mây Zing!! Gút Chóp Shop </p>
              <p class="text-white font-normal">Thích Thì Mua , Không Thích Cũng Phải mua</p>
              <button class="focus:outline-none text-white text-sm py-2.5 px-8 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg mt-9">
              Order now
              </button>
            </div>
          </div>
        </div>
        <div class="slide-item bgimg fade1" style="background-image: url('//cdn.shopify.com/s/files/1/0033/3647/0628/files/demo06_14_x1024.jpg?v=1542725993');">
          <div class="flex items-center justify-center h-full ">
          <div class="text-center toleft">
            <h2 class="text-primary text-3xl font-medium mb-7">Bin Shop</h2>
            <p class="text-Black text-4xl my-3">Nghiện Shop không thể nào cai</p>
            <p class="text-Black font-normal">Mua Một Tặng Một , Trả Tiền Hai</p>
            <button class="focus:outline-none text-white text-sm py-2.5 px-8 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg mt-9">
              Order now
            </button>
          </div>
          </div>
        </div>

        <div class="slide-item bgimg fade1" style="background-image: url('//cdn.shopify.com/s/files/1/0130/5041/3114/files/demo22_03_x1024.jpg?v=1610964957');">
          <div class="flex items-center justify-center h-full">
          <div class="text-center totop">
              <h2 class="text-primary text-3xl font-medium mb-7">Bin Shop</h2>
              <p class="text-Black text-4xl my-3">Trói Bạn Bằng Quần áo Của Bin shop</p>
              <p class="text-Black font-normal">Các Bạn Thấy Shop Có Ngầu Không</p>
              <button class="focus:outline-none text-white text-sm py-2.5 px-8 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg mt-9">
                Order now
              </button>
          </div>
          </div>
        </div>

        <div id="slide-control" class="slide-control">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        </div>

    `
    }
}
export default Slider
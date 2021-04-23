const footer ={
    render(){
        return /*html */ `
        <div class="bg-primary flex py-1.5 justify-between items-center px-9 w-full">
        <div class="text-white hidden md:block">BE IN TOUCH WITH US</div>
        <form action="" class="hidden md:flex">
          <input type="text" placeholder="Nhập email của bạn" class="rounded-l-md w-80 px-2 py-2">
          <button class="bg-gray-800 hover:bg-black text-white px-2 py-1 rounded-r-md">JOIN US</button>
        </form>
        <div class="flex justify-between sm:justify-center w-full md:w-40">
          <i class="fab fa-facebook-f text-gray-100 hover:text-black sm:px-1.5"></i>
          <i class="fab fa-twitter text-gray-100 hover:text-black sm:px-1.5"></i>
          <i class="fab fa-google text-gray-100 hover:text-black sm:px-1.5"></i>
          <i class="fab fa-instagram text-gray-100 hover:text-black sm:px-1.5"></i>
          <i class="fab fa-pinterest text-gray-100 hover:text-black sm:px-1.5"></i>
        </div>
      </div>
      <div class="bg-secondary grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 py-5">
        <div class="p-5">
          <div class="text-lg text-white border-b">CATEGORIES</div>
          <ul class="pt-5 text-sm">
            <li><a href="" class="text-gray-500 hover:text-primary">Wonmen</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">Mens</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">Shoes</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">Accessories</a></li>
          </ul>
        </div>
        <div class="p-5">
          <div class="text-lg text-white border-b">BUY WITH US</div>
          <ul class="pt-5 text-sm">
            <li><a href="" class="text-gray-500 hover:text-primary">About Us</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">Services</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">Contact</a></li>
            <li><a href="" class="text-gray-500 hover:text-primary">FAQs</a></li>
          </ul>
        </div>
        <div class="p-5">
          <div class="text-lg text-white border-b">ABOUT</div>
          <div class="text-gray-500 pt-5 text-sm">There are many variations of passages of
            Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
            suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
            suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </div>
        </div>
        <div class="p-5">
          <div class="text-lg text-white border-b">CONTACT</div>
          <div class="pt-5 text-sm">
            <p><span class="text-white">ADDRESS:</span> <span class="text-gray-500"> Nam Hải - Nam Trực - Nam Định</span>
            </p>
            <p><span class="text-white">PHONE:</span><span class="text-gray-500"> 0913960300</span></p>
            <p><span class="text-white">HOURS:</span> <span class="text-gray-500"> Từ 7h sáng đến 9h tối</span></p>
            <p><span class="text-white">ADDRESS:</span> <span class="text-blue-700"> vutienchat@gmail.com</span></p>
          </div>
        </div>
      </div>
      <div class="bg-black flex items-center py-2">
        <div>
          <a href="">
            <img
              src="https://cdn.shopify.com/s/files/1/0033/3647/0628/files/Logo_invert_36494de9-cd98-4d46-9094-35dfacdff8af_95x.png?v=1551530389"
              alt="">
          </a>
        </div>
        <div class="text-white pl-3">© Wokiee 2021. All Rights Reserved</div>
      </div>
        `
    }
}
export default footer;
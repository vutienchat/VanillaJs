const AboutPage = {
    render() {
      window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html */ `
        <div class="m-auto max-w-6xl p-12 fade">
        <div class="flex flex-col md:flex-row">
           <div class="md:w-1/2 max-w-md flex flex-col justify-center">
              <div class="md:text-5xl text-2xl uppercase font-black">Awesome tool for your future team</div>
              <div class="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.</div>
              <div class="my-5 h-16">
                 <div class="shadow-md font-medium py-2 px-4 text-yellow-100
                  cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">Join us now</div>
              </div>
           </div>
           <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
              <div class="bg-dots">
                 <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                   
                    <div class="text-2xl p-10 bg-white">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                       et dolore magna aliqua. Ut enim ad minim veniam</div>
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div class="text-center">
         <p class="text-3xl">BIN SHOP</p>
         <p class="text-3xl"> Shop Thời Trang Nam Xuất Khẩu Cao Cấp</p>
     </div>
     <div class="container px-10">
        <p class="py-5">Đến với <span class="font-medium">BIN SHOP</span>, bạn sẽ không phải băn khoăn về chất lượng cũng như giá cả các mặt hàng quần áo nam.
        Với nhiều năm kinh nghiệm về thị trường thời trang nam, chúng tôi đã không ngừng tìm kiếm và cập nhật những mặt hàng thời trang nam tốt nhất, chất lượng nhất tại các công ty may hàng đầu trên khắp Việt Nam, giá cả cực kỳ cạnh tranh. Hãy đến Nam Fashion để cập nhật thường xuyên những xu hướng thời trang nam mới nhất, đẹp nhất, độc nhất dành riêng cho mình nhé.</p>
        <p class="pb-5">
        <span class="font-medium">BIN SHOP</span> cung cấp tất cả những mặt hàng thời trang nam xuất khẩu, vnxk hàng hiệu: áo sơ mi, áo phông, quần bò, quần kaki, quần ngố, đồ lót,.. giày dép nam và rất nhiều những phụ kiện khác: dây lưng, ví da, tất nam, túi… và còn rất nhiều những mặt hàng khác. Quá đa dạng và phong phú phải không! Còn chờ gì nữa, hãy nhanh chân tới ngay Nam Fashion để cập nhật ngay cho mình xu hướng thời trang nam mới nhất nhé. 
        <span class="font-medium">BIN SHOP</span> tin chắc rằng bạn sẽ hài lòng khi sử dụng những mặt hàng tại đây.</p>
     </div>
     <div id="container" class="w-4/5 mx-auto">
      <div class="flex flex-col sm:flex-row">
         <!-- Card 1 -->
         <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
               <div class="mb-3">
                  <img class="w-auto mx-auto rounded-full" src="https://i.pravatar.cc/150?img=66" alt="" />
               </div>
               <h2 class="text-xl font-medium text-gray-700">Pande Muliada</h2>
               <span class="text-blue-500 block mb-5">Front End Developer</span>

               <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</a>
            </div>
         </div>

         <!-- Card 2 -->
         <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
               <div class="mb-3">
                  <img class="w-auto mx-auto rounded-full" src="https://i.pravatar.cc/150?img=31" alt="" />
               </div>
               <h2 class="text-xl font-medium text-gray-700">Saraswati Cahyati</h2>
               <span class="text-blue-500 block mb-5">Back End Developer</span>

               <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</a>
            </div>
         </div>

         <!-- Card 3 -->
         <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
               <div class="mb-3">
                  <img class="w-auto mx-auto rounded-full" src="https://i.pravatar.cc/150?img=18" alt="" />
               </div>
               <h2 class="text-xl font-medium text-gray-700">Wayan Alex</h2>
               <span class="text-blue-500 block mb-5">Data Scientist</span>

               <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</a>
            </div>
         </div>

         <!-- Card 4 -->
         <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
               <div class="mb-3">
                  <img class="w-auto mx-auto rounded-full" src="https://i.pravatar.cc/150?img=28" alt="" />
               </div>
               <h2 class="text-xl font-medium text-gray-700">Ketut Julia</h2>
               <span class="text-blue-500 block mb-5">Project Manager</span>

               <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</a>
            </div>
         </div>
      </div>
   </div>
        `
    }
}
export default AboutPage;
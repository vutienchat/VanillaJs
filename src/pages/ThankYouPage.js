const ThankYouPage = {
    render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html */ `
         <div class="flex justify-center items-center py-16">
            <div class="text-center">
            <div class="text-4xl pb-2 font-semibold font-serif">THANK YOU</div>
            <p><i class="fas fa-check text-7xl py-5 font-semibold text-green-400"></i></p>
            <div class="text-lg">Cảm ơn quý khách đã mua hàng của shop chúng tôi</div>
            <a href="#"><button class="focus:outline-none text-blue-600 text-sm mt-8 py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-500 hover:text-white" type="button"> <i class="fas fa-arrow-left"></i> Tiếp tục xem Sản Phẩm</button></a>
            </div>
         </div>

        `
    }
}
export default ThankYouPage;
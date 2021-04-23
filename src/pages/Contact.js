import ContactApi from "../api/ContactAPI";
import { $ } from "../utils";

const Contact = {
    render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html */ `
        <div class="mb-8 fade"
        style=" background-image: url('./images/bg-contact.jpg'); background-size: 100%">

        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="contact text-center py-20">
                <h1 class="mt-5 mb-2 text-center text-light text-2xl font-bold text-gray-200">LIÊN HỆ VỚI CHÚNG TÔI</h1>

                <form id="form-contact">
                    <input
                        class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-gray-200 p-2 m-2 placeholder-white focus:placeholder-black focus:outline-none"
                        id="ho_ten" placeholder="Họ và tên" required><br>
                    <input id="email"
                        class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-gray-200 p-2 m-2 placeholder-white focus:placeholder-black focus:outline-none "
                        placeholder="Email của Bạn" required><br>
                    <input id="tieu_de"
                        class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-gray-200 p-2 m-2 placeholder-white focus:placeholder-black focus:outline-none"
                        placeholder="Chủ đề" required><br>
                    <textarea id="noi_dung"
                        class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-gray-200 p-2 m-2 placeholder-white focus:placeholder-black focus:outline-none"
                        rows="4" placeholder="Nội dung" required></textarea><br>
                    <div class="pt-7"><button class="focus:outline-none text-white text-sm py-2.5 px-10 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg" name="btn_Lienhe">Gửi</button></div>


                </form>
            </div>
            <div class="flex justify-center">
                <div class="about-us text-center text-light bg-gray-500 bg-opacity-75 w-10/12 md:w-3/5 py-20 ">
                    <div class="p-5">
                        <h1 class="text-2xl mb-2 font-bold text-gray-200">VỀ CHÚNG TÔI</h1>
                        <p class="text-1xl text-gray-200">WOKIEE TẠO ĐIỂM NHẤN VÀ XU HƯỚNG THỜI TRANG TRÊN TOÀN THẾ GIỚI. </p><br>
                        <i class="text-gray-200">"Chúng tôi cung cấp cho các nhà phát triển, chủ sở hữu các trang thương
                            mại điện tử và khách hàng của họ trên khắp thế giới những cửa hàng trực tuyến tốt nhất"</i>
                        <p class="text-gray-200">-Jerry Combo</p>
                        <div class="pt-10">
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f text-gray-200 px-1.5"></i></a>
                            <a href="https://twitter.com/"> <i class="fab fa-twitter text-gray-200 px-1.5"></i></a>
                            <a href="https://www.google.com.vn/"><i class="fab fa-google-plus-g text-gray-200 px-1.5"></i></a>
                            <a href="#"><i class="fas fa-camera text-gray-200 px-1.5"></i></a>
                            <a href="#"><i class="fas fa-phone-volume text-gray-200 px-1.5"></i></a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">

        <p><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.747094875795!2d105.7425176697754!3d21.045215400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455ace9078029%3A0x677e91696344621b!2sShop%20Crocs%20Store%20-%20Crocs%20Vietnam!5e0!3m2!1sen!2s!4v1606202249157!5m2!1sen!2s"
                width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
        </p>
        <div class="ml-5">
            <div class="text-3xl mt-4 font-bold">Liên hệ</div>
            <hr class="w-20 h-1 bg-black">
            <p>
            <ul>
                <li class="mt-5">
                    <p>Địa chỉ chúng tôi</p>
                    <p><strong>315 Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội.</strong></p>
                </li>
                <li class="mt-4">
                    <p>Email chúng tôi</p>
                    <p><strong>chat2704@gmail.com</strong></p>
                </li>
                <li class="mt-4">
                    <p>Điện thoại</p>
                    <p><strong>0987654321</strong></p>
                </li>
                <li class="mt-4">
                    <p>Thời gian làm việc</p>
                    <p><strong>Thứ 2 đến Thứ 7 từ 8h30 đến 17h30</strong></p>
                </li>

            </ul>
            </p>
        </div>
        `
    },
   async afterRender(){
      const btn_Lienhe =  $('#form-contact');
      btn_Lienhe.addEventListener('submit',async (e) =>{
          e.preventDefault();
        const data = {
            name : $('#ho_ten').value,
            email : $('#email').value,
            title : $('#tieu_de').value,
            content : $('#noi_dung').value
        }
       await ContactApi.add(data);
        swal({
            title: "Good job!",
            text: "Bạn đã gửi thành công Thành Công",
            icon: "success",
          });
      })
    }
}
export default Contact;
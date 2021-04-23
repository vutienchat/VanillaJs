import {$, displayError} from '../utils'
import UserAPI from '../api/UserAPI.js'
const SignInPage = {
    render() {
        window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html */ `
        <div class="flex justify-center items-center my-10" >
            <div class="shadow p-8 w-4/5 md:w-1/2 lg:w-2/6">
                <form id="form-login">
                    <div class="flex justify-center mb-4">
                        <img class="rounded-full w-28 object-cover" src="data:image/jpeg;base64,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" alt="">
                    </div>
                    <div class="relative mb-4 form__item ">
                        <input type="text" name="" required class=" cursor-pointer pt-3 pb-2 px-2 w-full focus:outline-none " id="Email">
                        <label  class="absolute left-0 top-1/2 pointer-events-none transform -translate-y-2/4 w-full h-full  border-b-2 ">
                            <span class="text-sm text-gray-400 absolute left-0 top-1/2 transform -translate-y-2/4 content-lable">Email</span>
                        </label>
                    </div>
                    <div class="relative  mb-3 form__item ">
                        <input  name="mat_khau"  id="password" required class="cursor-pointer  pt-3 pb-2 px-2 w-full focus:outline-none ">
                        <label class="absolute left-0 top-1/2 pointer-events-none transform -translate-y-2/4 w-full h-full border-b-2">
                            <span class="text-sm text-gray-400 absolute left-0 top-1/2 transform -translate-y-2/4 content-lable">Password</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="ghi_nho" type="checkbox" checked>
                            Ghi nhớ tài khoản?
                        </label>
                    </div>
                    <div class="text-center my-4">
                    <button class="focus:outline-none text-white text-sm py-2 px-16 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-lg">Login</button>
                    </div>
                </form>
                <div class="text-center">
                    <span><a class="hover:text-blue-600" href="">Đăng Ký</a></span> |
                    <span><a class="hover:text-blue-600" href="">Quên Mật Khẩu?</a></span>
                </div>
            </div>
        </div>
       
        `
    },
   async afterRender(){
        $('#form-login').addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = {
                email: $('#Email').value,
                password: $('#password').value
            }
            try {
                const {data} = await UserAPI.login(user);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user',JSON.stringify(data.user));
                window.location.hash = '#'
            } catch(err) {
                const {error} = err.response.data;
                swal({
                    icon: "error",
                    title: "Login Failed",
                    text: error
                });
            }
          
        })
    }
}
export default SignInPage;
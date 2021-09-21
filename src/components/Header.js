import categoryApi from "../api/categoryAPI.js";
import ProductApi from "../api/productAPI.js";
import UserAPI from "../api/UserAPI.js";
import { $, customNameProduct, isAdmin, reRender } from "../utils.js"
const Header = {
    async render() {
        const nameLocal = JSON.parse(localStorage.getItem('user')) 
        let nameUser = nameLocal ? `Xin Chào: <span class="text-primary">${customNameProduct(nameLocal.name)}</span>`  : '';
        try {
            var isadmin = await isAdmin();
        } catch (error) {
            var isadmin = undefined;
        }
        const { data: categorys } = await categoryApi.getAll();
        return /*html*/ `
        <div
        class="scrollmenu bg-white sm:pr-8 transform visible fixed -translate-y-full w-full z-10 transition duration-300 ease-in-out py-2">
        <nav>
            <div class="block sm:flex items-center">
                <i id="openMenu" class="hidden sm:block md:hidden flex-1 fa fa-bars hover:text-primary pl-8"></i>
                <div class="hidden md:block md:flex-1" id="main_menu">
                    <ul class="flex items-center py-2 pl-3">
                        <li><a class=" px-3 active hover:text-primary" href="#">HOME</a></li>
                        <li><a class=" px-3 hover:text-primary" href="#/products">PRODUCTS</a></li>
                        ${categorys.map(category => {
                          return /*html */`
                            <li><a class="px-3 hover:text-primary" href="#/category/${category._id}">${category.name.toUpperCase()}</a></li>
                            `
                        }).join('')
            }
                        <li><a class=" px-3 hover:text-primary" href="#/news">NEWS</a></li>
                        <li><a class=" px-3 hover:text-primary" href="#/contact">CONTACT</a></li>
                        <li><a class=" px-3 hover:text-primary" href="#/about">ABOUT</a></li>
                    </ul>
                </div>
                <div>
                    <div class="flex justify-between p-2 sm:p-0 w-full">
                       <div><i id="openMenu" class="fa fa-bars block sm:hidden hover:text-primary"></i></div>
                       <div><i id="openSearch" class="fas fa-search sm:mr-6 hover:text-primary"></i></div>
                       <div class="relative"><a href="#/cart"><i class="fas fa-shopping-bag sm:mr-6 hover:text-primary"></i></a>
                       <div class="absolute -top-2/4 right-1/4 text-xs flex items-center justify-center h-4 w-4 text-white rounded-full flex-shrink-0 bg-primary hidden" id="countCart"></div>
                       </div>
                       <div> <i id="openUsermd" class="fas fa-user block md:hidden sm:mr-6 hover:text-primary"></i></div>
                        <div class="hidden sm:block relative">
                            <i id="btn-user" class="fas fa-user hidden md:block sm:mr-6 hover:text-primary"></i>
                            <div class="absolute tobutton top-8 -left-40 bg-white w-56 overflow-hidden transition duration-300 ease-in-out shadow-md hidden"
                                id="user-function">
                                <ul>
                                    <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/signup"><i
                                                class="fas fa-user pr-2"></i> Đăng Ký</a></li>
                                    <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/login"><i
                                                class="fas fa-key pr-2"></i> Đăng Nhập</a></li>
                                    <li><span id="signout" class="hover:text-primary block px-7 py-3 text-xs"><i
                                                class="fas fa-power-off pr-2"></i> Đăng Xuất</span></li>
                                    ${isadmin ? `
                                        <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/admin/listproduct"><i
                                        class="fas fa-user-shield pr-2"></i> Admin</a></li>
                                    ` : ''}
                                    
                                </ul>
                            </div>
                        </div>
                        <div><i class="fas fa-list-ul hover:text-primary"></i></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <header>
        <div class="sm:flex items-center px-3 py-3.5 sm:px-8">
            <div class="hidden sm:block flex-1">
                <i id="openMenu" class="inline-block md:hidden fa fa-bars hover:text-primary "></i>
                <div class="hidden md:block">
                    <div class="flex items-center">
                    <a href="#">
                        <img class="hidden md:block"
                        src="https://cdn.shopify.com/s/files/1/0033/3647/0628/files/Logo_0947c337-c43c-4cad-a74a-7121c64b9871_95x.png?v=1551530371"
                        alt="">
                    </a>
                    <div class="pt-2 pl-3">${nameUser}
                    </div>
                </div>
                </div>
               
            </div>
            <div class="sm:flex-end">
                <div class="flex items-center ">
                    <div class="hidden md:block sm:mr-6">
                        <form id="form-seach-products">
                            <div class="relative">
                                <input type="text"
                                    class="bg-gray-100 focus:bg-white pl-8 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-70 focus:border-blue-400 border border-gray-200
                                     relative placeholder-gray-500 placeholder-opacity-100 transition duration-300"
                                     id="data-search" placeholder="Search...">
                                <button class=" absolute top-2 left-2 hover:text-primary focus:outline-none"><i
                                        class="fas fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="flex w-full justify-between items-center">
                      <div>  <i id="openMenu" class="block sm:hidden fa fa-bars hover:text-primary"></i></div>
                       <div> <i id= "openSearch" class="block md:hidden fas fa-search sm:mr-6 hover:text-primary"></i></div>
                    <div class="relative"><a href="#/cart"><i class="fas fa-shopping-bag sm:mr-6 hover:text-primary"></i></a>
                    <div class="absolute -top-2/4 right-1/4 text-xs flex items-center justify-center h-4 w-4  text-white rounded-full flex-shrink-0 bg-primary hidden" id="countCart"></div>
                    </div>
                      <div><i id="openUsermd" class="fas fa-user sm:mr-6 md:hidden hover:text-primary"></i></div>
                        <div class="hidden sm:block relative">
                            <!-- <i onclick="openUserMd()" -->
                            <i class="fas fa-user hidden md:block sm:mr-6 hover:text-primary" id="btn-user"></i>
                            <div class="tobutton absolute top-8 -left-40 z-10 bg-white w-56 overflow-hidden transition duration-300 ease-in-out shadow-md hidden"
                                id="user-function">
                                <ul>
                                    <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/signup"><i
                                                class="fas fa-user pr-2"></i> Đăng Ký</a></li>
                                    <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/login"><i
                                                class="fas fa-key pr-2"></i> Đăng Nhập</a></li>
                                    <li><span id="signout" class="hover:text-primary block px-7 py-3 text-xs"><i
                                                class="fas fa-power-off pr-2"></i> Đăng Xuất</span></li>
                                    ${isadmin ? `
                                    <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/admin/listproduct"><i
                                    class="fas fa-user-shield pr-2"></i>Admin</a></li>
                                    ` : ''}
                                </ul>
                            </div>
                        </div>
                        <div><i class="fas fa-list-ul hover:text-primary"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white p-2 flex justify-center md:hidden">
            <img src="https://cdn.shopify.com/s/files/1/0033/3647/0628/files/Logo_0947c337-c43c-4cad-a74a-7121c64b9871_95x.png?v=1551530371"
                alt="">
        </div>
        <nav class="hidden md:block">
            <ul class="flex bg-secondary items-center py-3" id="main_menu">
                <li><a class="text-white px-4 active hover:text-primary" href="#">HOME</a></li>
                <li><a class="text-white px-4 hover:text-primary" href="#/products">PRODUCTS</a></li>
                ${categorys.map(category => {
                return `
                    <li><a class="text-white px-4 hover:text-primary" href="#/category/${category._id}">${category.name.toUpperCase()}</a></li>
                    `
            }).join('')
            }
                <li><a class="text-white px-4 hover:text-primary" href="#/news">NEWS</a></li>
                <li><a class="text-white px-4 hover:text-primary" href="#/contact">CONTACT</a></li>
                <li><a class="text-white px-4 hover:text-primary" href="#/about">ABOUT</a></li>
            </ul>
        </nav>
        <nav class="block md:hidden z-20 w-3/6 sm:w-2/6 h-screen fixed top-0 bg-white transform -translate-x-full transition transition duration-300 ease-in-out overflow-y-auto"
            id="main-menu-md">
            <ul class="items-center" id="main_menu">
                <li id="closeMenu"
                    class="border-b text-sm border-fuchsia-600 flex text-gray-400 items-center py-3 pl-7 hover:text-primary">
                    <i class="fa fa-times pr-2"></i>
                    <span>Close</span>
                </li>
                <li class="text-sm"><a class="block px-7 py-4 active  hover:text-primary" href="#">HOME</a></li>
                <li class="text-sm"><a class="block px-7 py-4  hover:text-primary" href="#/products">PRODUCTS</a></li>
                ${categorys.map(category => {
                return `
                    <li class="text-sm"><a class="block py-4 px-7 hover:text-primary" href="#/category/${category._id}">${category.name.toUpperCase()}</a></li>
                    `
            }).join('')
            }
                <li class="text-sm"><a class="block py-4 px-7 hover:text-primary" href="#/news">NEWS</a></li>
                <li class="text-sm"><a class="block py-4 px-7 hover:text-primary" href="#/contact">CONTACT</a></li>
                <li class="text-sm"><a class="block py-4 px-7 hover:text-primary" href="#/about">ABOUT</a></li>
            </ul>
        </nav>
        <nav class="block md:hidden z-20 w-3/6 sm:w-2/6 h-screen fixed top-0 bg-white transform -translate-x-full transition transition duration-300 ease-in-out"
            id="user">
            <ul class="items-center">
                <li id="closeUser"
                    class="border-b text-sm border-fuchsia-600 flex text-gray-400 items-center py-3 pl-7 hover:text-primary">
                    <i class="fa fa-times pr-2"></i>
                    <span>Close</span>
                </li>
                <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/signup"><i class="fas fa-user pr-2"></i> Đăng
                        Ký</a></li>
                <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/login"><i class="fas fa-key pr-2"></i> Đăng
                        Nhập</a></li>
                <li><span id="signout" class="hover:text-primary block px-7 py-3 text-xs"><i
                            class="fas fa-power-off pr-2"></i>Đăng Xuất</span></li>
                ${isadmin ? `
                <li><a class="hover:text-primary block px-7 py-3 text-xs" href="#/admin/listproduct"><i
                class="fas fa-user-shield pr-2"></i>Admin</a></li>
                ` : ''}
                          
            </ul>
        </nav>
    </header>
    <div
        class="fullscreen fixed top-0 z-10 bg-black w-full h-full bg-opacity-75 invisible transition duration-500 ease-in-out">
    </div>
    <div class="bg-white w-full h-40 fixed top-0 transform visible -translate-y-full w-full z-10 transition duration-300 ease-in-out" id="search">
        <div class="flex p-8">
            <div class="text-gray-500 text-sm flex-1">Bạn đang tìm kiếm cái gì?</div>
            <div class="text-gray-300 text-sm"> <i id="closeSearch" class="fa fa-times hover:text-primary"></i></div>
        </div>
        <form id="form-seach-products">
            <div class="relative">
                <input type="text" class="placeholder placeholder-black w-full p-2 focus:outline-none placeholder-opacity-100 border-b pl-8 pr-14"
               id="data-search" placeholder="Tìm Kiếm Sản Phẩm...">
                <button><i class="fas fa-search absolute top-2 right-7 hover:text-primary"></i></button>
            </div>
    </form>
    </div>
            `
    },
    async afterRender() {
        $('#signout').forEach(item =>{
            item.addEventListener('click', async() =>{
                await UserAPI.signOut()
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                   reRender(this,'#header')
                   window.location.hash =  `/`;
            })
        })
        const searchProducts = document.querySelectorAll('#form-seach-products');
        searchProducts.forEach(search => {
            search.addEventListener('submit', async (e) => {
                e.preventDefault();
                const dataSearch = search.querySelector('input').value;
                window.location.hash =  `/search/${dataSearch}`;
            })
        })
    },
    handleHeader() {
       
        $('#openMenu').forEach(item => {
            item.addEventListener('click', function () {
                $('#main-menu-md').classList.remove('-translate-x-full');
                $('.fullscreen').classList.remove('invisible')
            });
        });
        $('#closeMenu').addEventListener('click', () => {
            $('#main-menu-md').classList.add('-translate-x-full');
            $('.fullscreen').classList.add('invisible')
        });
        $('#openUsermd').forEach(user => {
            user.addEventListener('click', function () {
                $('#user').classList.remove('-translate-x-full');
                $('.fullscreen').classList.remove('invisible')
            });
        });
        $('#closeUser').addEventListener('click', () => {
            $('#user').classList.add('-translate-x-full');
            $('.fullscreen').classList.add('invisible')
        });
        $('#openSearch').forEach(search => {
            search.addEventListener('click', function () {
                $('#search').classList.remove('-translate-y-full');
            })
        });
        $('#closeSearch').addEventListener('click', () => {
            $('#search').classList.add('-translate-y-full');
        });
        const btnUser = document.querySelectorAll('#btn-user');
        btnUser.forEach(user => {
            user.onclick = function () {
                this.parentElement.querySelector('#user-function').classList.toggle('hidden');
            }
        });
        window.addEventListener('scroll', () => {
            const height_header = document.querySelector("header").offsetHeight;
            const scrollmenu = document.querySelector('.scrollmenu');
            if(scrollmenu){
                if (window.scrollY > height_header) {
                    scrollmenu.classList.remove('-translate-y-full', 'visible');
                    scrollmenu.classList.add('shadow-md')
                } else {
                    scrollmenu.classList.add('-translate-y-full', 'visible');
                    scrollmenu.classList.remove('shadow-md')
                }
            }
            
        });
    }
}
export default Header;
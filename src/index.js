import Header from './components/Header.js';
import CategoryPage from './pages/CategoryPage.js';
import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/Homepage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductPage from './pages/ProductPage.js';
import { parseRequestUrl, $ ,Active, isAdmin} from './utils.js';
import AdminProductPage from './pages/AdminProductPage'
import ProductAddPage from './pages/ProductAddPage.js';
import footer from './components/footer.js';
import ProductEditPage from './pages/ProductEditPage.js';
import AdminCategory from './pages/AdminCategory.js';
import CategoryEditPage from './pages/CategoryEditPage.js';
import CategoryAddPage from './pages/CategoryAddPage.js';
import Cart from './components/Cart.js';
import CartPage from './pages/CartPage.js';
import NewPage from './pages/NewPage.js';
import Contact from './pages/Contact.js';
import AdminContact from './pages/AdminContact.js';
import AboutPage from './pages/AboutPage.js';
import SearchPage from './pages/SearchPage.js';
import AdminOrderPage from './pages/AdminOrderPage.js';
import OrderDetailPage from './pages/OrderDetailPage.js';
import ThankYouPage from './pages/ThankYouPage.js';
import SignInPage from './pages/SignInPage.js';
import SignnUpPage from './pages/SignUpPage.js';
import UserAPI from './api/UserAPI.js';

const routers = {
    '/': HomePage,
    '/products': ProductPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/admin/listproduct': AdminProductPage,
    '/admin/listcategory': AdminCategory,
    '/admin/listcontact': AdminContact,
    '/admin/listorder': AdminOrderPage,
    '/admin/detail/:id': OrderDetailPage,
    '/admin/addproduct': ProductAddPage,
    '/cart': CartPage,
    '/checkout': ThankYouPage,
    '/search/:id': SearchPage,
    '/news': NewPage,
    '/about': AboutPage,
    '/contact': Contact,
    '/admin/addcategory': CategoryAddPage,
    '/admin/editproduct/:id': ProductEditPage,
    '/admin/editcategory/:id': CategoryEditPage,
    '/login': SignInPage,
    '/signup': SignnUpPage,
}
const router = async () => {
    const { resource, admin , id } = parseRequestUrl();
    const parseUrl = (admin ? `/admin`: '') + ( resource ? `/${resource}` : `/`) + (id ? `/:id` : '');
    const page = routers[parseUrl] ? routers[parseUrl] : Error404Page;
    if(!admin){
        $('#header').innerHTML = await Header.render();
       await Header.afterRender();
        Header.handleHeader();
        await Active('#main_menu a','active')
        $('#main-content').innerHTML = await page.render();
    
        if (page.afterRender) {
            await page.afterRender();
        }
        await Cart.AddCart();
        Cart.countNumCart()
        $('#footer').innerHTML = footer.render();
    }else{
            try {
               const admin = await isAdmin()
                if(admin){
                    $('#header').innerHTML = '';
                    $('#footer').innerHTML = '';
                    $('#main-content').innerHTML = await page.render();
                    if (page.afterRender) {
                        await page.afterRender();
                    }
                    Active('#sidebar_menu a','active')
                }
            } catch (error) {
                window.location.hash = '/login';
            }
        }
    }
   
    

window.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
// import { parseRequestUrl } from "../utils";
import ListDetail from "../components/ListDetail.js";

const OrderDetailPage = {
   async render() {
    window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
       return /*html */ `
       <div x-data="{ sidebarOpen: false, darkMode: false }" :class="{ 'dark': darkMode }">
       <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
          <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
              class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
                  ${Sidebar.render()}
                  <div class="flex-1 flex flex-col overflow-hidden">
                      ${Navbar.render()}
                      <main id="list-detail" class="flex-1 overflow-x-hidden overflow-y-auto py-7 px-5">
                        ${await ListDetail.render()}
                      </main>
                  </div>
            </div>
          </div>
      </div>
       `
    }
}
export default OrderDetailPage;
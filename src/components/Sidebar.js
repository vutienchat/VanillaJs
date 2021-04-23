import UserAPI from "../api/UserAPI";
import { customNameProduct } from "../utils";

const Sidebar = {
  render() {
    const nameLocal = JSON.parse(localStorage.getItem('user')) 
    let name = nameLocal ? nameLocal.name : ''
    return /*html*/`     
     <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="scrollbar border-r-2 border-gray-300 fixed z-5 inset-y-0 left-0 w-52 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                      <div class="flex items-center justify-center mt-6 border-b pb-2">
                         <img src="data:image/jpeg;base64,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" class="h-12 w-12 rounded-full object-cover bg-red-800">
                        <span class="pl-3">
                        ${customNameProduct(name)}</span>
                         </div>
                      <nav class="flex flex-col mt-8 px-4 text-center" id="sidebar_menu">
                          <!-- inbox -->
                          <a href="#" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current" width="20" height="20" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"></path></svg>
                            </span>
                            <span class="ml-2 text-md tracking-wide text-gray-600 text-base">Home</span>
                          </a>
                          <a href="#/admin/listproduct" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span class="ml-2 text-md tracking-wide">Product</span>
                          </a>
                <!-- end inbox -->
                <!--starred -->
                          <a href="#/admin/listcategory" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="mx-1 w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                            </span>
                            <span class="ml-2 text-md tracking-wide text-base">Category</span>
                          </a>
              <!--end of starred -->
              <!-- start of snooze -->
                          <a href="#/admin/listcontact" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                  <svg  class="w-5 h-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <circle cx="12" cy="12" r="9"></circle>
                                  <polyline points="12 7 12 12 15 15"></polyline>
                                </svg>
                            </span>
                            <span class="ml-2 text-md tracking-widetext-base">Contact</span>
                          </a>
                              <!--end of snooze -->
                              <!-- start of sent -->

                              <a href="#/admin/listorder" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6">
                  <span class="inline-flex justify-center items-center ml-4">

                          <svg class="w-5 h-5 transform rotate-45 -mr-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  </span>
                  <span class="ml-2 text-md tracking-wide text-base">Order</span>

                </a>
                              <!-- end of sent -->
                              <!-- start of draft -->

                              <a href="#" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                          <svg class="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                              </path>
                          </svg>
                  </span>
                  <span class="ml-2 text-md tracking-wide text-gray-600 text-base">Draft</span>

                </a>
                      <!-- end of draft -->
                      <!-- start of spam -->
                                  <a href="#" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
              <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400" fill="currentColor" >
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
              </svg>
                  </span>
                  <span class="ml-2 text-md tracking-wide text-gray-600  text-base">Spam</span>

                </a>
                              <!-- end of spam -->
                              <!-- start of bin -->
                                            <a href="#" class=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
              <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </span>
                  <span class="ml-2 text-md tracking-wide text-gray-600  text-base">Bin</span>

                </a>
              <!-- end of bin -->
                              <hr class="mt-2">
                              <!--start of labels -->

                                <a href="#" class="  relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800  border-transparent pr-6">
                  <span class="inline-flex justify-center items-center ml-4">

                    <!-- labels logo -->
                    <svg class="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                              </path>
                          </svg>

                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Labels</span>
                  <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-gray-400 bg-gray-200 rounded-full">4</span>
                </a>
              <!--end of logo -->
              <div class="pt-20 flex justify-between">
              <!-- user images -->
              <div class="flex -space-x-2 ml-2 overflow-hidden inline-flex">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
              </div>
              <!-- end of user images -->
              <button class="inline-flex">
              <button class="appearance-none ml-2 px-2 py-1 border-2 border-gray-300 rounded-full  flex-1 flex items-center justify-center  text-center text-red hover:bg-grey-lighter">
                                      <!-- the like svg -->
                                      <svg class=" h-4 " version="1.1" viewBox="0 0 496.158 496.158" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                                          <path d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082
                                              c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z" style="fill:#E04F5F;">
                                          </path>
                                          <path d="M374.116,155.145c-34.799-34.8-91.223-34.8-126.022,0h-0.029c-34.801-34.8-91.224-34.8-126.023,0
                                              c-34.801,34.8-29.783,86.842,0,126.022c31.541,41.491,89.129,109.944,126.023,109.944h0.029c36.895,0,94.481-68.453,126.022-109.944
                                              C403.9,241.988,408.916,189.946,374.116,155.145z" style="fill:#FFFFFF;">
                                          </path>

                                      </svg>
                          <span class="text-gray-500 ml-2 text-md font-lg">
                              156
                          </span>
                                  </button>
                                  <!-- end of the like svg -->
              </button>

              </div>
              <span class="text-gray-500 mt-4">
              A small text here
              </span>
              <span class="font-semibold text-gray-500 ">
              untitled
              </span>
              <hr class="mt-2 border-1 border-gray-300">

              <button class="flex justify-center ">
              <span  class="font-lg pt-3 px-3">&#10096;</span>
              <span class="font-lg pt-3">Hide menu</span>
              </button>

                      </nav>
    </div>
        `
  }
}
export default Sidebar;
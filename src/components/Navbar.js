const Navbar = {
    render() {
            return ` 
            <header class=" justify-between items-center mt-6 px-2 border-b-2 border-gray-300">
                    <div class="items-center space-x-2 lg:space-x-0">
                        <button @click="sidebarOpen = true"
                            class="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                            <div class=" flex justify-between">
                            <!--sub navbar -->
                            <div class=" inline-flex justify-center">
                            <span class="-py-1 pr-6"> <input type="checkbox" name=""></span>
                            <span class="px-2 -ml-1 font-semibold  border-b-2 border-orange">Buyers
                        <span class="px-2 py-0.5 ml-auto text-xs font-medium
                        tracking-wide text-gray-400 bg-gray-200
                        rounded-full">4</span>
                            </span>
                                <span class="px-2 text-gray-500">All primary</span>
                                <span class="px-2 text-gray-500">Internal</span>
                                <span class="px-2 text-gray-500">Social</span>
                            </div>
                            <div class="inline-flex py-3 -mt-4">
                                <!-- The searchbar -->
                                        <form method="GET">
                                        <div class="relative text-gray-600 focus-within:text-gray-400">
                                        <span class="absolute inset-y-0 left-0 flex items-center pr-2">
                                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </button>
                                        </span>
                                        <input type="search" name="q" class="py-2 text-sm text-white  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>

                </header>
`
    }
}
export default Navbar;
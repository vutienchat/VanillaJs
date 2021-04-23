import UserAPI from "./api/UserAPI";

export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase();
    const request = url.split('/');
     let admin = request[1] == "admin" ? true : false;
     if(admin){
        return {
            resource: request[2],
            admin,
            id: request[3]
        }
     }else{
        return {
            resource: request[1],
            id: request[2]
        }
     }
   
}
export const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}
export const reRender = async (component, position = "") => {
    if (position) {
        $(position).innerHTML = await component.render();
        if (component.informationOrderRender) {
            $("#infoOrder").innerHTML = await component.informationOrderRender();
        }
    } else {
        $("#main-content").innerHTML = await component.render();
    }
    await component.afterRender();
    component.handleHeader ? component.handleHeader() : '';
}
export const Active = async(position,cla) =>{
       const listmenu = $(position)
       listmenu.forEach( menuItem =>{
         menuItem.classList.remove(cla);
            if(menuItem.hash == window.location.hash){
                menuItem.classList.add(cla);
            }
    })

} 
export const customNameProduct = (name) =>{
   let newName = name.split(' ')
    newName = newName.map( item => {
       return (item.substr(0,1).toUpperCase()) + (item.substr(1).toLowerCase());
   }).join(' ')
   return newName;
}
export const displayError = (err) =>{
    return `
    <div class="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg mx-auto fade1 " id="displayErr">
        <div class="text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 pt-1" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/></svg>
        </div>
        <div class=" px-3">
            <h3 class="text-red-800 font-semibold tracking-wider">
                Error 
            </h3>
            <ul class="list-disc list-inside">
                <li class="form-black">${err}</li>
            </ul>
        </div>
    </div>
    `
 }
 export const isAdmin = async() => {
    const userlocal = localStorage.getItem('user');
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    const {_id} = JSON.parse(userlocal)
    if(_id) {
        const {data} =  await UserAPI.profile(token,_id)
        return data;
    }
    
 }

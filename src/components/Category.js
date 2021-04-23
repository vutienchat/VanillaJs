import categoryApi from "../api/categoryAPI.js";

const Category = {
    async render(){
        const {data : categories} = await categoryApi.getAll();
       const listCategory = categories.map(category => {
            return ` 
            <option value="${category._id}">${category.name}</option>`
        }).join('');
       return `
      ${listCategory}
       `
    }
}
export default Category;
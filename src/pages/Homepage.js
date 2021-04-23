import ListProductSpecial from "../components/ListProductSpecial.js";
import Slider from "../components/Slider.js";
import { parseRequestUrl } from "../utils.js";
const HomePage = {
    async render() {
		window.scrollTo({ top: 0,left: 0 ,behavior: 'smooth' })
        return /*html*/`
          ${Slider.render()}
		  ${await ListProductSpecial.render()}
        `
    },
    async afterRender(){
     let slideIndex = 0;
		showSlide();
		 setInterval(showSlide, 3000);
		function showSlide() {
			let i;
			let slides = document.getElementsByClassName('slide-item');
			let dots = document.getElementsByClassName('dot');
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}
			for (let i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slideIndex++;
			if (slideIndex > slides.length) slideIndex = 1;
			if(slides[slideIndex-1] && dots[slideIndex-1]){
				slides[slideIndex-1].style.display = "block";
				dots[slideIndex-1].className += " active";
			}
			
		}
    }
}
export default HomePage;
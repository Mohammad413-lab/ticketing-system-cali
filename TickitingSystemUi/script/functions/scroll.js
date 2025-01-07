import { linearColor } from "../colors.js";
export function changeScrollColor(nav){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
         nav.style.background=linearColor; 
        }else{
         nav.style.background="transparent"; 
        }
    });
}
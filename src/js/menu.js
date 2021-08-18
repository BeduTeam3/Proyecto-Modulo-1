const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Abrir menú");
    }else{
        navToggle.setAttribute("aria-label","Abrir menú");
    }
});
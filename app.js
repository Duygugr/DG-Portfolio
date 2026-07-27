const menu = document.querySelector(".header-ul")
const hamburgermenu = document.querySelector(".fa-solid.fa-bars")

hamburgermenu.addEventListener("click" , () =>{
    menu.classList.toggle("active")

})
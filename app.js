var menuBtn = document.querySelector(".navbar-toggler"); // icon
var menuCls = document.querySelector(".cls"); // close icon
var menu = document.querySelector(".menu-items"); // menu

// event listener
menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active")
})

menuCls.addEventListener("click", function(){
    menu.classList.toggle("active")
})
const $body=document.getElementsByTagName("Body")[0]
const $burgerButton=document.getElementById("burger-button")
const $menuWrapper=document.getElementById("menu-wrapper")
const $menuAnimate=document.getElementById("menu-animate")
$burgerButton.addEventListener("click",function(){$body.classList.toggle("is-open")
$burgerButton.classList.toggle("open")
$menuWrapper.classList.toggle("active")
$menuAnimate.classList.toggle("fadeInDown")})
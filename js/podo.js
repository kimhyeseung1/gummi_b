window.addEventListener("load", function () {
let modalWrap = document.querySelector(".modal-podo"); 
const podocheck = document.querySelector(".podocheck");
let modalClose = document.querySelector(".modal-close");
podocheck.addEventListener("click",function(){
  modalWrap.style.display ="block";
})
modalClose.addEventListener("click" , function (){
  modalWrap.style.display = "none";
})
})


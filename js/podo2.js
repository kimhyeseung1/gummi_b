window.addEventListener("load", function () {
  let modalWrap2 = document.querySelector(".modal-podo2"); 
  const podocheck = document.querySelector(".podocheck");
  let modalClose2 = document.querySelector(".modal-close2");
  podocheck.addEventListener("click",function(){
    modalWrap2.style.display ="block";
  })
  modalClose2.addEventListener("click" , function (){
    modalWrap2.style.display = "none";
  })
  })
  
  //tab menu
  // var $tab_list = $(".tab_list li"),
  //     $tab_cont = $(".tab_cont");
  // var idx = 0;

  // $tab_cont.eq(0).show();

  // $tab_list.click(function(){
  //     idx = $(this).index();
  //     $tab_list.removeClass("active").eq(idx).addClass("active")
  //     $tab_cont.fadeIn(500)
  //     if($tab_list.eq(0).hasClass("active")){
  //         $tab_cont.removeClass("account2")
  //         $tab_cont.addClass("account1")
  //     }else{
  //         $tab_cont.removeClass("account1")
  //         $tab_cont.addClass("account2")
  //     }
  // })

  //tab menu
  window.addEventListener("load", function() {
  var tabListItems = document.querySelectorAll(".tab_list li");
  var tabContents = document.querySelectorAll(".tab_cont");
  var idx = 0;

  tabListItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      idx = index;
      tabListItems.forEach(function (item) {
        item.classList.remove("active");
      });
      tabListItems[idx].classList.add("active");

      if (tabListItems[0].classList.contains("active")) {
        tabContents.forEach(function (item) {
          item.classList.remove("account2");
          item.classList.add("account1");
        });
      } else {
        tabContents.forEach(function (item) {
          item.classList.remove("account1");
          item.classList.add("account2");
        });
      }
    });
  });
})
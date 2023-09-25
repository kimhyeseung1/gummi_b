$(function () {
    $(".gnb > li").mouseover(function () {
        $(".submenu").stop().slideDown(500);
        $(".header").addClass("on");
    });

    $(".gnb > li").mouseout(function () {
        $(".submenu").stop().slideUp(100);
        $(".header").removeClass("on");
    });

    $(".mb_gnb > li").mouseover(function () {
        $(this).find(".mb_submenu").stop().slideDown(500);
        $(this).find(".more").addClass("active");
    });

    $(".mb_gnb > li").mouseout(function () {
        $(this).find(".mb_submenu").stop().slideUp(500);
        $(this).find(".more").removeClass("active");
    });
});

window.addEventListener("load", function () {
    const hambergerBar = document.querySelector(".mb_h_nav .fa-bars");
    const xmark = document.querySelector(".mb_nav_top .fa-xmark");
    let mbGnb = document.querySelector(".mb_nav_gnb");

    hambergerBar.addEventListener("click", function () {
        mbGnb.classList.add("active");
    });
    xmark.addEventListener("click", function () {
        mbGnb.classList.remove("active");
    });

    const search = document.querySelector(".mb_h_nav .fa-magnifying-glass");
    const searchXmark = document.querySelector(".mb_search .fa-xmark");
    let searchbar = document.querySelector(".mb_searchbar");

    search.addEventListener("click", function () {
        searchbar.style.display = "block";
    });
    searchXmark.addEventListener("click", function () {
        searchbar.style.display = "none";
    });
});

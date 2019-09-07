var open_img = document.querySelector(".main-nav__button");
var list = document.querySelector(".main-nav__list");
var close_img = document.querySelector(".main-nav__list--close");
// var open_basket = document.querySelector(".basket-form__open")
var prod_but = document.querySelector(".product__button");
var prod_basket = document.querySelector(".basket-form");
open_img.addEventListener("click", function(evt) {
    evt.preventDefault();
    list.classList.add("main-nav__list--open");
    open_img.classList.remove("main-nav__list--open");
    close_img.classList.add("main-nav__list--open");
});
close_img.addEventListener("click", function(evt) {
    evt.preventDefault();
    list.classList.remove("main-nav__list--open");
    close_img.classList.remove("main-nav__list--open");
    open_img.classList.add("main-nav__list--open");
});
prod_but.addEventListener("click", function(evt) {
  evt.preventDefault();
  prod_basket.classList.add("basket-form__open");
});
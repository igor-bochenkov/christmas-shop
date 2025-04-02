export function burger() {
  const burgerIcon = document.querySelector(".menu-header__burger"),
    menuHeader = document.querySelector(".menu-header__body"),
    menuWrapper = document.querySelector(".menu-header__wrapper"),
    menuHeaderLinks = document.querySelectorAll(".menu-header__link");

  function toggleBurgerClass() {
    burgerIcon.classList.toggle("active");
    menuHeader.classList.toggle("active");
    menuWrapper.classList.toggle("active");
    document.body.classList.toggle("lock");
  }
  function hideBurger() {
    burgerIcon.classList.remove("active");
    menuHeader.classList.remove("active");
    menuWrapper.classList.remove("active");
    document.body.classList.remove("lock");
  }

  burgerIcon.addEventListener("click", function () {
    toggleBurgerClass();
  });

  menuHeaderLinks.forEach((link) => {
    link.addEventListener("click", hideBurger);
  });
}

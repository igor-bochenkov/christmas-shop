export function buttonUp(maxWidth, btnSelector) {
  const btnUp = document.querySelector(`${btnSelector}`);
  const mediaMax = window.matchMedia(`(max-width: ${maxWidth}px)`);
  function showBtn() {
    btnUp.classList.remove("is-hide");
  }

  function hideBtn() {
    btnUp.classList.add("is-hide");
  }

  btnUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (mediaMax.matches && scrollY > 300) {
      showBtn();
    } else {
      hideBtn();
    }
  });
}

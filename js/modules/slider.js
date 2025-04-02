export function slider() {
  const btnPrev = document.querySelector(".control-slider__arrow--prev"),
    btnNext = document.querySelector(".control-slider__arrow--next"),
    slider = document.querySelector(".slide"),
    sliderWrapper = document.querySelector(".item-slider__row"),
    sliderSection = document.querySelectorAll(".slide__section");

  //Основные вычисления
  const wrapperWidth = sliderWrapper.offsetWidth - 60;

  let sliderWidth = 0;
  sliderSection.forEach((slide) => {
    sliderWidth += slide.offsetWidth;
  });

  function sliderShiftSize(numberOfClicks) {
    return (sliderWidth - wrapperWidth) / numberOfClicks;
  }

  // -----------------------------------------------------------------------
  let shiftSize = sliderShiftSize(3);
  window.addEventListener("resize", () => {
    slider.style.transform = `translateX(-${(sliderPosition = 0)}px)`;
    btnPrev.classList.add("disabled");
  });

  let sliderPosition = 0;
  let numberClicks = 3;

  btnNext.addEventListener("click", () => {
    sliderPosition += shiftSize;
    slider.style.transform = `translateX(-${sliderPosition}px)`;

    if (sliderPosition > 0) {
      btnPrev.classList.remove("disabled");
    }

    if (sliderPosition >= shiftSize * numberClicks) {
      btnNext.classList.add("disabled");
    }
  });

  btnPrev.addEventListener("click", () => {
    sliderPosition -= shiftSize;
    slider.style.transform = `translateX(-${sliderPosition}px)`;

    if (sliderPosition < 1) {
      btnPrev.classList.add("disabled");
    }

    if (sliderPosition < shiftSize * numberClicks) {
      btnNext.classList.remove("disabled");
    }
  });

  //? =================================================================================================
  if (window.innerWidth < 769) {
    shiftSize = sliderShiftSize(6);
    numberClicks = 6;

    window.addEventListener("resize", () => {
      slider.style.transform = `translateX(-${(sliderPosition = 0)}px)`;
      btnPrev.classList.add("disabled");
    });

    let sliderPosition = 0;

    btnNext.addEventListener("click", () => {
      sliderPosition += shiftSize;
      slider.style.transform = `translateX(-${sliderPosition}px)`;

      if (sliderPosition > 0) {
        btnPrev.classList.remove("disabled");
      }

      if (sliderPosition >= shiftSize * numberClicks) {
        btnNext.classList.add("disabled");
      }
    });

    btnPrev.addEventListener("click", () => {
      sliderPosition -= shiftSize;
      slider.style.transform = `translateX(-${sliderPosition}px)`;

      if (sliderPosition < 1) {
        btnPrev.classList.add("disabled");
      }

      if (sliderPosition <= shiftSize * numberClicks) {
        btnNext.classList.remove("disabled");
      }
    });
  }
}

export function createPopup(data) {
  const element = document.createElement("div");
  element.classList.add("popup");

  if (data.category == "For Work") {
    element.classList.add("popup--work");
  }
  if (data.category == "For Health") {
    element.classList.add("popup--health");
  }
  if (data.category == "For Harmony") {
    element.classList.add("popup--harmony");
  }

  //!Переделать start--------------------------------------------------------
  let superpowerClassLive;
  if (data.superpowers.live == "+100") {
    superpowerClassLive = "superpower__snowflakes--1";
  } else if (data.superpowers.live == "+200") {
    superpowerClassLive = "superpower__snowflakes--2";
  } else if (data.superpowers.live == "+300") {
    superpowerClassLive = "superpower__snowflakes--3";
  } else if (data.superpowers.live == "+400") {
    superpowerClassLive = "superpower__snowflakes--4";
  } else if (data.superpowers.live == "+500") {
    superpowerClassLive = "superpower__snowflakes--5";
  }

  let superpowerClassCreate;
  if (data.superpowers.create == "+100") {
    superpowerClassCreate = "superpower__snowflakes--1";
  } else if (data.superpowers.create == "+200") {
    superpowerClassCreate = "superpower__snowflakes--2";
  } else if (data.superpowers.create == "+300") {
    superpowerClassCreate = "superpower__snowflakes--3";
  } else if (data.superpowers.create == "+400") {
    superpowerClassCreate = "superpower__snowflakes--4";
  } else if (data.superpowers.create == "+500") {
    superpowerClassCreate = "superpower__snowflakes--5";
  }

  let superpowerClassLove;
  if (data.superpowers.love == "+100") {
    superpowerClassLove = "superpower__snowflakes--1";
  } else if (data.superpowers.love == "+200") {
    superpowerClassLove = "superpower__snowflakes--2";
  } else if (data.superpowers.love == "+300") {
    superpowerClassLove = "superpower__snowflakes--3";
  } else if (data.superpowers.love == "+400") {
    superpowerClassLove = "superpower__snowflakes--4";
  } else if (data.superpowers.love == "+500") {
    superpowerClassLove = "superpower__snowflakes--5";
  }

  let superpowerClassDream;
  if (data.superpowers.dream == "+100") {
    superpowerClassDream = "superpower__snowflakes--1";
  } else if (data.superpowers.dream == "+200") {
    superpowerClassDream = "superpower__snowflakes--2";
  } else if (data.superpowers.dream == "+300") {
    superpowerClassDream = "superpower__snowflakes--3";
  } else if (data.superpowers.dream == "+400") {
    superpowerClassDream = "superpower__snowflakes--4";
  } else if (data.superpowers.dream == "+500") {
    superpowerClassDream = "superpower__snowflakes--5";
  }
  //!Переделать end--------------------------------------------------------

  element.innerHTML = `
        <div class="popup__body">
    <div class="popup__card">
      <div class="popup__close">
        <img src="img/icons/close_popup.svg" alt="cross">
      </div>
      <div class="popup__card-img card-gift__image"></div>
      <div class="popup__card-description">
        <div class="popup__card-name">
          <h4 class="card-gift__tag">${data.category}</h4>
          <h3 class="card-gift__text">${data.name}</h3>
          <p class="popup__card-text">${data.description}</p>
        </div>
        <div class="popup__card-superpower superpower">
          <h4 class="superpower__tag">Adds superpowers to:</h4>
          <div class="superpower__item">
            <p class="superpower__name">Live</p>
            <div class="superpower__rating">
              <p class="superpower__grade">${data.superpowers.live}</p>
              <div class="superpower__snowflakes ${superpowerClassLive}">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
              </div>
            </div>
          </div>
          <div class="superpower__item">
            <p class="superpower__name">Create</p>
            <div class="superpower__rating">
              <p class="superpower__grade">${data.superpowers.create}</p>
              <div class="superpower__snowflakes ${superpowerClassCreate}">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
              </div>
            </div>
          </div>
          <div class="superpower__item">
            <p class="superpower__name">Love</p>
            <div class="superpower__rating">
              <p class="superpower__grade">${data.superpowers.love}</p>
              <div class="superpower__snowflakes ${superpowerClassLove}">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
              </div>
            </div>
          </div>
          <div class="superpower__item">
            <p class="superpower__name">Dream</p>
            <div class="superpower__rating">
              <p class="superpower__grade">${data.superpowers.dream}</p>
              <div class="superpower__snowflakes ${superpowerClassDream}">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
                <img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;

  return element;
}

export function openPopup(items, popups) {
  items.forEach((card) => {
    card.addEventListener("click", () => {
      let cardName = card.getAttribute("data-card");

      popups.forEach((popup) => {
        let popupName = popup.getAttribute("data-popup");

        if (cardName == popupName) {
          document.querySelector(".wrapper").append(popup);
          popup.classList.add("popup-show");
          document.body.classList.add("lock");
        }
      });

      // Закрытие попапа
      const popupClose = document.querySelector(".popup__close"),
        popup = document.querySelector(".popup"),
        popupBody = document.querySelector(".popup__body");

      function closePopup() {
        if (document.querySelector(".popup")) {
          document.querySelector(".popup").remove();
          document.body.classList.remove("lock");
        }
      }

      popupClose.addEventListener("click", () => {
        closePopup();
      });

      //Закрытие по клику на подложке
      popup.addEventListener("click", (event) => {
        if (event.target === popupBody) {
          closePopup();
        }
      });
      //Закрытие по Esc
      document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && popup.classList.contains("popup-show")) {
          closePopup();
        }
      });
    });
  });
}

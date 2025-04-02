import { mixArray } from "./mix-array.js";
import { createCard } from "./cards.js";
import { createPopup, openPopup } from "./popup.js";

const cards = [];
const popups = [];

export function categorySwitch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      for (let i = 0; i < jsonData.length; i++) {
        let card = createCard(jsonData[i]);
        card.setAttribute("data-card", `gift-${i + 1}`);
        cards.push(card);
      }

      //Popup
      for (let i = 0; i < jsonData.length; i++) {
        let popup = createPopup(jsonData[i]);
        popup.setAttribute("data-popup", `gift-${i + 1}`);
        popups.push(popup);
      }

      const category = document.querySelectorAll(".gifts__tab-header-item"),
        categoryParent = document.querySelector(".gifts__tab-header"),
        categoryContent = document.querySelector(".gifts__tab-content");

      let cardForCategoryAll = [],
        cardForCategoryWork = [],
        cardForCategoryHealth = [],
        cardForCategoryHarmony = [];

      cards.forEach((item) => {
        if (item.classList.contains("card-gift--work")) {
          cardForCategoryWork.push(item);
        }
      });

      cards.forEach((item) => {
        if (item.classList.contains("card-gift--health")) {
          cardForCategoryHealth.push(item);
        }
      });

      cards.forEach((item) => {
        if (item.classList.contains("card-gift--harmony")) {
          cardForCategoryHarmony.push(item);
        }
      });

      function showCategoryContent(i = 0) {
        category[i].classList.add("gifts__tab-header-item--active");

        if (i == 0) {
          cardForCategoryAll = mixArray(cards);

          cardForCategoryAll.forEach((item) => {
            categoryContent.append(item);
          });

          openPopup(cardForCategoryAll, popups);
        } else if (i == 1) {
          categoryContent.innerHTML = ``;
          cardForCategoryWork.forEach((item) => {
            categoryContent.append(item);
          });
        } else if (i == 2) {
          categoryContent.innerHTML = ``;
          cardForCategoryHealth.forEach((item) => {
            categoryContent.append(item);
          });
        } else if (i == 3) {
          categoryContent.innerHTML = ``;
          cardForCategoryHarmony.forEach((item) => {
            categoryContent.append(item);
          });
        }
      }
      showCategoryContent();

      categoryParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("gifts__tab-header-item")) {
          category.forEach((item, i) => {
            item.classList.remove("gifts__tab-header-item--active");
            if (target == item) {
              showCategoryContent(i);
            }
          });
        }
      });
    });
}

import { mixArray } from "./mix-array.js";
import { createCard } from "./cards.js";
import { createPopup, openPopup } from "./popup.js";

const cards = [];
const popups = [];

export function addCardsToPage(url, containerSelector, numberOfCards) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      for (let i = 0; i < jsonData.length; i++) {
        let card = createCard(jsonData[i]);
        card.setAttribute("data-card", `gift-${i + 1}`);
        cards.push(card);
      }

      const container = document.querySelector(containerSelector);
      let cardsToShow = mixArray(cards).slice(0, numberOfCards);

      cardsToShow.forEach((i) => {
        container.append(i);
      });

      //Popup
      for (let i = 0; i < jsonData.length; i++) {
        let popup = createPopup(jsonData[i]);
        popup.setAttribute("data-popup", `gift-${i + 1}`);
        popups.push(popup);
      }

      openPopup(cardsToShow, popups);
    });
}

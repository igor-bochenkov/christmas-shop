export function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card-gift", "hover-primary");

  if (data.category == "For Work") {
    card.classList.add("card-gift--work");
  }
  if (data.category == "For Health") {
    card.classList.add("card-gift--health");
  }
  if (data.category == "For Harmony") {
    card.classList.add("card-gift--harmony");
  }

  card.innerHTML = `
            <div class="card-gift__image"></div>
            <div class="card-gift__description">
              <h4 class="card-gift__tag">${data.category}</h4>
              <h3 class="card-gift__text">${data.name}</h3>
            </div>
        `;
  return card;
}

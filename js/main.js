import { burger } from "./modules/burger.js";
import { timer } from "./modules/timer.js";
import { slider } from "./modules/slider.js";

import { addCardsToPage } from "./modules/random-cards-to-best-gifts.js";

burger();
timer("2026-01-01");
slider();

addCardsToPage("./js/modules/gifts.json", ".best-gifts__cards", 4);

window.addEventListener("DOMContentLoaded", () => {
	//* ========< Burger >===================================================
	const burgerIcon = document.querySelector('.menu-header__burger'),
		menuHeader = document.querySelector('.menu-header__body'),
		menuWrapper = document.querySelector('.menu-header__wrapper'),
		menuHeaderLinks = document.querySelectorAll('.menu-header__link');

	function toggleBurgerClass() {
		burgerIcon.classList.toggle('active');
		menuHeader.classList.toggle('active');
		menuWrapper.classList.toggle('active');
		document.body.classList.toggle('lock');
	}
	function hideBurger() {
		burgerIcon.classList.remove('active');
		menuHeader.classList.remove('active');
		menuWrapper.classList.remove('active');
		document.body.classList.remove('lock');
	}

	burgerIcon.addEventListener('click', function () {
		toggleBurgerClass();
	});

	menuHeaderLinks.forEach(link => {
		link.addEventListener('click', hideBurger);
	})

	//* ========< Создание массива карточек из JSON >========================
	const gifts = [
		{
			"name": "Bug Magnet",
			"description": "Able to find bugs in code like they were placed there on purpose.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+200",
				"dream": "+400"
			}
		},

		{
			"name": "Console.log Guru",
			"description": "Uses console.log like a crystal ball to find any issue.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+200",
				"dream": "+400"
			}
		},

		{
			"name": "Shortcut Cheater",
			"description": "Knows every keyboard shortcut like they were born with them.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+400",
				"dream": "+200"
			}
		},

		{
			"name": "Merge Master",
			"description": "Merges branches in Git without conflicts, like a wizard during an exam.",
			"category": "For Work",
			"superpowers": {
				"live": "+200",
				"create": "+500",
				"love": "+200",
				"dream": "+300"
			}
		},

		{
			"name": "Async Tamer",
			"description": "Handles asynchronous code and promises like well-trained pets.",
			"category": "For Work",
			"superpowers": {
				"live": "+100",
				"create": "+400",
				"love": "+200",
				"dream": "+300"
			}
		},

		{
			"name": "CSS Tamer",
			"description": "Can make Flexbox and Grid work together like they were always best friends.",
			"category": "For Work",
			"superpowers": {
				"live": "+200",
				"create": "+500",
				"love": "+200",
				"dream": "+300"
			}
		},

		{
			"name": "Time Hacker",
			"description": "Writes code at the last moment but always meets the deadline.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+500",
				"dream": "+200"
			}
		},

		{
			"name": "Layout Master",
			"description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+300",
				"love": "+200",
				"dream": "+200"
			}
		},

		{
			"name": "Documentation Whisperer",
			"description": "Understands cryptic documentation as if they wrote it themselves.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+200",
				"dream": "+100"
			}
		},

		{
			"name": "Feedback Master",
			"description": "Accepts client revisions with the Zen calm of Buddha.",
			"category": "For Work",
			"superpowers": {
				"live": "+300",
				"create": "+500",
				"love": "+300",
				"dream": "+400"
			}
		},

		{
			"name": "Code Minimalist",
			"description": "Writes code so concise that one line does more than a whole file.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+500",
				"dream": "+200"
			}
		},

		{
			"name": "Pixel-Perfect Magician",
			"description": "Aligns elements to the last pixel, even when the design looks abstract.",
			"category": "For Work",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+400",
				"dream": "+400"
			}
		},

		{
			"name": "Posture Levitation",
			"description": "Can sit for hours, but maintains perfect posture like a ballerina.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+500",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Step Master",
			"description": "Gets 10,000 steps a day even while sitting at the computer.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+300",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Snack Resister",
			"description": "Ignoring desktop snacks like a strict dietician.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+100",
				"love": "+200",
				"dream": "+400"
			}
		},

		{
			"name": "Hydration Bot",
			"description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
			"category": "For Health",
			"superpowers": {
				"live": "+500",
				"create": "+300",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Sleep Overlord",
			"description": "Sleeps 6 hours but feels like they had 10.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+500",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Break Guru",
			"description": "Takes a stretch break every hour without forgetting, no matter how focused.",
			"category": "For Health",
			"superpowers": {
				"live": "+300",
				"create": "+300",
				"love": "+300",
				"dream": "+400"
			}
		},

		{
			"name": "Eye Protector",
			"description": "Can work all day at the monitor without feeling like their eyes are on fire.",
			"category": "For Health",
			"superpowers": {
				"live": "+100",
				"create": "+300",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Stress Dodger",
			"description": "Masters meditation right at the keyboard.",
			"category": "For Health",
			"superpowers": {
				"live": "+100",
				"create": "+400",
				"love": "+200",
				"dream": "+400"
			}
		},

		{
			"name": "Yoga Coder",
			"description": "Easily switches from coding to yoga and back.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+400",
				"love": "+400",
				"dream": "+400"
			}
		},

		{
			"name": "Healthy Snacker",
			"description": "Always picks fruit, even when chocolate is within arm’s reach.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+300",
				"love": "+200",
				"dream": "+400"
			}
		},

		{
			"name": "Chair Exerciser",
			"description": "Manages to work out without leaving the chair.",
			"category": "For Health",
			"superpowers": {
				"live": "+500",
				"create": "+500",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Caffeine Filter",
			"description": "Drinks coffee at night and still falls asleep with no problem.",
			"category": "For Health",
			"superpowers": {
				"live": "+400",
				"create": "+300",
				"love": "+500",
				"dream": "+200"
			}
		},

		{
			"name": "Joy Charger",
			"description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+200",
				"create": "+200",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Error Laugher",
			"description": "Laughs at code errors like they’re jokes instead of getting angry.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Bug Acceptance Guru",
			"description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Spontaneous Coding Philosopher",
			"description": "Philosophically accepts any client suggestion after a long refactor.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+500",
				"dream": "+400"
			}
		},

		{
			"name": "Deadline Sage",
			"description": "Remains zen even when the deadline is close and the project manager is stressed.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+200",
				"create": "+200",
				"love": "+300",
				"dream": "+500"
			}
		},

		{
			"name": "Inspiration Maestro",
			"description": "Finds inspiration on an empty screen as if masterpieces are already there.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+400",
				"dream": "+100"
			}
		},

		{
			"name": "Peace Keeper",
			"description": "Maintains inner calm even in moments of intense crisis.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+200",
				"create": "+200",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Empathy Guru",
			"description": "Feels the team’s mood and can lift everyone’s spirits.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+500",
				"create": "+200",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Laughter Generator",
			"description": "Can lighten any tense situation with a joke that even bugs laugh at.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+200",
				"dream": "+500"
			}
		},

		{
			"name": "Pause Master",
			"description": "Knows when to just step back from the keyboard and breathe.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+100",
				"dream": "+100"
			}
		},

		{
			"name": "Coder Healer",
			"description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+500",
				"dream": "+500"
			}
		},

		{
			"name": "Music Code Curator",
			"description": "Creates work playlists so good, even deadlines follow the rhythm.",
			"category": "For Harmony",
			"superpowers": {
				"live": "+300",
				"create": "+200",
				"love": "+300",
				"dream": "+200"
			}
		}
	]

	//Функция создания карточки gift
	function createCardGift(data) {
		const card = document.createElement('div');
		card.classList.add('card-gift', 'hover-primary');

		if (data.category == "For Work") {
			card.classList.add('card-gift--work');
		}
		if (data.category == "For Health") {
			card.classList.add('card-gift--health');
		}
		if (data.category == "For Harmony") {
			card.classList.add('card-gift--harmony');
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

	//Создание массива карточек
	const cardsGifts = [];

	for (let i = 0; i < gifts.length; i++) {
		let card = createCardGift(gifts[i]);
		card.setAttribute('data-card', `gift-${i + 1}`);
		cardsGifts.push(card);
	}

	//?Функция перемешивания массива (алгоритм Фишера-Йетса)
	function mixArray(array) {
		let m = array.length, t, i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}

	//? ==========================================================================================================
	//? =========================<MAIN-PAGE>======================================================================
	//? ==========================================================================================================

	if (document.body.classList.contains('main-page')) {

		//* ========< Случайный набор карточек в 'best gifts' start >=================
		const cardsContainer = document.querySelector('.best-gifts__cards'),
			numberOfCards = 4;

		let cardsToShow = mixArray(cardsGifts).slice(0, numberOfCards);

		cardsToShow.forEach(i => {
			cardsContainer.append(i);
		});

		openPopup(cardsToShow);
		//* ========< Случайный набор карточек в 'best gifts' end >====================


		//* ========< TIMER start >====================================================

		const endDate = '2025-01-01';

		//Функция определения разницы между датами
		function getTimeDifference(deadline) {
			const timeRemainder = Date.parse(deadline) - Date.parse(new Date());

			let days, hours, minutes, seconds;

			if (timeRemainder <= 0) {
				days = 0;
				hours = 0;
				minutes = 0;
				seconds = 0;
			} else {
				days = Math.floor(timeRemainder / (1000 * 60 * 60 * 24)),
					hours = Math.floor((timeRemainder / (1000 * 60 * 60) % 24)),
					minutes = Math.floor((timeRemainder / 1000 / 60) % 60),
					seconds = Math.floor((timeRemainder / 1000) % 60);
			}

			return {
				'timeRemainder': timeRemainder,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds,
			};
		}

		//Функция установки таймера на странице
		function setTimer(deadline) {
			const timer = document.querySelector('.block-timer__body'),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				updateTime = setInterval(updateTimer, 1000);

			updateTimer();

			//Функция обновления таймера
			function updateTimer() {
				const timerData = getTimeDifference(deadline);

				days.innerHTML = timerData.days;
				hours.innerHTML = timerData.hours;
				minutes.innerHTML = timerData.minutes;
				seconds.innerHTML = timerData.seconds;

				if (timerData.timeRemainder <= 0) {
					clearInterval(updateTime);
				}
			}
		}

		// Запуск таймера
		setTimer(endDate);
		//* ========< TIMER end >======================================================

		//* ========< SLIDER start >========================================================

		const btnPrev = document.querySelector('.control-slider__arrow--prev'),
			btnNext = document.querySelector('.control-slider__arrow--next'),
			slider = document.querySelector('.slide'),
			sliderWrapper = document.querySelector('.item-slider__row'),
			sliderSection = document.querySelectorAll('.slide__section');

		//Основные вычисления
		const wrapperWidth = sliderWrapper.offsetWidth - 60;

		let sliderWidth = 0;
		sliderSection.forEach(slide => {
			sliderWidth += slide.offsetWidth;
		});

		function sliderShiftSize(numberOfClicks) {
			return (sliderWidth - wrapperWidth) / numberOfClicks;
		}

		// -----------------------------------------------------------------------
		let shiftSize = sliderShiftSize(3);
		window.addEventListener('resize', () => {
			slider.style.transform = `translateX(-${sliderPosition = 0}px)`;
			btnPrev.classList.add('disabled');
		});

		let sliderPosition = 0;
		let numberClicks = 3;

		btnNext.addEventListener('click', () => {
			sliderPosition += shiftSize;
			slider.style.transform = `translateX(-${sliderPosition}px)`;

			if (sliderPosition > 0) {
				btnPrev.classList.remove('disabled');
			}

			if (sliderPosition >= shiftSize * numberClicks) {
				btnNext.classList.add('disabled');
			}
		});

		btnPrev.addEventListener('click', () => {
			sliderPosition -= shiftSize;
			slider.style.transform = `translateX(-${sliderPosition}px)`;

			if (sliderPosition < 1) {
				btnPrev.classList.add('disabled');
			}

			if (sliderPosition < shiftSize * numberClicks) {
				btnNext.classList.remove('disabled');
			}
		});

		//? =================================================================================================
		if (window.innerWidth < 769) {
			shiftSize = sliderShiftSize(6);
			numberClicks = 6;

			window.addEventListener('resize', () => {
				slider.style.transform = `translateX(-${sliderPosition = 0}px)`;
				btnPrev.classList.add('disabled');
			});

			let sliderPosition = 0;

			btnNext.addEventListener('click', () => {
				sliderPosition += shiftSize;
				slider.style.transform = `translateX(-${sliderPosition}px)`;

				if (sliderPosition > 0) {
					btnPrev.classList.remove('disabled');
				}

				if (sliderPosition >= shiftSize * numberClicks) {
					btnNext.classList.add('disabled');
				}
			});

			btnPrev.addEventListener('click', () => {
				sliderPosition -= shiftSize;
				slider.style.transform = `translateX(-${sliderPosition}px)`;

				if (sliderPosition < 1) {
					btnPrev.classList.add('disabled');
				}

				if (sliderPosition <= shiftSize * numberClicks) {
					btnNext.classList.remove('disabled');
				}
			});
		}
		//* ========< SLIDER end >==========================================================
	}

	//? ==========================================================================================================
	//? =========================<GIFTS-PAGE>=====================================================================
	//? ==========================================================================================================
	if (document.body.classList.contains('gifts-page')) {

		//* ========< btnTop start >=====================================================
		const btnTop = document.querySelector('.arrow-top'),
			mediaForBtnTop = window.matchMedia('(max-width: 768px)');

		function showBtnTop() {
			btnTop.classList.remove('arrow-top--hide');
		}

		function hideBtnTop() {
			btnTop.classList.add('arrow-top--hide');
		}
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;

			if (mediaForBtnTop.matches && scrollY > 300) {
				showBtnTop();
			} else {
				hideBtnTop();
			}
		});

		btnTop.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
		//* ========< btnTop end >=======================================================

		//* ========< Category switch start >============================================
		const category = document.querySelectorAll('.gifts__tab-header-item'),
			categoryParent = document.querySelector('.gifts__tab-header'),
			categoryContent = document.querySelector('.gifts__tab-content');

		let cardForCategoryAll = [],
			cardForCategoryWork = [],
			cardForCategoryHealth = [],
			cardForCategoryHarmony = [];

		cardsGifts.forEach(item => {
			if (item.classList.contains('card-gift--work')) {
				cardForCategoryWork.push(item);
			}
		});

		cardsGifts.forEach(item => {
			if (item.classList.contains('card-gift--health')) {
				cardForCategoryHealth.push(item);
			}
		});

		cardsGifts.forEach(item => {
			if (item.classList.contains('card-gift--harmony')) {
				cardForCategoryHarmony.push(item);
			}
		});

		function showCategoryContent(i = 0) {
			category[i].classList.add('gifts__tab-header-item--active');

			if (i == 0) {
				cardForCategoryAll = mixArray(cardsGifts);

				cardForCategoryAll.forEach(item => {
					categoryContent.append(item);
				});

				openPopup(cardForCategoryAll);

			} else if (i == 1) {
				categoryContent.innerHTML = ``;
				cardForCategoryWork.forEach(item => {
					categoryContent.append(item);
				});

			} else if (i == 2) {
				categoryContent.innerHTML = ``;
				cardForCategoryHealth.forEach(item => {
					categoryContent.append(item);
				});
			} else if (i == 3) {
				categoryContent.innerHTML = ``;
				cardForCategoryHarmony.forEach(item => {
					categoryContent.append(item);
				});
			}
		}
		showCategoryContent();

		categoryParent.addEventListener('click', (event) => {
			const target = event.target;

			if (target && target.classList.contains('gifts__tab-header-item')) {
				category.forEach((item, i) => {
					item.classList.remove('gifts__tab-header-item--active');
					if (target == item) {
						showCategoryContent(i);
					}
				});
			}
		});
		//* ========< Category switch end >==============================================
	}

	//* ========< POPUP start >=========================================================
	function createPopup(data) {
		const element = document.createElement('div');
		element.classList.add('popup');

		if (data.category == "For Work") {
			element.classList.add('popup--work');
		}
		if (data.category == "For Health") {
			element.classList.add('popup--health');
		}
		if (data.category == "For Harmony") {
			element.classList.add('popup--harmony');
		}

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
								<div class="superpower__snowflakes">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
								</div>
							</div>
						</div>
						<div class="superpower__item">
							<p class="superpower__name">Create</p>
							<div class="superpower__rating">
								<p class="superpower__grade">${data.superpowers.create}</p>
								<div class="superpower__snowflakes">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
								</div>
							</div>
						</div>
						<div class="superpower__item">
							<p class="superpower__name">Love</p>
							<div class="superpower__rating">
								<p class="superpower__grade">${data.superpowers.love}</p>
								<div class="superpower__snowflakes">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
								</div>
							</div>
						</div>
						<div class="superpower__item">
							<p class="superpower__name">Dream</p>
							<div class="superpower__rating">
								<p class="superpower__grade">${data.superpowers.dream}</p>
								<div class="superpower__snowflakes">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
									<img src="img/icons/snowflake.svg" alt="snowflake" class="snowflake snowflake--active">
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

	const popups = new Array();

	for (let i = 0; i < gifts.length; i++) {
		let popup = createPopup(gifts[i]);
		popup.setAttribute('data-popup', `gift-${i + 1}`);
		popups.push(popup);
	}

	//Открытие попапа
	function openPopup(items) {
		items.forEach(card => {
			card.addEventListener('click', () => {
				let cardName = card.getAttribute('data-card');

				popups.forEach(popup => {
					let popupName = popup.getAttribute('data-popup');

					if (cardName == popupName) {
						document.querySelector('.wrapper').append(popup);
						popup.classList.add('popup-show');
						document.body.classList.toggle('lock');
					}
				});

				// Закрытие попапа
				const popupClose = document.querySelector('.popup__close'),
					popup = document.querySelector('.popup'),
					popupBody = document.querySelector('.popup__body');

				function closePopup() {
					if (document.querySelector('.popup')) {
						document.querySelector('.popup').remove();
						document.body.classList.toggle('lock');
					}
				}

				popupClose.addEventListener('click', () => {
					closePopup();
				});

				//Закрытие по клику на подложке
				popup.addEventListener('click', (event) => {
					if (event.target === popupBody) {
						closePopup();
					}
				});
				//Закрытие по Esc
				document.addEventListener('keydown', (event) => {
					if (event.code === 'Escape' && popup.classList.contains('popup-show')) {
						closePopup();
					}
				});
			});
		});
	}
	//* ========< POPUP end >===========================================================
});
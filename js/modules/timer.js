export function timer(deadline) {
  const endDate = deadline;

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
      (days = Math.floor(timeRemainder / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((timeRemainder / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((timeRemainder / 1000 / 60) % 60)),
        (seconds = Math.floor((timeRemainder / 1000) % 60));
    }

    return {
      timeRemainder: timeRemainder,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  //Функция установки таймера на странице
  function setTimer(deadline) {
    const timer = document.querySelector("[data-js-timer]"),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
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
}

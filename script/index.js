document.addEventListener("DOMContentLoaded", function () {
  const begStroka = document.querySelector(".beg_stroka");
  begStroka.innerHTML += begStroka.innerHTML; // Дублируем содержимое для зацикливания

  const speed = 2; // Скорость анимации
  let xPos = 0;

  function move() {
    xPos -= speed;
    begStroka.style.transform = "translateX(" + xPos + "px)";
    if (Math.abs(xPos) >= begStroka.offsetWidth / 2) {
      xPos = 0;
    }
    requestAnimationFrame(move);
  }

  move();
});
document.addEventListener("DOMContentLoaded", function () {
  const begStroka = document.querySelector(".beg_stroka1");
  begStroka.innerHTML += begStroka.innerHTML; // Дублируем содержимое для зацикливания

  const speed = 1.5; // Скорость анимации
  let xPos = -begStroka.scrollWidth / 2; // Начинаем с отрицательного значения

  function move() {
    xPos += speed; // Двигаем вправо
    begStroka.style.transform = "translateX(" + xPos + "px)";

    // Когда строка полностью сдвинулась вправо, сбрасываем позицию
    if (xPos >= 0) {
      xPos = -begStroka.scrollWidth / 2;
    }

    requestAnimationFrame(move);
  }

  move();
});
function equalizeHeights(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;

  // Сбрасываем высоту перед вычислением
  elements.forEach((el) => (el.style.height = "auto"));

  // Находим максимальную высоту
  elements.forEach((el) => {
    const height = el.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Устанавливаем всем одинаковую высоту
  elements.forEach((el) => (el.style.height = maxHeight + "px"));
}

// Вызываем функцию после загрузки страницы
window.addEventListener("load", () => {
  equalizeHeights(".categ");
  equalizeHeights(".topcateg");
});

// Также вызываем при изменении размера окна
window.addEventListener("resize", () => {
  equalizeHeights(".categ");
  equalizeHeights(".topcateg");
});
function updateCountdown() {
  const targetDate = new Date("2025-06-07T00:00:00"); // 7 июня 2025
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    document.querySelector(".textcube h4").innerHTML =
      "00<span>д</span> 00<span>ч</span> 00<span>мин</span> 00<span>с</span>";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.querySelector(".textcube h4").innerHTML = `
    ${days}<span>д</span> ${hours}<span>ч</span> ${minutes}<span>мин</span> ${seconds}<span>с</span>
  `;
  document.querySelector(".gradi h6").innerHTML = `
    ${days}<span>д</span> ${hours}<span>ч</span> ${minutes}<span>мин</span> ${seconds}<span>с</span>
  `;
}

// Обновляем таймер каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("rangeSlider");
  const output = document.getElementById("submissionCount");
  const finalDiscount = document.getElementById("finalDiscount");

  // Создаём трек для градиента
  const track = document.createElement("div");
  track.className = "slider-track";
  slider.parentNode.insertBefore(track, slider);

  function updateSlider() {
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const val = parseInt(slider.value);

    // Обновляем позицию числа под ползунком
    const percent = (val - min) / (max - min);
    const trackWidth = slider.offsetWidth - 16;
    output.style.left = percent * trackWidth + 10 + "px";

    // Обновляем число
    output.textContent = val;

    // Обновляем градиент
    track.style.setProperty("--percent", percent * 100 + "%");

    // Считаем скидку (500 ₽ за каждую работу)
    const discount = val * 500;
    finalDiscount.textContent = discount.toLocaleString() + " ₽";
  }

  slider.addEventListener("input", updateSlider);
  updateSlider();
});

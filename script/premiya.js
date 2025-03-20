document.addEventListener("DOMContentLoaded", function () {
  const formContainers = document.querySelectorAll(".form-container");
  const nextButtons = document.querySelectorAll(".next");
  const backButtons = document.querySelectorAll(".backButton");

  let currentStep = 0;

  // Функция для отображения нужного контейнера
  function showStep(step) {
    formContainers.forEach((container, index) => {
      container.style.display = index === step ? "block" : "none";
    });
  }

  // Обработчик кнопки "Далее"
  nextButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (currentStep < formContainers.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  // Обработчик кнопки "Назад"
  backButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  // Изначально показываем только первый контейнер
  showStep(currentStep);
});

function equalizePacketsHeight() {
  let packets = document.querySelectorAll(".packet");
  let maxHeight = 0;

  // Сбрасываем высоту, чтобы вычислить максимальную
  packets.forEach((packet) => {
    packet.style.height = "auto";
    maxHeight = Math.max(maxHeight, packet.offsetHeight);
  });

  // Устанавливаем максимальную высоту
  packets.forEach((packet) => {
    packet.style.height = maxHeight + "px";
  });
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener("load", equalizePacketsHeight);
window.addEventListener("resize", equalizePacketsHeight);

function positionPriobrButtons() {
  let packets = document.querySelectorAll(".packet");

  packets.forEach((packet) => {
    let priobrButton = packet.querySelector(".priobr");

    if (priobrButton) {
      priobrButton.style.position = "absolute";
      priobrButton.style.left = "25px"; // Отступ от левого края
      priobrButton.style.bottom = "32px"; // Отступ от нижнего края

      // Проверяем, чтобы от контента сверху был минимум 30px
      let packetHeight = packet.offsetHeight;
      let buttonTop =
        priobrButton.getBoundingClientRect().top -
        packet.getBoundingClientRect().top;

      if (buttonTop < 30) {
        priobrButton.style.marginTop = "30px";
      }
    }
  });
}

// Ждём загрузку страницы и меняем при изменении размеров
window.addEventListener("load", positionPriobrButtons);
window.addEventListener("resize", positionPriobrButtons);

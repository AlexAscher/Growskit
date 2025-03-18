document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("formContainer");
  const addFormBtn = document.querySelector(".add-form-btn");

  addFormBtn.addEventListener("click", function () {
    const newForm = document.createElement("div");
    newForm.classList.add("big-forma");
    newForm.innerHTML = `
        <div class="row">
          <div class="topform marginzero">
            <h2 style="margin-bottom: 0;">Информация об участнике</h2>
            <img src="./img/arrowForSelect.svg" alt="" class="rotated">
          </div>
          <div class="form-content hidden">
            <div class="row">
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-6">
                    <input type="text" placeholder="Фамилия Имя Отчество" class="name-input" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Город страна" />
                  </div>
                  <div class="col-lg-6">
                    <div class="row align-items-center" style="--bs-gutter-x: 8px">
                      <div class="col-lg-11">
                        <select>
                          <option>Категория участника</option>
                          <option>Индивидуальный участник</option>
                          <option>Руководитель команды</option>
                          <option>Юниор</option>
                          <option>Профессионал</option>
                        </select>
                      </div>
                      <div class="col-lg-1">
                        <img src="./img/question.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="ФИО тренера (если есть)" />
                  </div>
                  <div class="col-lg-6" style="margin-top: 30px">
                    <input type="text" placeholder="Телефон" />
                  </div>
                  <div class="col-lg-6" style="margin-top: 30px">
                    <input type="email" placeholder="Почта" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Ссылка на профиль ВК" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Ссылка на профиль Telegram" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Почтовый адрес" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Адрес ближайшего СДЭК" />
                  </div>
                  <div class="col-12">
                    <textarea placeholder="Вкратце расскажите о своих достижениях и регалиях"></textarea>
                  </div>
                  <div class="col-lg-6 kolvo">
                    <h3>Количество подаваемых работ</h3>
                  </div>
                  <div class="col-lg-6"></div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Количество работ" class="raboti" />
                  </div>
                  <div class="col-lg-6">
                    <div class="nomin">
                      <p>1 номинация</p>
                      <h5>6000 ₽</h5>
                    </div>
                    <div class="lin"></div>
                    <div class="nomin">
                      <p>каждая следующая номинация</p>
                      <h5>5500 ₽</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 rightside">
                <div class="file-upload">
                  <h4>Личное фото</h4>
                  <input type="file" hidden />
                  <label class="upload-btn">Выбрать</label>
                  <h5>или перетащите файлы сюда</h5>
                </div>
                <ul>
                  <li>Вокруг вашего силуэта должен быть воздух</li>
                  <li>Задний фон не имеет значения</li>
                  <li>Ваш взгляд направлен в камеру</li>
                  <li>Фотография должна быть в хорошем качестве</li>
                </ul>
                <p>
                  Ваши личные фото будут использоваться для оформления визитки
                  участника в соц.сетях чемпионата и на сайте
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

    formContainer.appendChild(newForm);
    attachEventListeners(newForm);
  });

  function attachEventListeners(form) {
    const toggleBtn = form.querySelector(".topform img");
    const formContent = form.querySelector(".form-content");
    const nameInput = form.querySelector(".name-input");
    const title = form.querySelector(".topform h2");

    toggleBtn.addEventListener("click", function () {
      formContent.classList.toggle("hidden");
      toggleBtn.classList.toggle("rotated");
    });

    nameInput.addEventListener("input", function () {
      title.textContent = nameInput.value.trim() || "Информация об участнике";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".topform img").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      const bigForma = this.closest(".big-forma");
      const topform = bigForma.querySelector(".topform ");
      const formContent = bigForma.querySelector(".form-content"); // Берем только контент формы, без заголовка

      if (formContent) {
        formContent.classList.toggle("hidden"); // Скрываем/показываем форму
        this.classList.toggle("rotated"); // Переворачиваем стрелку
        topform.classList.toggle("marginzero");
      }
    });
  });

  // Меняем заголовок на ФИО
  document
    .querySelectorAll('input[placeholder="Фамилия Имя Отчество"]')
    .forEach((input) => {
      input.addEventListener("input", function () {
        const bigForma = this.closest(".big-forma");
        const topform = bigForma.querySelector(".topform h2");

        topform.textContent = this.value.trim()
          ? `${this.value}`
          : "Информация об участнике";
      });
    });
});

const dropArea = document.querySelector(".file-upload");
const fileInput = document.getElementById("fileInput");

// Обработка перетаскивания
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.style.borderColor = "#df70bc";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = "rgba(255, 255, 255, 0.3)";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dropArea.style.borderColor = "rgba(255, 255, 255, 0.3)";

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files; // Присваиваем файлы инпуту
    console.log("Файл загружен:", files[0].name);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="participant"]');
  const individualForm = document.getElementById("individual-form");
  const teamLeaderForm = document.getElementById("team-leader-form");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "individual") {
        individualForm.classList.remove("hidden");
        teamLeaderForm.classList.add("hidden");
      } else {
        individualForm.classList.add("hidden");
        teamLeaderForm.classList.remove("hidden");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rabotiInput = document.querySelector(".raboti");
  const totalPriceElement = document.querySelector(".texta h5");
  const paymentButton = document.querySelector(".nizhyaya-button button");

  function updateTotalPrice() {
    let count = parseInt(rabotiInput.value, 10);

    if (isNaN(count) || count < 1) {
      totalPriceElement.textContent = "0 ₽";
      paymentButton.disabled = true;
      paymentButton.classList.add("disabled");
      return;
    }

    let totalPrice = 6000 + (count - 1) * 5500;
    totalPriceElement.textContent = totalPrice.toLocaleString("ru-RU") + " ₽";
    paymentButton.disabled = false;
    paymentButton.classList.remove("disabled");
  }

  rabotiInput.addEventListener("input", function (event) {
    // Разрешаем ввод только цифр
    this.value = this.value.replace(/[^0-9]/g, "");

    // Убираем ведущий ноль
    if (this.value.startsWith("0")) {
      this.value = this.value.replace(/^0+/, "");
    }

    updateTotalPrice();
  });

  updateTotalPrice();
});

function calculateTotal() {
  let totalPrice = 0;
  let discount = 0;
  let participants = document.querySelectorAll(".form-content");

  // Track how many participants have a valid work count
  let validParticipantCount = 0;

  participants.forEach((participant) => {
    let workInput = participant.querySelector(".raboti");
    let workCount = parseInt(workInput?.value) || 0;

    // Only count participants who have a valid work count
    if (workCount > 0) {
      let participantPrice = 6000 + (workCount - 1) * 5500;
      totalPrice += participantPrice;
      validParticipantCount++;
    }
  });

  // Discount is based on valid participants only
  discount = validParticipantCount * 1000;
  let finalPrice = totalPrice - discount;

  // Update the prices in the DOM
  document.querySelector(".prices h4").textContent =
    totalPrice > 0 ? totalPrice.toLocaleString() + " ₽" : "0 ₽";
  document.querySelector(".prices p").textContent =
    finalPrice > 0 ? finalPrice.toLocaleString() + " ₽" : "0 ₽";

  // Update the span with the number of valid participants for discount
  document.querySelector(".sale span").textContent = validParticipantCount;
}

document.addEventListener("input", function (event) {
  if (event.target.classList.contains("raboti")) {
    calculateTotal();
  }
});

// Prevent entering a number starting with 0 and only allow digits
document.addEventListener("input", function (event) {
  if (event.target.classList.contains("raboti")) {
    let value = event.target.value;
    // Remove leading zeros
    if (value && value[0] === "0") {
      event.target.value = value.replace(/^0+/, "");
    }

    // Allow only digits
    if (!/^\d+$/.test(event.target.value) && event.target.value !== "") {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }

    calculateTotal();
  }
});

document.addEventListener("DOMContentLoaded", calculateTotal);

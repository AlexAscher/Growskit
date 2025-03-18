document
  .getElementById("formContainer")
  .addEventListener("click", function (event) {
    const topForm = event.target.closest(".topform");

    // Если клик был по .topform или img внутри него
    if (topForm) {
      toggleFormContent(topForm);
    }
  });

function addForm() {
  const formContainer = document.getElementById("formContainer");

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
                                <input type="text" placeholder="Фамилия Имя Отчество" />
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
                            <input type="file" id="fileInput" hidden />
                            <label for="fileInput" class="upload-btn">Выбрать</label>
                            <h5>или перетащите файлы сюда</h5>
                        </div>
                        <ul>
                            <li>Вокруг вашего силуэта должен быть воздух</li>
                            <li>Задний фон не имеет значения</li>
                            <li>Ваш взгляд направлен в камеру</li>
                            <li>Фотография должна быть в хорошем качестве</li>
                        </ul>
                        <p>Ваши личные фото будут использоваться для оформления визитки участника в соц.сетях чемпионата и на сайте</p>
                    </div>
                </div>
            </div>
        </div>
    `;

  formContainer.appendChild(newForm);
}

function toggleFormContent(element) {
  const content = element.nextElementSibling;
  content.classList.toggle("hidden");

  // Найти изображение стрелки внутри `.topform`
  const arrow = element.querySelector("img.rotated");
  if (arrow) {
    arrow.classList.toggle("rotated-180");
  }
}

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

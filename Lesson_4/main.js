// ! ======= ToDoList ==========
// CRUD

// ! CREATE
let btn = document.querySelector(".btn");
let inp = document.querySelector(".task-input");
let list = document.querySelector(".task-list");

btn.addEventListener("click", () => {
  if (!inp.value.trim()) {
    alert("Заполните поле!");
  }
  let obj = { task: inp.value };
  setItemToStorage(obj);
  createElement();
  inp.value = "";
});

function setItemToStorage(task) {
  let data = JSON.parse(localStorage.getItem("task-data")) || [];
  data.push(task);
  localStorage.setItem("task-data", JSON.stringify(data));
}

// ! ======== READ =========
function createElement() {
  if (!localStorage.getItem("task-data")) {
    localStorage.setItem("task-data", "[]");
  }
  let newData = JSON.parse(localStorage.getItem("task-data"));
  list.innerHTML =
    "--------------------------------------------------------------------";
  newData.forEach((item) => {
    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnEdit.innerText = "Edit";
    // ? события
    btnDelete.addEventListener("click", () => {
      deleteElement(item);
    });
    btnEdit.addEventListener("click", () => {
      editElement(item);
    });
    li.innerText = item.task;
    li.appendChild(btnDelete);
    li.append(btnEdit);
    list.appendChild(li);
  });
}

createElement();

// ! DELETE

function deleteElement(index) {
  let data = JSON.parse(localStorage.getItem("task-data"));
  data.splice(index, 1);
  localStorage.setItem("task-data", JSON.stringify(data));
  createElement();
}

let mainModal = document.querySelector(".main-modal");
let inpEdit = document.querySelector(".inp-edit");
let btnClose = document.querySelector(".btn-close");

function editElement(index) {
  mainModal.style.display = "block";
  let data = JSON.parse(localStorage.getItem("task-data"));
  inpEdit.setAttribute("id", index);
  inpEdit.value = data[index].task;
}
let btnSave = document.querySelector(".btn-save");

btnSave.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("task-data"));
  let index = inpEdit.id;
  if (!inpEdit.value.trim()) {
    alert("Заполните поле!");
    return;
  }
  let newTask = {
    task: inpEdit.value,
  };
  data.splice(index, 1, newTask);
  localStorage.setItem("task-data", JSON.stringify(data));
  mainModal.style.display = "none";
  createElement();
});

btnClose.addEventListener("click", () => {
  mainModal.style.display = "none";
});

// ===============================================================================================================
//!-----------------------------Команды GIT------------------------------------
//! git init
//1 Создается (инициализируется) локальное хранилище
//! git_add._
//2 Выбираются файл или все файлы, которые нужно отправить на репозиторий (GitHub)
//! git commit -m "first commit"
//3 git отслеживает и отмечает для себя произведенные изменения в проекте
//! git branch -M - название новой_ветки
//4 Указывает на принудительное переименование ветки, даже если существует уже ветка с таким именем
//! git remote add origin https://github.com/ArtemVasilevich/Git.git
//5 Используется для добавления репозитория с названием origin по указанному url
//! git push -u origin main
//6

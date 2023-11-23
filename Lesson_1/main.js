//! ------------- DOM -----------------
//? Document Object Model - в JS представляет собой обьектную модель документа HTML. Он создается браузером при загрузке веб-страницы и представляет структуру документа в виде дерева обьектов, где каждый узел представляет часть страницы(такую как элементы HTML, атрибуты, текст на странице и т.д.)
//! ----------- методы getElement/s -----------
// console.log(document.body);
let title = document.getElementsByTagName("h1");
// получили HTMLCollection
console.log(title);
let list = document.getElementById("list");
console.log(list);
let points = document.getElementsByClassName("elem");
//  метод getElementsByClassName, возвращает HTMLСollection. Это коллекция состоящая из DOM элементов, те данная коллекция будет состоять только из объектов тегов HTML документа и не будет включать в себя комментарии и текстовые узлы.
console.log(points);
for (let point of points) {
  console.log(point);
}
let block = document.getElementsByName("block");
console.log(block);
// ! --------------------------------------------- querySelector/querySelectorAll ----------------------------
// ? Другим способом обращения к элементу HTML является использование одного из методов querySelector/querySelectorAll. Данные методы являются универсальными для всех селекторов, поэтому в скобках следует указывать знак селектора.

let elem = document.querySelectorAll(".elem");
console.log(elem);
// ? NodeList - массивоподобная коллекция, в отличие от HTMLCollection NodeList доступен метод ForEach, map и тд...

// ! createElement/createTextNode/innerHTML/innerText
// ? Для создания элементов используется специальный метод createElement. createElement так же как и остальные методы применяются к объекту document, и создает элемент по указанному HTML тегу.
const newDiv = document.createElement("div");
console.log(newDiv);
// ? createTextNode данный метод создает текстовый узел.
const text = document.createTextNode("<p>Hello</p>");
console.log(text);
console.log(newDiv);
// ? Метод innerText добавляет текст внутри тега
newDiv.innerText = "текст внутри div";
console.log(newDiv);

// ? Метод innerHTML
newDiv.innerHTML = "<h2>Добро пожалолвать</h2>";
console.log(newDiv);

// ! firstElementChild / lastElementChild /
const list2 = document.querySelector("#list");
console.log(list2.firstElementChild);

// ! append / prepend

// ? Метод append добавляет узлы (обычно узлы элемента) в конец указанного родительского узла.
const ul = document.querySelector("ul");
const newNode = document.createElement("li");
newNode.innerText = "Apple";
ul.append(newNode);
console.log(ul);
// ? метод prepend в свою очередь, добавляет узлы в начало указанного рожительского узла. Работает как Unshift

const newNode2 = document.createElement("li");
ul.prepend(newNode2);
console.log(newNode2);

//! Методы для работы с событиями
//? Метод addEventListener принимает 2 аргумента. Первый - это (событие, что должно произойти), и функцию, которая должна отработать.
let bd = document.querySelector("body");
let btn = document.querySelector("#button");
let inp = document.querySelector("input");
let img = document.querySelector("#image");

// btn.addEventListener("click", () => {
//   bd.style.backgroundColor = "red";
// });

// btn.addEventListener("click", changeColor());
// function changeColor() {
//   bd.style.backgroundColor = "red";
// }

//? removeEventListener
// элемент.removeEventListener(вид события, функция)
//TODO В качестве значения атрибута, передается сама функция.
//? mouseover/mouseout - когда мышь наводиться на элемент, и покидает элемент
img.addEventListener("mouseout", (event) => {
  alert("Hey, what's up?");
  console.log(event);
});

inp.addEventListener("mouseover", (event) => {
  console.log(event.target.value);
});

//? mousedown/mouseup - когда нажали / отжали кнопку мыши на элементе
// img.addEventListener("mousedown", () => {
//   img.style.width = "1200px";
//   img.style.height = "800px";
// });

// img.addEventListener("mouseup", () => {
//   img.style.width = "1200px";
//   img.style.height = "800px";
// });

// //? mousemove - при движении мыши (при любом движении мыши):
// img.addEventListener("mousemove", (event) => {
//   console.log(event);
// });

//  Работая с обработчиками событий важно знать, что обработчики, в нашем примере addEventListener, дают доступ к такому объекту событий event. Данный объект можно словить в качестве параметра передаваемой функции (т.к. это всего лишь параметр, называть его можно как угодно). Объект событий дает нам доступ к атрибутам и свойствам определенного события. target, clientX, clietY и многие другие.

// ?  focus пользователь фокусируется на элементе, например нажимает на input
// inp.addEventListener("focus", (event) => {
//   console.log(event.target.value);
// });
inp.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const newDiv = document.createElement("div");
console.log(newDiv);
newDiv.innerText = "текст внутри div";
console.log(newDiv);

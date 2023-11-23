// ! ======================= Async / await =======================
// ! ----------------------- setInterval / settimeout ----------
// settimeout позволяет вызвать функцию один раз, через определенный интервал времени.
const timer = setTimeout(() => {
  console.log("hello");
}, 2000);
console.log(timer);
// ? setInterval позволяет вызывать функцию регулярно, повторяя вызов через определенный интервал времени.
const timer2 = setInterval(() => {
  //   console.log("hello khe-khe");
}, 5000);
console.log(timer2);

// !  Async / await
// ?  Асинхронность и синхронность
//  Используя асинхронность JS функции обратного вызова (callback) & async await мы можем выполнять долгие сетевые запросы  без блокировки основного потока.
// ! Promise  (состояния)
// 1) panding (ожидание) начальное, состояние, не исполнен и не отклонен.
// 2) fulfilled (исполнено) операция завершена успешно.
// 3) rejected (отклонено) операция завершена с ошибкой.
const p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 3) {
    resolve("success");
  } else {
    reject("fail");
  }
});
console.log(p);
p.then((message) => {
  //! ОТЛАВЛИВАЕТ ПОЛОЖИТЕЛЬНЫЙ ОТВЕТ С СЕРВЕРА
  console.log(message);
})
  .catch((message) => {
    console.log(message);
  })
  .finally((message) => {
    console.log("I am finally, Iовые темы work in both cases");
  });

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(API)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.Search.forEach((elem) => {
      info.innerHTML += `
      <h1>Список фильмов</h1>
      <div class="movie">
        <img src="${elem.Poster}" alt="" />
        <h4>${elem.Title}</h4>
        <h5>Year ${elem.Year}</h5>
      </div>
       `;
    });
  });

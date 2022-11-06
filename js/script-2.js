const foo = function () {
  return "Hello, world!";
};

// // Вызываем функцию и выводим результат в консоль
// console.log(foo()); // Hello, world

// // Выводим функцию в консоль без вызова
// console.log(foo); // ƒ () { return 'Hello, world!'; }

const runIt = function (fn) {
  return fn(); // Вызываем функцию, переданную в качестве параметра
};

// console.log(runIt(foo)); // Hello, world

const makePizza = function (title, cb) {
  console.log(
    `Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`
  );
  setTimeout(cb, 3000);
};

const readBook = function () {
  console.log("Читаю книгу «Колдун и кристалл»…");
};

const eatPizza = function () {
  console.log("Ура! Пицца готова, пора подкрепиться.");
};

makePizza("Пеперонни", eatPizza);
readBook();

"use strict";

// cart.add({ name: "🎃", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🐷", price: 80 });
// cart.add({ name: "👕", price: 90 });
// cart.add({ name: "👀", price: 90 });

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         // console.log("Такой продукт уже есть:", product.name);
//         // console.log(item);

//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       // const item = this.items[i];
//       const { name } = items[i];

//       if (productName === name) {
//         console.log("Нашли такой продукт", productName);
//         console.log("индекс:", i);

//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "🎃", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🐷", price: 80 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🍓", price: 70 });

// console.table(cart.getItems());

// console.log("Total:", cart.countTotalPrice());

// cart.remove("🎃");
// console.table(cart.getItems());
// console.log("Total:", cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());
// console.log("Total:", cart.countTotalPrice());

// ------------------------------------------------

/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
//   // arr: [123, 123],
// };

// // user.mood = "happy";
// user["mood"] = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   // console.log(key);
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);

// ------------------------------------------------------------

/**
 * Example 2 - метод Object.values()
 * У нас есть объект, в котором хранятся зарплаты нашей команды.
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
 * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// console.log(values);

// let sum = 0;

// for (let value of values) {
//   console.log(value);

//   sum += value;
// }

// console.log("Total:", sum);

// -----------------------------------------------------------

/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName),
 * которая принимает массив обьектов и строку с названием камня.
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

// console.log(stones);

const calcTotalPrice = function (stones, stoneName) {
  let sum = 0;

  for (let stone of stones) {
    if (stone.name === stoneName) {
      console.log("stone", stone);
      sum = stone.price * stone.quantity;
      break;
    }
  }

  return sum ? sum : "Указанного камня не существует";
};

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.log(calcTotalPrice(stones, "Бриллиант"));
// console.log(calcTotalPrice(stones, "Сапфир"));
// console.log(calcTotalPrice(stones, "Щебень"));
// console.log(calcTotalPrice(stones, "Янтарь"));

// -------------------------------------------------------------

/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 *
 * compare("1", "2", "+", "3"); // true
 *
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String.
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

function compare(firstNumber, secondNumber, operation, result) {}

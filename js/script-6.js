"use strict";

// const personOne = {
//   name: "Bob",
//   age: 21,
// };

// function personAge(person) {
//   person.age += 1;
//   return person;
// }

// personAge(personOne);
// console.log(personOne);
// console.log(personOne.age);
// console.log(personOne.name);

// Колбэк функция

// function printMyName() {
//   console.log("Lena");
// }

// console.log("Start");

// setTimeout(printMyName, 2000);

// const a = 5;

// function myFn() {
//   function innerFn() {
//     console.log(a);
//   }
//   innerFn();
// }

// myFn();

// const button = {
//   width: 200,
//   text: "Buy",
// };

// button.height = 100;
// button.color = "blue";

// console.table(button);

// const redButton = {
//   ...button,
//   color: "red",
// };

// console.table(redButton);

// const buttonInfo = {
//   text: "Buy",
// };

// console.table(buttonInfo);

// const buttonStyle = {
//   color: "yellow",
//   width: 200,
//   height: 300,
// };

// console.table(buttonStyle);

// const button = {
//   ...buttonInfo,
//   ...buttonStyle,
// };

// button.color = "red";
// button.text = "Hello";
// button.isPublic = true;

// console.table(button);

const name = "Elena";
const surname = "Muha";
const city = "Kropivnitskiy";

const aboutMe = `My name is ${name} ${surname}. I live in ${city}.`;
// console.log(aboutMe);

// setTimeout(function () {
//   console.log("Привет!");
// }, 1000);

// setTimeout(function () {
//   console.log("Бонжур!");
// }, 2000);

// setTimeout(function () {
//   console.log("Хелло!");
// }, 3000);

// setTimeout(() => {
//   console.log("Привет!");
// }, 1000);

// setTimeout(() => {
//   console.log("Бонжур!");
// }, 2000);

// setTimeout(() => {
//   console.log("Хелло!");
// }, 3000);

// function multByFactor(value, multiplier = 1) {
//   console.log(value * multiplier);
//   return value * multiplier;
// }

// multByFactor(10, 5);
// multByFactor(10);

// const result = function (value, multiplier = 2) {
//   const res = value * multiplier;
//   console.log(res);
// };

// result(10, 5);
// result(10);

// const result = (value, multiplier = 3) => {
//   console.log(value * multiplier);
//   return value * multiplier;
// };

// result(10, 5);
// result(10);

// function multiply(x, y, z = 1) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(2, 3); //  6
// multiply(4, 8, 12); //  384
// multiply(17, 6, 25); //  2550

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log("Лог до вызова функции multiply");
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log("Лог после вызова функции multiply");

// const newPost = (post, addAt = Date()) => ({
//   ...post,
//   addAt: addAt,
// });

// function newPost(post, addAt = Date()) {
//   const postOne = { ...post, addAt };
//   return postOne;
// }

// const firstPost = {
//   id: 1,
//   author: "Elena",
// };

// const secondPost = {
//   text: "Hello",
//   subject: "about me",
//   rating: 5,
// };

// console.table(newPost(firstPost));
// console.table(newPost(secondPost));

const fnWithError = () => {
  throw new Error("Some error");
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log("Continue...");

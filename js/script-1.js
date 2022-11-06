// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "strawberry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

const string = "Welcome to the future";
// const stringArray = string.split(" ");

let revercedString = string.split("").reverse().join("");

console.log(revercedString);

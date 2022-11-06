// Метод forEach

// const myArray = [1, 2, 3, 10];
// console.log(myArray);

// myArray.forEach(el => console.log(el * 2));

// console.log(myArray);

// Метод Map

const myArray = [1, 2, 3];
console.log(myArray);

// const newArray = myArray.map(el => el * 3);

// const newArray = myArray.map((el) => {
//   return el * 3;
// });

const newArray = myArray.map(function (el) {
  return el * 3;
});

console.log(newArray);
console.log(myArray);

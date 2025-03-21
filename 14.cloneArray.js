// clonig Array

let array = ["arr1", "arr2"];
// let array2 = array.slice(0).concat(["arr3", "arr4"]); // using slice method
let array2 = [].concat(array, ["arr3", "arr4"]);
console.log(array2);

//using spread oprator
let array1 = ["arr1", "arr2"];
// let array2 = [...array1];

// let oneMoreArray = ["arr3", "arr4  "];
// let array2 = [...array1, ...oneMoreArray];
// console.log(array2);

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);
console.log(fruits[0]); // it will print element at index 0

console.log(fruits[fruits.length - 1]); //it will print element at last index

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

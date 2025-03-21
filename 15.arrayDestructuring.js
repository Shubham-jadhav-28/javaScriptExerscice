// arrayDestructuring

const myArray = ["value1", "value2", "value3", "value4", "value5"];
let [myvar1, , myvar2, ...myNewArray] = myArray; // destructuring array
console.log(myvar1, myvar2);
console.log(myNewArray);

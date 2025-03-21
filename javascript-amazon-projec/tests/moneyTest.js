import { formatCurrency } from "../scripts/utils/money.js";
console.log("test suite: formatCurrency");

console.log("converts cents to dollars and cents");

if (formatCurrency(2095) == "20.95") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
console.log("work with 0");

if (formatCurrency(0) == "0.00") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("rounds up to the nearst cent");

if (formatCurrency(2000.5) == "20.01") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

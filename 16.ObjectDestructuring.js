// Object Destructuring
const band = {
  bandName: "Coldplay",
  famousSong: "stairway to heaven",
  year: 2024,
  genre: "rock",
};

// let { bandName, famousSong, year, genre } = band;
// console.log(bandName, famousSong, year, genre);

let { bandName, famousSong, ...restprops } = band; // destructuring object
console.log(bandName, famousSong);
console.log(restprops);

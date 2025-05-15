const marvel_heroes = ["IrnonMan", "Thor", "Hulk"]
const dc_heroes = ["Superman", "Batman", "Joker"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// const final_heroes = marvel_heroes.concat(dc_heroes)
// console.log(final_heroes);


// const new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator
// console.log(new_heroes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = another_arr.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("Aman"))
// console.log(Array.from("Aman")); // converts into array
// console.log(Array.from({name:"Aman"})); // gives one empty array if we dont declare what type of array we want, eg: key, value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




// Array

const myarray = [0, 1, 2, 3, 4, 5, 6]
const heroes = ["Thor", "Hulk"]
const myArr = new Array(1,2,3,8,10)
// console.log(myArr[3]);

// Array Methods

// myarray.push(7)
// myarray.push(8)
// myarray.pop()

// myarray.unshift(0)
// myarray.shift()

// console.log(myarray.includes(5));
// console.log(myarray.indexOf(5));

// const newArr = myarray.join() // convert into string
// console.log(myarray);
// console.log(typeof newArr);


// slice, splice

console.log("A", myarray);

const myN = myarray.slice(1, 3)
console.log(myN);
console.log("B", myarray);

const myN1 = myarray.splice(1, 3) // manupulate original array
console.log(myN1);
console.log("C", myarray);





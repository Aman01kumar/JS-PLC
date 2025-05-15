// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log((myDate.toLocaleDateString));
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

const newDate = new Date(2025, 4, 15)
const secDate = new Date(2025, 4, 15, 10, 32)
const thDate = new Date("2025-05-15")
// console.log(newDate.toDateString());
// console.log(secDate.toLocaleString());
// console.log(thDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(thDate.getTime());

// console.log(Math.floor(Date.now() /1000)); // converting miliseconds into seconds


let freshDate = new Date()
// console.log(freshDate);
// console.log(freshDate.getMonth());
// console.log(freshDate.getDay());
// console.log(freshDate.getDate());

console.log(freshDate.toLocaleString('default', {
    weekday : "long"
}))




















// Primitive - call by value : didn't give the actual value, instead return the copy of the value

// 7 types : Number, String, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3214567895121326n
// console.log(typeof bigNumber);




// Reference (Non-Primitive) : give the refrence of an element in the memory : "typeOf non-primitive data-type is always object"

// Arrays, Objects, Function

const heroes = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Aman",
    email: "a@gmail.com",
    age : 20
};

const myFunction = function(){
    console.log("Hello World!");
    
}

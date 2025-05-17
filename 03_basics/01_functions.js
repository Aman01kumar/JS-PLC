// node 03_basics/01_functions.js
function myName(){
    console.log("A");
    console.log("m");
    console.log("a");
    console.log("n");
}
// myName // this is function refrence
// myName() // this is function execution

// function addTwoNumbers(number1, number2){ // when we take any value inside a function, thin it is called parameters
//     console.log(number1 + number2);
// }
// // addTwoNumbers() 

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(2,3) 
// console.log("Result is:", result);

function loggeinUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loggeinUserMessage("Aman"))
console.log((loggeinUserMessage("")));
console.log(loggeinUserMessage());
console.log(loggeinUserMessage("Aman"));



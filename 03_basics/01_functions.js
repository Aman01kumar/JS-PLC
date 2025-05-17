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
// console.log((loggeinUserMessage("")));
// console.log(loggeinUserMessage());
// console.log(loggeinUserMessage("Aman"));


// ***********************************************************************************************

function calculatePrice(val1, val2,...num1){ // rest operator
    return num1
}
// console.log(calculatePrice(200, 400, 600, 700));

const user = {
    name: "Aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     name: "sam",
//     price: 399
// })

const mynewArray = [100, 200, 400, 600]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([100, 400, 300, 700]));





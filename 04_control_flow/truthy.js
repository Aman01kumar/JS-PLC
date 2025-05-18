const useremail = "aman@ai.com"
const Useremail = []

// if(useremail){
//     console.log("Got user email");   
// }
// else{
//     console.log("Not got user email!");
// }

// falsy values

// false,  0, -0, BIGint 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", {}, [], function(){}, 

// if(Useremail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

//  if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty!");
//  }

// false == 0 : true, false == "" : true, 0 == "" : true

// Nullish Coalescing Operator (NLS) : null , udefined 

let val1;
// val1 = 5 ?? 7
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15



// console.log(val1);

// Terniary Operator

// condition ? true : false

const bookPrice = 600

bookPrice <= 580 ? console.log('Less than 580') : console.log("more than 580")


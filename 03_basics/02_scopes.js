// node 03_basics/02_scopes.js

// var c =300
let a  = 5 // global scope

if(true){  // local scope
    let a = 10
    const b = 20
    // console.log("Inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Aman"
    if(username === "Aman"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addOne(5)
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

// addTwo(5)


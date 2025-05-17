const user = {
    username: "Aman",
    id: 1,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function me(){
//     let username = "Aman"
//     console.log(this.username)
// }
// me()

// const why = function(){
//     let username = "Aman"
//     console.log(this.username);
// }

const how = () => {
    let username = "Sam"
    console.log(this.username);
    
}
// how()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aman"})

console.log(addTwo(3, 4));

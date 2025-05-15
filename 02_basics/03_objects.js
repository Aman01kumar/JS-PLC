// singleton : when we made objects through constructor then it callled singleton because it create a single object of his type

// Object.create() : this is called singleton because it is used to create objects through constructor

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Aman",
    "full-name" : "Aman Kumar",
    [mySym] : "key1", // way to declare a symbol in a onject
    age : 20,
    location : "Noida",
    email : "aman@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "Saturday"]
}

// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["full-name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);

jsUser.email = "aman@chatgpt.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "aman@google.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
}
console.log(jsUser.greetingTwo());











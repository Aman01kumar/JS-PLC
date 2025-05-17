// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123bbb"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Aman",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2) // this empty object act as a target object and other as a source object. If not, then all object will go in object 1 as it act as  taget then

// console.log(obj3);
// console.log(obj4);

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },

]

// console.log(users[1].id);
// console.log(users[2].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser)); // return datatype as an array with keys of an object
console.log(Object.values(tinderUser)); // return dataype as an array with values of an object
console.log(Object.entries(tinderUser)); // return an array of array with key and values 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.












// for of 

const myarray = [1, 2, 3, 4, 5]

for (const num of myarray) {
    // console.log(num)
}

const greetings = "Hello ji, namaste"
for (const greet of greetings) {
    if(greet == " " || greet == ',') continue
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) { // sestructuring the array
    // console.log(key, ":-", value)
}

const mygame = {
    'game1' : "FIFA",
    'game2' : "GTA"
}

// for (const [key, value] of mygame) { // not work on object for iterations
//     console.log(key, ":-", value)
// }


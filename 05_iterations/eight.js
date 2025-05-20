const myNums = [1, 2, 3, 4, 5]


// const myTotal = myNums.reduce( function (acc, currVal)  {  // return the total value 
//     console.log(`acc: ${acc} and currVal : ${currVal}`)
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "jscourse",
        price : 1099
    },
    {
        itemName : "mobile dev courses",
        price : 1199
    },
    {
        itemName : "py courses",
        price : 999
    },

]

const toalPrice = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)
console.log(toalPrice)
const coading = ["js", "ruby", "java", "cpp", "py"]

// const values = coading.forEach( (item) =>{
//     console.log(item)
//     return                 // forEach doesnot return the value, return undefined
// })

// console.log(values)

const mynums = [1, 2, 3, 4, 5, 6, 7, 8]

const ans = mynums.filter( (num) => num > 4 )  // return an array 
// console.log(ans)

// const newNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const res = newNums.filter( (nums) => {
//     return nums > 4
// })
// console.log(res)

const newNum = []

mynums.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum)
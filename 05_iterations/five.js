// for each

const coading = ["js", "ruby", "java", "cpp", "py"]

// coading.forEach(function(val){
//     console.log(val)
// })

// coading.forEach( (item) => {
//     // console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coading.forEach(printme) // giving reference only not execution

// coading.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoading = [
    {
        language: "javascript",
        fileName : "js"
    },
    {
        language : "java",
        fileName: "java"
    },
    {
        language : "python",
        fileName : "py"
    },
]

myCoading.forEach( (item) => {
    console.log(item.fileName)
    console.log(item.language)
})
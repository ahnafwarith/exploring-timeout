console.log(1111)
console.log(2222)
//setTimeout(() => console.log('aaaaaaa'))
//fetch('') works in an asynchronised way, like setTimeout()
let i = 0
const timeId = setInterval(() => {
    console.log(i++)
    if (i > 100) {
        clearInterval(timeId)
    }
})
console.log(3333)
console.log(4444)
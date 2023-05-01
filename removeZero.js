let removeZeroes = function(array) {
    let dummyString = array.toString().split(',').join('')
    let finalString = dummyString.replace(/^0+/, ' ').replace(/0+$/, ' ')
    let finalArray = finalString.trim().split('')
    const intArray = finalArray.map((ele) => {
        return parseInt(ele)
    })
    return intArray
}

console.log(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]))
console.log(removeZeroes([0, 0, 0]))
console.log(removeZeroes([8]))
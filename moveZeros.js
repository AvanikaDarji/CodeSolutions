function moveZeros(array) {
    // let newArray = [];
    let zerosArray = [];
    let nonZerosArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            zerosArray.push(array[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            nonZerosArray.push(array[i]);
        }
    }
    return nonZerosArray.concat(zerosArray);
    //  for (let j = 0; j < array.length; j++)
    /*for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            newArray = array.splice(0, i - 1);
        }
        final = array.concat(newArray);
    }
    return final;*/
}
console.log(moveZeros([0, 2, 0, 3, 8]));
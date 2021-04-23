/** Time complexity is o(n)+ o(n*(n-1))  is not good solution*/
/*function solution(array) {
    let mul = [];
    for (let i = 0; i < array.length; i++) {
        let value = 1;
        for (let j = 0; j < array.length; j++) {
            if (j !== i) {
                value = value * array[j];
            }
        }
        mul.push(value);
    }
    return mul;
}
console.log(solution([3, 2, 1]));*/
//output [ 2, 3, 6]

function validSolution(list_of_nums) {
    let retval = []
    var mul_left = {}
    var mul_right = {}

    mul_left[-1] = 1

    for (let i = 0; i < (list_of_nums.length - 1); i++) {
        mul_left[i] = list_of_nums[i] * mul_left[i - 1]
    }

    mul_right[list_of_nums.length] = 1

    for (let j = list_of_nums.length - 1; j > 0; j--) {
        mul_right[j] = list_of_nums[j] * mul_right[j + 1]
    }

    for (let k = 0; k < list_of_nums.length; k++) {
        retval.push(mul_left[k - 1] * mul_right[k + 1]);
    }
    return retval
}
console.log(validSolution([3, 2, 1]));
console.log(validSolution([1, 2, 3, 4, 5]));
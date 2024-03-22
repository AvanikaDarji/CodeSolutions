
function hills(arr){
let newArray = removeSameAdjacent(arr);
let hills = 0;
for(let i=0; i< newArray.length; i++ ){
  
    if(newArray[i+1] > newArray[i] && newArray[i+1]> newArray[i+2]){
        hills++;
    }
}
return hills;
}
function valleys(arr){
    let newArray = removeSameAdjacent(arr);
    let valley = 0;
for(let i=0; i< newArray.length; i++ ){
  if(newArray[i+1] < newArray[i] && newArray[i+1] < newArray[i+2]){
    valley++;
    }
}
return valley;
}
function removeSameAdjacent(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i,1)
        }
    }
    return arr;

}
let arr = [3,4,1,1,6,5]
console.log(hills(arr));
console.log(valleys(arr));
let arr1 = [7,6,5,5,4,1];
console.log(hills(arr1));
console.log(valleys(arr1))
let arr2 = [1,0,1]
console.log(hills(arr2));
console.log(valleys(arr2))
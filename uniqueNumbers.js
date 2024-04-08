const uniqueSum = (array)=>{

   let resultArray=[];
   let repeatedDigitArray =[];

    for(let i=0;i<array.length; i++){
        let value = array[i];
        let parseElement = value.toString().split("");
       if(parseElement.length !== 1){
            if(checkUnique(parseElement)){
                repeatedDigitArray.push(Number(parseElement.join("")));
            }
        }else {  
                 return  array.reduce((acc, curr)=> acc+curr, 0)
        }
    }
    if( repeatedDigitArray.length == array.length){
        return 0;
    } else{
      array.forEach((element)=> {
          if(!repeatedDigitArray.includes(element)){
              resultArray.push(element);
          } });
    }
    
return resultArray.reduce((acc,curr)=> acc+curr, 0);

}
const checkUnique = (array)=>{
const checkRepeated = array.filter((value, index)=> array.indexOf(value) == index);
return checkRepeated.length !== array.length;
}

console.log(uniqueSum([101,2,3]));
console.log(uniqueSum([11,22,33]));
console.log(uniqueSum([1,2,3]));

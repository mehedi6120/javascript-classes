// math object
// console.log(Math.PI);
// Math.pow(2,2)

//britter bash;
function CircleArea(r){
    return Math.PI*Math.pow(r,2);
  }
  console.log(CircleArea(4))
  
  let maxNum = Math.max(2,4,5,6,7,423,2,5,6);
  let minNum = Math.min(2,4,5,6,7,423,2,5,6);
  
  console.log(maxNum);
  console.log(minNum);
  
  let myArr = [2,4,5,6,7,423,2,5,6];
  
  let maxNumber = Math.max.apply(null,myArr);
  console.log(maxNumber);
  
  
  let myNum = 1.44;
  //make min
  console.log(Math.floor(myNum));
  //make max
  console.log(Math.ceil(myNum));
  
  //.50 er besi thake upper value/kom thakle lower value
  console.log(Math.round(myNum));
  
  //minus bad e value return korbe
  let absValue = -2.5;
  console.log(Math.abs(absValue));
  
  let sinCosValu = 5.6;
  
  console.log(Math.sin(sinCosValu));
  console.log(Math.cos(sinCosValu));
  console.log(Math.tan(sinCosValu));
  
  
  // 5 theke boro number ber hobe 
  let randNum = 5+Math.round(Math.random()*10);
  console.log(randNum)
  
  
  
  
  
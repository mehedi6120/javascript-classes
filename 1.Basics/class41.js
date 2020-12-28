//more array functions
//array concat()
/*var array1 = [1,2,3];
var array2 = [4,5,6];

var concat = array1.concat(array2);
console.log(concat);
*/

// array slice
/*var sliceArray = [0,1,2,3,4,5,6];
var katakati = sliceArray.slice(1,4);
console.log(katakati);*/

var myArray = [1,2,3,4,45,6,7,78];

var ourNumber = (num)=>{
  var vagSesh = num%2;
  if(vagSesh === 0) return true;
  return false
}

//find even number
console.log(ourNumber(22));

//sobgula jor songkha kina?
console.log(myArray.every(ourNumber));


var oddNumber = (num)=>{
  var vagSesh = num%2;
  if(vagSesh === 0) return false;
  return true
}
//at least 1 ta bijor songkha ache kina
console.log(myArray.some(oddNumber));

//sudhu bijor songkha diya ekta array banabe
var oddArray = myArray.filter(oddNumber);
console.log(oddArray);

//array delete with insert some array
/*myArray.splice(1,2,"alu",'potol');
console.log(myArray);
*/

// arrayr sobgula element k add/multiply/substract
var newVal  = myArray.reduce((a,b)=>{
  console.log(`A:${a} B:${b}`);
  return a+b;
},0);
console.log(newVal);
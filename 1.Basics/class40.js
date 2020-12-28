//some array functions
var bajar = ['beef','alu','gorom moshla']; 
/*for (let i = 0; i<bajar.length;i++){
  console.log(bajar[i]);
}
*/
/*bajar.forEach(item=>{
  console.log(item+ " done");
})*/

//another way (map function)
/*var newArray = bajar.map(item=>{
  return item+ " done";
})
console.log(newArray);

*/

/*
let newArray = bajar.reverse();
console.log(newArray);*/

/*var myString = "the quick brown fox";

var dividedString = myString.split('');
// console.log(dividedString);


var reverseString = dividedString.reverse();
// console.log(reverseString)

var joinStrign = reverseString.join('');
console.log(joinStrign);
*/

// array sort()
var sorted = [10,22,34,1,3,12,122,14,5,6,77,8];
sorted.sort((a,b)=>{
  console.log(`A:${a} B:${b}`);
  console.log(`${a-b}`)
  return a-b;
})
console.log(sorted);
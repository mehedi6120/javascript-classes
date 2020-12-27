//array
var bajar = ['alu','potol','vendi','peyaj'];

/*console.log(bajar[0]);
console.log(bajar[1]);
console.log(bajar[2]);
console.log(bajar[3]);
console.log(bajar.indexOf('vendi'));
console.log(bajar.length);
//loop on array
for (let i = 0; i<bajar.length;i++){
  console.log(bajar[i]);
}
*/
/*
//array add and remove
bajar.push('puiShak');
// remove form last
bajar.pop()
// pop age return kore pore remove kore
var listItem = bajar.pop();
console.log(listItem);
//add on fist element of array
bajar.unshift('chal');
//delete from fist element
bajar.shift();

console.log(bajar);
*/


//access object property as like array
var manus = {
  name:"mehedi",
  age:21,
  talk(){
    console.log("hello world")
  }
}
console.log(manus["name"]);
console.log(manus["age"]);
manus["talk"]();

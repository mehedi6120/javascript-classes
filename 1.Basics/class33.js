// constructor and factory
//jokhn function diya ekta object banabe tokhn first letter capital hote hobe
/*function Createfunc(name,age,gender){
  return {
    name,
    age,
    gender
  }
}
var a = Createfunc("mehedi",21,'male');
var b = Createfunc("opurbo",22,'male');
console.log(a);
console.log(a.gender)
console.log(b);*/



// constructor function
//constructor er first letter capital hobe
function Human(name,age,gender){
 
    this.name=name;
    this.age=age;
    this.gender=gender;
  
}
var c = new Human("mehedi",21,'male');
var d = new Human("opurbo",22,'male');
console.log(c);
console.log(c.gender)
console.log(d);

// var ,let , const, and scope
var a = "this is var";
let b = "this is let"
const c = "this is const";
// console.log(Boolean())
{
  console.log(a);
  var d = "this is d block";
  console.log(d);
  //let diya decleare korle seta block er bahire kaj korbe na
  let e = 'this is e block';
  console.log(e);
  
  const x = 5;
  {
    //block er vitore block
    //e access kora jacche na
    console.log(e);
    //var can access 
    console.log(d);
  }
}
//not working outside on block
// console.log(e); 
//var can be decleared outside of block
console.log(d);

//cant access x;
// console.log(x);


//var and let can be change
a = "a has changed";
b = "b has changed";
console.log(a);
console.log(b);

//const can't be changed
// c = "c has changed";

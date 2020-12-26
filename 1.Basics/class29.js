//functions properties
function a(b,c){
    console.log("this is a function call....");
    console.log(this);
    console.log(b);
    console.log(c);
  }
  // a(3,4)
  //this er value (7)
  /*var d = a.bind(7);
  d(5,6);*/
  //ekhane this er value 'hello'
  // a.call('hello',5,6)
  
  //evabeo lekha jay , ekhane this er value 'hello'
  //apply,array
  a.apply('hello',[8,9]);
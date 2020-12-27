//this
var dog = {
    name: "Kallu",
    bark : function(){},
    //uporer take ES6 e evabeo lekha jay
    bark2(){
      console.log(`Woff! ${this.name}`)
    }
  }
  // dog.bark2();
  var x = dog.bark2;
  // x();//this cannot reah
  x.call(dog);
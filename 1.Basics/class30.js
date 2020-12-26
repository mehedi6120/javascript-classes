// higher order function 
function genarate(type){
    if(type === "plus"){
      return (a,b)=>a+b;
    }
    else if(type === "minus"){
      return (a,b)=>a-b;
    }
    else if(type === "multiply"){
      return (a,b)=>a*b;
    }
    
  }
  var x = genarate('plus');
  console.log(x(3,4))
  var y = genarate('multiply');
  console.log(y(3,4))
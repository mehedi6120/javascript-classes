//arguments on function

function avar(){
    let ans =   (arguments[0] + arguments[1])/2;
    console.log(arguments[2]);
    let arg = arguments[2]+arguments[3];
     return ans,arg;
     //function e return korar porer kono code kaj korbe na
     //nicher console ta kaj korbe na
    // console.log(arguments[3]);
    }
    let answer = avar(2,3,3,5);
    console.log(answer);
    
    function add(a,b){
      if(!(a && b)){
        return 0;
      }
      let addition = arguments[0]+arguments[1];
      return addition;
    }
    
    let result = add(3,4);
    console.log(result);
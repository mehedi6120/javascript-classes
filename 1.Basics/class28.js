//clauser and pure function
function makeFunc(){
    var name = 'Mozilla';
    function displayName(){
      console.log(name);
    }
    return displayName;
  }
  var myFunc = makeFunc();
  myFunc()
  //pure function
  function a(b,c){
    let f = d+e;
    e = 7;
    return f;
  }
  let d = 9;
  let e = 5;
  console.log(a(d,e));
  console.log(d);
  console.log(e);
  
  
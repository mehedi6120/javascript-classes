// prototype 
var a = {
    b:40,
    c:"hello world"
  }
  var d = Object.create(a);
  a.b = 50;
  console.log(d.b);
  //eita d er nijer property na ejonno false return kore
  console.log(d.hasOwnProperty('b'));
  //d er nijer property set kore dewar por seta pacche
  d.b = 44;
  console.log(d.hasOwnProperty('b'));
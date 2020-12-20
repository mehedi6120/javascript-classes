// javascrip Boolean

/*var villian = false;
var hero = true;
console.log(hero);
*/
// undefiend is flase boolean
var a = Boolean(undefined);
console.log(a);
//jekono string true
var b = Boolean('undefined');
console.log(b);
//empty string is false on javascript
var c = Boolean(' ');
console.log(c);
//only 0 is false on javascript / baki sob true
var d = Boolean(0);
console.log(d);
// null is false on javascript
var e = Boolean(null);
console.log(e);
//NaN o javascript e false
var f = Boolean(NaN);
console.log(f);
//empty object is true on javascript
var g = Boolean({});
console.log(g);
//empty array is true on javascript
var h = Boolean([]);
console.log(h);

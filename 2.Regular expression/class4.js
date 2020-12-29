// how to write regular expression
var r = RegExp('abc+','i');

var s = "abcccccccccc";

//string ta REgular expression er sathe match kore kina
console.log(r.test(s));

// variable validity test
// how to write regular expression
var validity = RegExp('^[a-z_][a-z0-9_]*','i');

var testVar = "_variable00";

//string ta REgular expression er sathe match kore kina
console.log(validity.test(testVar));


var va = /ab(c+)/i;

var t = 'abccccc';


// console.log(t.match(va));
console.log(va.exec(t));



var n = "017111111";
//replace er vitor reg exp er use
var changed = n.replace(/1/g,"%");

console.log(changed);


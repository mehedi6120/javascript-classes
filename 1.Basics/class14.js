// short curkit evaluation
var a = true;
var b = false;
if ( a ){
  console.log('hello world')
}

// short curkit oparetion
// a jodi false hoy tahole porer line execute hobena
a && console.log( 'this is true' );
//b jodi false hoy tobei line execute hobe
b || console.log('this is false');

// jodi c/d er value thake tahole setai execute korbe. jodi na thaketahole porer (c==5),(d==7) execute korbe. ar jodi value 0 hoy tahole 0 e execute korbe. because 0 ekta false value
var c = 8;
var d = 6;
//c false hote hobe
c || (c==5);
//d true hote hobe
d && (d==7);
console.log(c);
console.log(d);

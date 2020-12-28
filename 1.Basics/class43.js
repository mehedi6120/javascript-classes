//date object
var date = new Date();

// console.log(Date.now());
// console.log(Date.now())

/*var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var year = date.getFullYear();
var Month = date.getMonth();

console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(year);
console.log(Month);
*/
/*
date.setDate(3);
date.setMonth(4);
date.setYear(2019);
date.setHours(3);*/

/*
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toUTCString());*/

var t = setTimeout(()=>{console.log('helloo world')},3000);
clearTimeout(t);

var s = setInterval(()=>{console.log('helloo world')},3000);
clearInterval(s);

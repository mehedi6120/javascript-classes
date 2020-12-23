// Loop project
// je kono string songkhar ager + diye setake number e convert kora jay
let num = +process.argv[2];
if (!Number.isInteger(num)) {
    console.log('the provided value is not a number');
    process.exit();
}
for (let i = 1; i <= 10; i++){
    console.log(`${num}x${i} = ${num * i}`);
}
/* 
make with while loop
var i = 1;
while (i <= 10) {
    console.log(`${num}x${i} = ${num * i}`);
    i++;
}
*/
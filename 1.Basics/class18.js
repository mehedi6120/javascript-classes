// break and continue
// a simple while loop project
// 21 k kon songkha diya vag deoa jabe seta ber kora
/* var found = 0;
var target = 21;
var iterator = 2;
while(!found){
  let answer = target%iterator;
  // console.log(answer);
  if(!answer){
    found = iterator;
  }
  iterator++;
}
console.log(found);
//make this thing with for loop
var found = 0;
var target = 21;
for(let i = 2; !found; i++){
  let result = target%i;
  
  if(!result){
    found = i;
  }
}
console.log(found); */

//break, continue
var target = 21;
var target2 = 90;
var found = 0;
for (let i = 2; i < target / 2; i++){
    let result = target % i;
    if (result){
        continue;
    }
    let result2 = target2 % i;
    if (!result2) {
        found = i;
        break;
    }
}
console.log(found)
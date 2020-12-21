// complex logic
var age = 16;
var gender = "Male";

// conditions
/*age >= 21 and gender == Male

age >=18 and gender == female*/
// convering to code
/*if(age>=21 && gender.toLowerCase() == 'male'){
  console.log('biyar boyos hoise');
}
else if(age>=18 && gender.toLowerCase() == 'female'){
  console.log('biyer boyos hoyeche')
}
else{
  console.log('boyer boyos hoyni');
}
*/

//logic k group kora jay
if((age>=21 && gender.toLowerCase() == 'male') || (age>=18 && gender.toLowerCase() == 'female')){
  console.log('biyar boyos hoise');
}
else{
  console.log('boyer boyos hoyni');
}
var target = document.querySelector('.result');

function setTime(){
    var d = new Date();

target.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}
setTime();
setInterval(setTime, 1);

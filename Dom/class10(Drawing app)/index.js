var cvs = document.querySelector('canvas');

ctx = cvs.getContext("2d");

var drawing = false;

var oldx = 0;
var oldy = 0;
cvs.addEventListener('mousedown', e => {
    drawing = true;
    oldx = e.offsetX;
    oldy = e.offsetY;
})

cvs.addEventListener('mouseup', e => {
    drawing = false;
})

cvs.addEventListener('mousemove', e => {
    if (!drawing) return false;
    ctx.beginPath();
    ctx.moveTo(oldx, oldy);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    oldx = e.offsetX;
    oldy = e.offsetY;

})













/* ctx.beginPath();

ctx.moveTo(10, 12);
ctx.lineTo(30, 25);

ctx.stroke(); */
var cvs = document.querySelector('canvas');

ctx = cvs.getContext("2d");
ctx.fillStyle = "#0f0";
ctx.fillRect(10, 10, 50, 50);
ctx.strokeStyle = "#f00";
ctx.strokeRect(12, 12, 52, 52);
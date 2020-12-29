var input = document.querySelector('.colorvalue');
var warning = document.querySelector('.warning');
var rval = document.querySelector('.r');
var gval = document.querySelector('.g');
var bval = document.querySelector('.b');
var final = document.querySelector('.final-result');

    input.addEventListener('keypress', () => {
        warning.innerHTML = " ";
        var v = input.value;
    
        var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;
    
        if (v.length === 4 || v.length === 7) {
            var output = rex.exec(v);
            console.log(output[2]);
            if (output === null) {
                warning.innerHTML = "Not a valid color Code";
            }
            else {
                rval.innerHTML = `R: ${getColorValue(output[1])}`;
                gval.innerHTML = `G: ${getColorValue(output[2])}`;
                bval.innerHTML = `B: ${getColorValue(output[3])}`;
                final.innerHTML = `RGB(${getColorValue(output[1])},${getColorValue(output[2])},${getColorValue(output[3])})`;
                document.body.style.backgroundColor = v;
            }
        }
        else {
            warning.innerHTML = "Not a valid color code";
            
        }
    
    });

    





function getColorValue(hex) {
    if (hex.length === 1) {
        hex = hex + hex;
    }
    return parseInt(hex,16)
 }
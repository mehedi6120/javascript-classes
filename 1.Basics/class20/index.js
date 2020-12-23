var msg = document.querySelector('#msg');
var btn = document.querySelector('#interact');
var result = document.querySelector('#answer');

btn.addEventListener('click', function () {
    let c = msg.value.toLocaleLowerCase();
    let reply = '';
    if (c.match('hello')) {
        reply = "hello there!";
    }
    else if (c.match('Sign for me')) {
        reply = "ami gan gaite parina re";
    }
    else if (c.match('tomar nam ki?')) {
        reply = "ami bot";
    }
    else {
        reply = "amito eita janina";
    }
    result.innerHTML = reply;
    var kotha = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(kotha);
});

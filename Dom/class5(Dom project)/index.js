var inp = document.querySelector('.taskname');
var list = document.querySelector('.tasklist');


var tasklist = [];


function rander(elements) {
    list.innerHTML = "";
    elements.forEach(n => {
        let newEl = document.createElement('li');
        newEl.innerHTML = n;
        list.appendChild(newEl);
        newEl.classList.add("list-item");
    })
}
inp.addEventListener('keyup', n => {
    if (n.which == 13 && inp.value !== "") {
        tasklist.push(inp.value);
        inp.value = " ";
        rander(tasklist);
        
    }
})

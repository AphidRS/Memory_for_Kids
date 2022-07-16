window.onload = init();
window.onunload = () => sessionStorage.clear();

let counter = 0;
let selected = true;
let self = null;


function randomize(no_repeat) {
    for (let i = 0; i < 100; i++) {
        let number = (Math.floor(Math.random() * 100) + 1);    
            if(no_repeat[i] != number) {
                no_repeat.push(number);
            }
    }
console.log(no_repeat);
return no_repeat;
}


function init() {
        let no_repeat = [];
        let numbers = randomize(no_repeat);
        for (let i = 1; i < 17; i++) { 
            if(document.getElementById(i) != null) {
                document.getElementById(i).innerHTML = numbers[i];
            }
        }
}

function select() {
    document.body.addEventListener("click", (e)=>{change_bg(e)}, false);
}


function change_bg(e) {
    check();
    if (selected === true) {  
        let self = e.target;
        let self_id = self.getAttribute("id");
        if (self_id != null) {
            if (self_id > 0 && self_id < 17) {
                self.style.background = 'yellow';
                setTimeout(restore_bg, 5000, self);
            }
        }
    }
}


function restore_bg(self) {
    self.style.background = 'green';
    let self_id = null;
    counter--;
}

function check() {
    console.log(counter);
    if (counter <= 1) {
        selected = true;
        counter++;
    } else {
        selected = false;
    }
}
/*
function change_value(id_object) {
    console.log(id_object);
    let item_object = document.getElementById(id_object).innerHTML = "2";

}*/

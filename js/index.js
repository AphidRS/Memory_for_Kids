window.onload = init();
window.onunload = () => sessionStorage.clear();

let counter = 0;
let selected = true;
let self = null;


function init() {
    for (let i = 1; i < 17; i++) {
        if(document.getElementById(i) != null) {
            document.getElementById(i).innerHTML = (Math.floor(Math.random() * 10 + 7));
        }      
    }
}

function select() {
    check();
    console.log(selected);
    if (selected === true) {
            document.body.addEventListener("click", (e)=>{  
            let self = e.target;
            let self_id = self.getAttribute("id");
            if (self_id != null) {
                if (self_id > 0 && self_id < 17) {
                    self.style.background = 'yellow';
                    setTimeout(restore_bg, 5000, self);
                }
            }
        })
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


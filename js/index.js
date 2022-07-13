window.onload=init();
let counter = 0;
let selected = true;


function init() {
    for (let i = 1; i < 17; i++) {
        if(document.getElementById(i) != null) {
            document.getElementById(i).innerHTML = (Math.floor(Math.random() * 10 + 7));
        }              
    }
}

function select() {
    document.body.addEventListener("click", (e)=>{
        check();
        if (selected=true) {
            let self = e.target;
            let self_id = self.getAttribute("id");
            if (self_id != null) {
                if (self_id > 0 && self_id < 17) {
                    self.style.background = 'yellow';
                    setTimeout(restore_bg, 5000);
            }
        }

    function restore_bg() {
        /*change_value(self_id);*/
        self.style.background = 'green';
        let self_id = null;
        counter--;
    }
}else {

}
})
}
function check() {
    counter++;
    if (counter < 3) {
        selected = true;
    } else {
        selected = false;
    }
}
/*
function change_value(id_object) {
    console.log(id_object);
    let item_object = document.getElementById(id_object).innerHTML = "2";

}*/


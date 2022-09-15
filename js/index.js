window.onunload = () => sessionStorage.clear();

var self = null;
var first = true;

function init() {
    let no_repeat = [];
    let numbers = randomize(no_repeat);
    for (let i = 0; i < 17; i++) { 
        if(document.getElementById("i" + i) != null) {
            document.getElementById("i" + i).innerHTML = numbers[i];
        }
    }
}

function randomize(no_repeat) {
    for (let i = 0; i < 17; i++) {
        let number = (Math.floor(Math.random() * 16) + 1);    
            if(no_repeat[i] != number) {
                no_repeat.push(number);
            }
    }
console.log(no_repeat);
return no_repeat;
}
 
function select() {
    document.body.addEventListener("click", (e)=>{
        var self = e.target;
        var self_id = self.getAttribute("id");
        if (self_id != null) {
            self.style.background = 'cyan';
            if (first == false) {
                if (last_id != null) {
                    var self_inner = document.getElementById(self_id).innerHTML;
                    var last_inner = document.getElementById(last_id).innerHTML;
                    console.log(self_inner);
                    console.log(last_inner);
                    if (self_inner == last_inner) {
                        console.log("last_id MATCH");
                        self.style.background = 'red'
                        last.style.background = 'red'
                    }
                    else {
                        console.log("last_id NO MATCH");
                        var last = self;
                        var last_id = self_id;
                    }
                }
                else {
                    console.log("last_id NULL");
                    
            
                }
                var last = self;
                var last_id = self_id;
            }
            first = false;
            var last = self;
            var last_id = self_id;
            if (self.style.background != 'red' || last.style.background != 'red') {
                setTimeout(restore_bg, 3000, self);
                setTimeout(restore_bg, 3000, last);
            }
        }
    }, false);
}

function restore_bg(self) {
    self.style.background = 'blue';
    let self_id = null;
}

/*
function select() {
    var self = null;
    var last = null;
    var last_id = null;
    var first = true;

    function subselect() { 
        document.body.addEventListener("click", (e)=>{change_bg(e)}, false);
    }

    function change_bg(e) {
        let self = e.target;
        let self_id = self.getAttribute("id");
        if (self_id != null) {
            self.style.background = 'cyan';
            if (first != true) {
                if (last_id != null) {
                    let self_inner = document.getElementById(self_id).innerHTML;
                    let last_inner = document.getElementById(last_id).innerHTML;
                    console.log(self_inner);
                    console.log(last_inner);
                    if (self_inner == last_inner) {
                        console.log("last_id MATCH");
                        self.style.background = 'red'
                        last.style.background = 'red'
                    }
                    else {
                        console.log("last_id NO MATCH");
                        setTimeout(restore_bg, 3000, self);
                        let last = self;
                        let last_id = self_id;
                    }
                }
                else {
                    console.log("last_id NULL");
                    setTimeout(restore_bg, 3000, self);
            
                }
                let last = self;
                let last_id = self_id;
            }
            first = false;
            let last = self;
            let last_id = self_id;
        }
    }
    function restore_bg(self) {
        self.style.background = 'blue';
        let self_id = null;
    }
}

function check(e) {
    let self = e.target;
    let self_id = self.getAttribute("id");
    if(document.getElementById(self_id) != null) {



        if(document.getElementById(self_id).style.background = 'white') {
            for (let i = 1; i < 17; i++) {
                if(document.getElementById("i" + [i]).style.background = 'white') {
                    self.style.background = 'red';
                    document.getElementById("i" + [i]).style.background = 'red';
                }  
            }
        }
    }
}



function change_value(id_object) {
    console.log(id_object);
    let item_object = document.getElementById(id_object).innerHTML = "2";
}*/

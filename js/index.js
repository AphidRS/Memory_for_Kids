

function select() {
    document.body.addEventListener("click", (e)=>{
    let self = e.target;
    let self_id = self.getAttribute("id");
    const old_bg = self.style.background;
    let valid = self_id.includes("item");
    console.log(self);
    console.log(valid);
    console.log(old_bg);

    if (valid) {
        self.style.background = 'yellow';
        setTimeout(restore_bg, 1000);
    }

    function restore_bg(){
        self.style.background = 'green';
    
    }
    })
}



/*
    let self = e.target;
    let self_string = self.toString();
    let old_bg = self.style.background;
    let valid = self_string.includes('item');
    console.log(self);
    console.log(self_string);
    console.log(valid);
*/

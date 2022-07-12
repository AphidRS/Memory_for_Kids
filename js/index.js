

function select() {
    document.body.addEventListener("click", (e)=>{
    let self = e.target;
    let self_id = self.getAttribute("id");
    if (self_id != null) {
        let valid = self_id.includes("item");
        if (valid) {
            self.style.background = 'yellow';
            setTimeout(restore_bg, 5000);
        }
    }
    
    function restore_bg(){
        self.style.background = 'green';
    
    }
    })
}


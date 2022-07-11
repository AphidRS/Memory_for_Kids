
function select() {
    document.body.addEventListener("click", (e)=>{ 
    let self = e.target;
    old_bg = self.style.background;
    self.style.background = self.style.background =='darkbrown';
    })


    /*
    setTimeout(function(){
        self.style.background = old_bg;
    }, 1000);
    /*
    setTimeout(function(){
        example.style.background = old_bg;
    }, 1000);*/
}




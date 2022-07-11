
function select() {
    document.body.addEventListener("click", (e)=>{ 
    let self = e.target;
    old_bg = self.style.background;
    /*console.log(self);*/
    self.style.background = self.style.background=='brown'? 'blue':'brown';
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




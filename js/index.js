
function select() {
    document.body.addEventListener("click", (e)=>{ 
    let self = e.target,
    old_bg = self.style.background;
    self.style.background = self.style.background =='yellow';
    })
    /*
    setTimeout(function(){
        self.style.background = old_bg;
    }, 1000);
 */
}




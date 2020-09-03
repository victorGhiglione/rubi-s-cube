
let interface = "?";
addEventListener('touchstart',()=>{
    interface="touch"
    
});
addEventListener("mousedown", () => {
    interface="mouse"
});


canvas.addEventListener("mousedown", () => {
    if (interface==="mouse"){
    mouseIsPressed = true;
}
});
canvas.addEventListener("mouseup", () => {
    if (interface==="mouse"){
    
        mouseIsPressed = false;
    
}
});


canvas.addEventListener("mousemove", function (e) {
    if (interface==="mouse"){
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
  });

let setInterActiv=0;
let compt = 0;
let compt2 = 0;
let temp = 1.2;
mouseIsPressed=false;

canvas.addEventListener('touchstart', (e) => {
    let xx=e.changedTouches[0].clientX;
    let yy=e.changedTouches[0].clientY;
    if (interface==="touch"){
        mouseX=xx;
        mouseY=yy;
        
        mouseIsPressed = true;
   
        setTimeout(()=>{
            
            
            if (dblClic === false & mouseIsPressed===true && dist(mouseX,mouseY,xx,yy) <= 10){
                console.log("mmmmmm")
                doubleClic();
                dblClic=true;
                mouseIsPressed=false;
            }
  }
  ,temp*1000);

}
});

canvas.addEventListener('touchmove', function (e) {
    if (interface==="touch"){
    mouseX = e.changedTouches[0].clientX;
    mouseY = e.changedTouches[0].clientY;
    //mouseIsPressed = true;
    compt2 = 0;
}

});

canvas.addEventListener('touchend', () => {
    if (interface==="touch"){
    mouseIsPressed = false;
    compt2 = 0;
    }

});
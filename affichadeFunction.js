

function cad(ctx, x1, y1, x2, y2, x3, y3, x4, y4) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.closePath();
}
function rubrfi(rfinal) {
  if (rfinal[5]) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(0,0,0,1)";
    cad(ctx, rfinal[0][0], rfinal[0][1], rfinal[1][0], rfinal[1][1], rfinal[2][0], rfinal[2][1], rfinal[3][0], rfinal[3][1]);
    ctx.stroke();
    ctx.closePath();

  } else {
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.stroke
    cad(ctx, rfinal[0][0], rfinal[0][1], rfinal[1][0], rfinal[1][1], rfinal[2][0], rfinal[2][1], rfinal[3][0], rfinal[3][1]);
    ctx.fill();
  }
}
function aInB(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (a === b[i]) {
      return true;
    }
  }
  return false
}
function recupereRGB(rgb2 = "") {
  let rgb = "a" + rgb2+""
  let r = 0;
  let g = 0;
  let b = 0;
  let t = 1;
  let inRGB = ["r", false];
  let chifre = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let val=0;
  for (let i = 0; i < rgb.length; i++) {
    if (aInB(rgb[i],chifre)){
let val2=0;
for (let i2=0; i2<chifre.length;i2++){
  if (rgb[i]===chifre[i2]){
    val2=i2
  }
}
if (inRGB[1]){
t*=10
val2/=t
}else{
  val*=10;
  
}
val+=val2;





    }else if(rgb[i]==="."){
      inRGB[1]=true;
      t=1;
    }else if(rgb[i]===","){
      inRGB[1]=false;
      
      if (inRGB[0]==="r"){
      r=val;
        inRGB[0]= "g"
        val=0; 
      }else  if (inRGB[0]==="g"){
      g =val; 
        inRGB[0]= "b"
        val=0; 
      }else if (inRGB[0]==="b"){
        b=val;
        val=0; 
      }
      
                
    }
    }
// rgb
if (b===0){
b=val;
}
return [r, g, b];

}
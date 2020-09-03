let b = "rgb(0, 0, 255)     ";
let v = "rgb(0, 255, 0)     ";
let o = "rgb(255,165,0)     ";
let j = "rgb(255, 255, 0)   ";
let r = "rgb(255, 0, 0)     ";
let blanc = "rgb(255,255,255)";

let dblClic = false;

let r3x3 = new rubiks(
  [
    [
      ["blanc", "blanc", "blanc"],
      ["blanc", "blanc", "blanc"],
      ["blanc", "blanc", "blanc"],
    ],
    [
      ["r", "r", "r"],
      ["r", "r", "r"],
      ["r", "r", "r"],
    ],
    [
      ["j", "j", "j"],
      ["j", "j", "j"],
      ["j", "j", "j"],
    ],
    [
      ["o", "o", "o"],
      ["o", "o", "o"],
      ["o", "o", "o"],
    ],
    [
      ["v", "v", "v"],
      ["v", "v", "v"],
      ["v", "v", "v"],
    ],
    [
      ["b", "b", "b"],
      ["b", "b", "b"],
      ["b", "b", "b"],
    ],
  ],
  blanc,
  r,
  j,
  o,
  v,
  b
);

let mouseX2 = 100;
let mouseY2 = 100;

let abc = [[0], [180], 0];
let X = 0;
let Y = 0;
let outil = "aff";
let rfinal = [1, 1, 1, 1, 1, true];
let c;
let rub = r3x3.affisage(abc[0], abc[1], abc[2], "deg");
let r2 = 0;
let v2 = 0;
let b2 = 0;
let col = [0, 0, 0];
function repet() {
  rub = r3x3.affisage(abc[0], abc[1], abc[2], "deg");
  rubrfi(rfinal);
  if (outil === "aff") {
    c = rub.length - 1;
    rfinal = [rub[c][0], rub[c][1], rub[c][2], rub[c][3], rub[c][5], true];

    for (let i = rub.length - 1; i >= 0; i--) {
      let vf;
      if (i >= rub.length - 3) {
        vf = true;
      } else {
        vf = false;
      }
      let a = rub[i][0];
      let b = rub[i][1];
      let c = rub[i][2];
      let d = rub[i][3];
      let position = rub[i][5];
      if (
        Math.abs(
          dist(
            (a[0] + b[0] + c[0] + d[0]) / 4,
            (a[1] + b[1] + c[1] + d[1]) / 4,
            mouseX,
            mouseY
          )
        ) <=
        Math.abs(
          dist(
            (rfinal[0][0] + rfinal[1][0] + rfinal[2][0] + rfinal[3][0]) / 4,
            (rfinal[0][1] + rfinal[1][1] + rfinal[2][1] + rfinal[3][1]) / 4,
            mouseX,
            mouseY
          )
        )
      ) {
        rfinal = [a, b, c, d, position, vf];
      }
    }
    if (pmouseIsPressed === false && mouseIsPressed) {
      X = -2 * trouveAngle(500 / 2, 500 / 2, 500, mouseY, "deg");
      Y = -2 * trouveAngle(500 / 2, 500 / 2, mouseX, 500, "deg");

      abc[0].push(X - -2 * trouveAngle(500 / 2, 500 / 2, 500, mouseY, "deg"));
      abc[1].push(Y - -2 * trouveAngle(500 / 2, 500 / 2, mouseX, 500, "deg"));
    } else if (mouseIsPressed) {
      abc[0][abc[0].length - 1] =
        X - -2 * trouveAngle(500 / 2, 500 / 2, 500, mouseY, "deg");
      abc[1][abc[1].length - 1] =
        Y - -2 * trouveAngle(500 / 2, 500 / 2, mouseX, 500, "deg");
    }
  } else if (outil === "modif") {
    let disrec = 10;
    c = rub.length - 1;
    rfinal = [rub[c][0], rub[c][1], rub[c][2], rub[c][3], rub[c][5]];
    //console.log(disrec)
    for (let i = rub.length - 1; i >= 0; i--) {
      let on = false;
      if (i > rub.length - 4) {
        on = true;
      }

      let a = rub[i][0];
      let b = rub[i][1];
      let c = rub[i][2];
      let d = rub[i][3];
      let position = rub[i][5];

      if (
        Math.abs(
          dist(
            (a[0] + b[0] + c[0] + d[0]) / 4,
            (a[1] + b[1] + c[1] + d[1]) / 4,
            mouseX2,
            mouseY2
          )
        ) <=
        Math.abs(
          dist(
            (rfinal[0][0] + rfinal[1][0] + rfinal[2][0] + rfinal[3][0]) / 4,
            (rfinal[0][1] + rfinal[1][1] + rfinal[2][1] + rfinal[3][1]) / 4,
            mouseX2,
            mouseY2
          )
        )
      ) {
        rfinal = [a, b, c, d, position, on];
      }
    }

    ctx.fillStyle = "rgba(40,40,220,0.7)";
    ctx.fillRect(mouseX2 - 100, mouseY2 - 140, 200, 100);
    if (mouseIsPressed) {
      if (
        mouseX < mouseX2 - 100 + disrec ||
        mouseX > mouseX2 + 100 + disrec ||
        mouseY < mouseY2 - 140 + disrec ||
        mouseY > mouseY2 - 40 + disrec
      ) {
        X = -2 * trouveAngle(500 / 2, 500 / 2, 500, mouseY, "deg");
        Y = -2 * trouveAngle(500 / 2, 500 / 2, mouseX, 500, "deg");
        outil = "aff";
        dblClic = false;
      }
    } //////////////////////////////////////

    let ndf = 0;
    if (rfinal[5]) {
      r2 = col[0];
      v2 = col[1];
      b2 = col[2];
      console.log(col);
      let r = 0;
      let v = 0;
      let b = 0;
      for (let i = 0; i < 200 - disrec * 2 - (40 + disrec); i++) {
        r = (255 * i) / (200 - disrec * 2 - (40 + disrec));
        for (let i2 = 0; i2 < 100 - disrec * 2; i2++) {
          v = (255 * i2) / (100 - disrec * 2);
          ctx.fillStyle = "rgba(" + r + "," + v + "," + b2 + ",1)";
          ctx.fillRect(
            mouseX2 - 100 + i + disrec,
            mouseY2 - 140 + i2 + disrec,
            1,
            1
          );
          if (mouseIsPressed) {
            if (
              mouseX >= mouseX2 - 100 + i + disrec * 2 &&
              mouseX <= mouseX2 - 100 + i + disrec * 2 + 1
            ) {
              if (
                mouseY >= mouseY2 - 140 + i2 + disrec * 2 &&
                mouseY <= mouseY2 - 140 + i2 + disrec * 2 + 1
              ) {
                r2 = r;
                v2 = v;
              }
            }
          }
        }
      }
      ////////////////////////////////////////////
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.fillStyle = "rgba(" + r2 + "," + v2 + "," + b2 + ",0.7)";
      ctx.beginPath();
      ctx.arc(
        mouseX2 -
          100 +
          (r2 / 255) * (200 - disrec * 2 - (40 + disrec)) +
          disrec,
        mouseY2 - 140 + (v2 / 255) * (100 - disrec * 2) + disrec,
        8,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      for (let i = 0; i < 100 - disrec * 2; i++) {
        b = (i * 255) / (100 - disrec * 2);
        ctx.fillStyle = "rgba(" + r2 + "," + v2 + "," + b + ",1)";
        ctx.fillRect(
          mouseX2 - 100 + (200 - 0) - (40 + disrec),
          mouseY2 - 140 + i + disrec,
          40,
          1
        );
        if (mouseIsPressed) {
          if (
            mouseX >= mouseX2 - 100 + (200 - 0) - 40 &&
            mouseX <= mouseX2 - 100 + (200 - 0) - 40 + 40
          ) {
            if (
              mouseY >= mouseY2 - 140 + i + disrec * 2 &&
              mouseY <= mouseY2 - 140 + i + disrec * 2 + 1
            ) {
              b2 = b;
            }
          }
        }
      }
      //  255 - (i * 255) / (100 - (disrec * 2))
      //i=
      // mouseY2 - 140 + -(b2/255-255*(100 - (disrec * 2))) + disrec
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(
        mouseX2 - 100 + (200 - 0) - (40 + disrec) - disrec / 2,
        mouseY2 - 140 + (b2 / 255) * (100 - disrec * 2) + disrec
      );
      ctx.lineTo(
        mouseX2 - 100 + (200 - 0) - (40 + disrec) + disrec / 2 + 40,
        mouseY2 - 140 + (b2 / 255) * (100 - disrec * 2) + disrec
      );

      ctx.closePath();
      ctx.stroke();
      col = [r2, v2, b2];

      if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "blanc"
      ) {
        r3x3.blanc = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      } else if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "r"
      ) {
        r3x3.r = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      } else if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "o"
      ) {
        r3x3.o = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      } else if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "v"
      ) {
        r3x3.v = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      } else if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "b"
      ) {
        r3x3.b = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      } else if (
        r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "j"
      ) {
        r3x3.j = "rgba(" + r2 + "," + v2 + "," + b2 + ",1)";
      }
    } else {
      let color;
      for (let i = 0; i < 3; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
          ndf++;
          //    "rgb(255, 255, 255)";  "rgb(255, 0, 0)";   "rgb(255, 255, 0)";  "rgb(255,165,0)";  "rgb(0, 255, 0)";  "rgb(0, 0, 255)";
          if (ndf === 1) {
            ctx.fillStyle = r3x3.blanc;
            color = "blanc";
          } else if (ndf === 2) {
            ctx.fillStyle = r3x3.r;
            color = "r";
          } else if (ndf === 3) {
            ctx.fillStyle = r3x3.j;
            color = "j";
          } else if (ndf === 4) {
            ctx.fillStyle = r3x3.o;
            color = "o";
          } else if (ndf === 5) {
            ctx.fillStyle = r3x3.v;
            color = "v";
          } else if (ndf === 6) {
            ctx.fillStyle = r3x3.b;
            color = "b";
          }
          ctx.fillRect(
            mouseX2 - 100 + ((200 - disrec * 4) * i) / 3 + disrec * (i + 1),
            mouseY2 - 140 + ((100 - disrec * 3) * i2) / 2 + disrec * (i2 + 1),
            (200 - disrec * 4) / 3,
            (100 - disrec * 3) / 2
          );

          if (mouseIsPressed) {
            if (
              mouseX >
                mouseX2 -
                  100 +
                  ((200 - disrec * 4) * i) / 3 +
                  disrec * (i + 1) &&
              mouseX <
                mouseX2 -
                  100 +
                  ((200 - disrec * 4) * i) / 3 +
                  disrec * (i + 1) +
                  (200 - disrec * 4) / 3
            ) {
              if (
                mouseY >
                  mouseY2 -
                    140 +
                    ((100 - disrec * 3) * i2) / 2 +
                    disrec * (i2 + 1) &&
                mouseY <
                  mouseY2 -
                    140 +
                    ((100 - disrec * 3) * i2) / 2 +
                    disrec * (i2 + 1) +
                    (100 - disrec * 3) / 2
              ) {
                r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][
                  rfinal[4][2]
                ] = color;
                X = -2 * trouveAngle(500 / 2, 500 / 2, 500, mouseY, "deg");
                Y = -2 * trouveAngle(500 / 2, 500 / 2, mouseX, 500, "deg");
                outil = "aff";
                dblClic = false;
              }
            }
          }
        }
      }
    }
    ctx.fillStyle = "rgba(40,40,220,0.7)";
    ctx.beginPath();
    ctx.moveTo(mouseX2 - 20, mouseY2 - 40);
    ctx.lineTo(mouseX2, mouseY2);
    ctx.lineTo(mouseX2 + 20, mouseY2 - 40);
    ctx.closePath();
    ctx.fill();
  }

  //rub = r3x3.affisage(abc[0], abc[1], abc[2], "deg");

  pmouseIsPressed = mouseIsPressed;
  requestAnimationFrame(repet);
}

requestAnimationFrame(repet);

function doubleClic() {
  col = null;
  if (r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "blanc") {
    col = r3x3.blanc;
  } else if (
    r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "r"
  ) {
    col = r3x3.r;
  } else if (
    r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "o"
  ) {
    col = r3x3.o;
  } else if (
    r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "v"
  ) {
    col = r3x3.v;
  } else if (
    r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "b"
  ) {
    col = r3x3.b;
  } else if (
    r3x3.rubikSCube[rfinal[4][0]][rfinal[4][1]][rfinal[4][2]] === "j"
  ) {
    col = r3x3.j;
  }
  //col="255,255,254.999"
  col = recupereRGB(col);
  mouseX2 = mouseX;
  mouseY2 = mouseY;
  //r3x3.u(2);
  if (outil === "modif") {
    outil = "aff";
  } else {
    outil = "modif";
  }
}
addEventListener("dblclick", () => {
  doubleClic();
});

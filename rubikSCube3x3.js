

class rubiks {

  

  constructor(x, blanc, r, j, o, v, b) {
    this.rubikSCube = x;
    this.blanc = blanc;
    this.r = r;
    this.j = j;
    this.o = o;
    this.v = v;
    this.b = b;
  }

  u(i = 0) {


    let btext = "" + this.rubikSCube[5][0][0] + "" + this.rubikSCube[5][0][1] + "" + this.rubikSCube[5][0][2] + "c";
    let b = this.rubikSCube[5];

    let rtext = "" + this.rubikSCube[1][0][0] + "" + this.rubikSCube[1][0][1] + "" + this.rubikSCube[1][0][2] + "c";
    let r = this.rubikSCube[1];

    let vtext = "" + this.rubikSCube[4][0][0] + "" + this.rubikSCube[4][0][1] + "" + this.rubikSCube[4][0][2] + "c";
    let v = this.rubikSCube[4];

    let otext = "" + this.rubikSCube[3][0][0] + "" + this.rubikSCube[3][0][1] + "" + this.rubikSCube[3][0][2] + "c";
    let o = this.rubikSCube[3];

    b[0] = rtext[0];
    b[1] = rtext[1];
    b[2] = rtext[2];


  }
  /*u2
  d
  d2
  r
  r2
  l
  l2
  f
  f2
  b
  b2*/


  /*[
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
  ], */
  affisage(rotaX, rotaY, rotaZ, degRad = "rad") {

    let faceCad = [];
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, 500, 500);
    let dimention = 500;
    let d = Math.sqrt(dimention * dimention / 3);
    let xy1 = (500 - d) / 2;
    let rotaX2 = 0;
    let rotaY2 = 0;
    for (let i = 0; i < this.rubikSCube.length; i++) {
      if (i === 0) {
        if (degRad === "deg") {
          rotaX2 = 90;
        } else {
          rotaX2 = Math.PI / 2;
        }
      }
      if (i === 1) {
        if (degRad === "deg") {
          rotaX2 = 0;
        } else {
          rotaX2 = 0;
        }
      }
      if (i === 2) {
        if (degRad === "deg") {
          rotaX2 = -90;
        } else {
          rotaX2 = -Math.PI / 2;
        }
      }
      if (i === 3) {
        if (degRad === "deg") {
          rotaX2 = 180;
        } else {
          rotaX2 = Math.PI;
        }
      }
      if (i === 4) {
        if (degRad === "deg") {
          rotaY2 = -90;
        } else {
          rotaY2 = -Math.PI / 2;
        }
      }
      if (i === 5) {
        if (degRad === "deg") {
          rotaY2 = 90;
        } else {
          rotaY2 = Math.PI / 2;
        }
      }
      for (let i2 = 0; i2 < this.rubikSCube[i].length; i2++) {
        for (let i3 = 0; i3 < this.rubikSCube[i][i2].length; i3++) {
          let color;
          if (this.rubikSCube[i][i2][i3] === "blanc") {
            color = this.blanc;
          } else if (this.rubikSCube[i][i2][i3] === "r") {
            color = this.r;
          } else if (this.rubikSCube[i][i2][i3] === "j") {
            color = this.j;
          } else if (this.rubikSCube[i][i2][i3] === "o") {
            color = this.o;
          } else if (this.rubikSCube[i][i2][i3] === "v") {
            color = this.v;
          } else if (this.rubikSCube[i][i2][i3] === "b") {
            color = this.b;
          }
          let xx = xy1;
          let xyz1 = [(i3 * d) / 3 + xy1, (i2 * d) / 3 + xy1, xx];
          let xyz2 = [(i3 * d) / 3 + d / 3 + xy1, (i2 * d) / 3 + xy1, xx];
          let xyz3 = [
            (i3 * d) / 3 + d / 3 + xy1,
            (i2 * d) / 3 + d / 3 + xy1,
            xx,
          ];
          let xyz4 = [(i3 * d) / 3 + xy1, (i2 * d) / 3 + d / 3 + xy1, xx];

          xyz1[2] = rotation(
            dimention / 2,
            dimention / 2,
            xyz1[2],
            xyz1[1],
            rotaX2,
            degRad
          );
          xyz2[2] = rotation(
            dimention / 2,
            dimention / 2,
            xyz2[2],
            xyz2[1],
            rotaX2,
            degRad
          );
          xyz3[2] = rotation(
            dimention / 2,
            dimention / 2,
            xyz3[2],
            xyz3[1],
            rotaX2,
            degRad
          );
          xyz4[2] = rotation(
            dimention / 2,
            dimention / 2,
            xyz4[2],
            xyz4[1],
            rotaX2,
            degRad
          );

          xyz1 = [xyz1[0], xyz1[2][1], xyz1[2][0]];
          xyz2 = [xyz2[0], xyz2[2][1], xyz2[2][0]];
          xyz3 = [xyz3[0], xyz3[2][1], xyz3[2][0]];
          xyz4 = [xyz4[0], xyz4[2][1], xyz4[2][0]];

          xyz1[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz1[0],
            xyz1[2],
            rotaY2,
            degRad
          );
          xyz2[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz2[0],
            xyz2[2],
            rotaY2,
            degRad
          );
          xyz3[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz3[0],
            xyz3[2],
            rotaY2,
            degRad
          );
          xyz4[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz4[0],
            xyz4[2],
            rotaY2,
            degRad
          );

          xyz1 = [xyz1[0][0], xyz1[1], xyz1[0][1]];
          xyz2 = [xyz2[0][0], xyz2[1], xyz2[0][1]];
          xyz3 = [xyz3[0][0], xyz3[1], xyz3[0][1]];
          xyz4 = [xyz4[0][0], xyz4[1], xyz4[0][1]];

          xyz1[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz1[0],
            xyz1[1],
            rotaZ,
            degRad
          );
          xyz2[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz2[0],
            xyz2[1],
            rotaZ,
            degRad
          );
          xyz3[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz3[0],
            xyz3[1],
            rotaZ,
            degRad
          );
          xyz4[0] = rotation(
            dimention / 2,
            dimention / 2,
            xyz4[0],
            xyz4[1],
            rotaZ,
            degRad
          );

          xyz1 = [xyz1[0][0], xyz1[0][1], xyz1[2]];
          xyz2 = [xyz2[0][0], xyz2[0][1], xyz2[2]];
          xyz3 = [xyz3[0][0], xyz3[0][1], xyz3[2]];
          xyz4 = [xyz4[0][0], xyz4[0][1], xyz4[2]];

          for (let xy = 0; xy < rotaY.length; xy++) {
            xyz1[2] = rotation(
              dimention / 2,
              dimention / 2,
              xyz1[2],
              xyz1[1],
              rotaX[xy],
              degRad
            );
            xyz2[2] = rotation(
              dimention / 2,
              dimention / 2,
              xyz2[2],
              xyz2[1],
              rotaX[xy],
              degRad
            );
            xyz3[2] = rotation(
              dimention / 2,
              dimention / 2,
              xyz3[2],
              xyz3[1],
              rotaX[xy],
              degRad
            );
            xyz4[2] = rotation(
              dimention / 2,
              dimention / 2,
              xyz4[2],
              xyz4[1],
              rotaX[xy],
              degRad
            );

            xyz1 = [xyz1[0], xyz1[2][1], xyz1[2][0]];
            xyz2 = [xyz2[0], xyz2[2][1], xyz2[2][0]];
            xyz3 = [xyz3[0], xyz3[2][1], xyz3[2][0]];
            xyz4 = [xyz4[0], xyz4[2][1], xyz4[2][0]];

            xyz1[0] = rotation(
              dimention / 2,
              dimention / 2,
              xyz1[0],
              xyz1[2],
              rotaY[xy],
              degRad
            );
            xyz2[0] = rotation(
              dimention / 2,
              dimention / 2,
              xyz2[0],
              xyz2[2],
              rotaY[xy],
              degRad
            );
            xyz3[0] = rotation(
              dimention / 2,
              dimention / 2,
              xyz3[0],
              xyz3[2],
              rotaY[xy],
              degRad
            );
            xyz4[0] = rotation(
              dimention / 2,
              dimention / 2,
              xyz4[0],
              xyz4[2],
              rotaY[xy],
              degRad
            );

            xyz1 = [xyz1[0][0], xyz1[1], xyz1[0][1]];
            xyz2 = [xyz2[0][0], xyz2[1], xyz2[0][1]];
            xyz3 = [xyz3[0][0], xyz3[1], xyz3[0][1]];
            xyz4 = [xyz4[0][0], xyz4[1], xyz4[0][1]];
          }
          faceCad.push([xyz1, xyz2, xyz3, xyz4, color, [i, i2, i3]]);
        }
      }
    }
    for (let ii = faceCad.length - 9; ii >= 3 * 3 * 3; ii -= 9) {
      let y = 0;
      let r =
        faceCad[4][0][2] +
        faceCad[4][1][2] +
        faceCad[4][2][2] +
        faceCad[4][3][2];
      for (let i = 0; i <= ii; i += 9) {
        let r2 =
          faceCad[i + 4][0][2] +
          faceCad[i + 4][1][2] +
          faceCad[i + 4][2][2] +
          faceCad[i + 4][3][2];
        if (r2 > r) {
          y = i;
          r = r2;
        }
      }
      let x = faceCad[ii];
      faceCad[ii] = faceCad[y];
      faceCad[y] = x;

      x = faceCad[ii + 1];
      faceCad[ii + 1] = faceCad[y + 1];
      faceCad[y + 1] = x;

      x = faceCad[ii + 2];
      faceCad[ii + 2] = faceCad[y + 2];
      faceCad[y + 2] = x;

      x = faceCad[ii + 3];
      faceCad[ii + 3] = faceCad[y + 3];
      faceCad[y + 3] = x;

      x = faceCad[ii + 4];
      faceCad[ii + 4] = faceCad[y + 4];
      faceCad[y + 4] = x;

      x = faceCad[ii + 5];
      faceCad[ii + 5] = faceCad[y + 5];
      faceCad[y + 5] = x;

      x = faceCad[ii + 6];
      faceCad[ii + 6] = faceCad[y + 6];
      faceCad[y + 6] = x;

      x = faceCad[ii + 7];
      faceCad[ii + 7] = faceCad[y + 7];
      faceCad[y + 7] = x;

      x = faceCad[ii + 8];
      faceCad[ii + 8] = faceCad[y + 8];
      faceCad[y + 8] = x;
    }


    for (let i = 0; i < 3 * 3 * 3; i++) {
      faceCad = sup(faceCad, 0);
    }


    for (let i = 0; i < faceCad.length; i++) {
      ctx.fillStyle = faceCad[i][4];
      //faceCad = sup(faceCad, 4);
      cad(
        ctx,
        faceCad[i][0][0],
        faceCad[i][0][1],
        faceCad[i][1][0],
        faceCad[i][1][1],
        faceCad[i][2][0],
        faceCad[i][2][1],
        faceCad[i][3][0],
        faceCad[i][3][1]
      );

      ctx.fill();
    }
    var centre = [faceCad[4 + 9 * 2], faceCad[4 + 9], faceCad[4]];
    faceCad = sup(faceCad, 4 + 9 * 2);
    faceCad = sup(faceCad, 4 + 9);
    faceCad = sup(faceCad, 4);

    faceCad.push(centre[0])
    faceCad.push(centre[1])
    faceCad.push(centre[2])
    return faceCad
  }
}



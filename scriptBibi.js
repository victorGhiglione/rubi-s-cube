function rotationCreate(x, y, d, r, degRad = "rad") {
  if (degRad === "rad") {
    y = y + Math.sin(r) * d;
    x = x + Math.cos(r) * d;
    return [x, y];
  } else if (degRad === "deg") {
    y = y + Math.sin((Math.PI * r) / 180) * d;
    x = x + Math.cos((Math.PI * r) / 180) * d;
    return [x, y];
  } else {
    console.log("rotation en deg ou rad le rad est par defo");
    y = y + Math.sin(r) * d;
    x = x + Math.cos(r) * d;
    return [x, y];
  }
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function trouveAngle(xc, yc, x, y, degRad = "rad") {
  var r = 0;
  if (degRad === "rad") {
    r = Math.acos((x - xc) / dist(xc, yc, x, y));
  } else if (degRad === "deg") {
    r = (Math.acos((x - xc) / dist(xc, yc, x, y)) * 180) / Math.PI;
  } else {
    console.log("trouveAngle en deg ou le rad rad est par defo");
    return 0;
  }
  if (y - yc < 0) {
    r = -r;
  }
  return r;
}

function rotation(xc, yc, x, y, a, degRad = "rad") {
  return rotationCreate(
    xc,
    yc,
    dist(xc, yc, x, y),
    a + trouveAngle(xc, yc, x, y, degRad),
    degRad
  );
}

function someTab(t) {
  r = 0;
  for (let i = 0; i < t.length; i++) {
    r += t[i];
  }
  return r;
}


function dist3D(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));

}



function sup(tab = [], val) {
  let r = [];
  for (let i = 0; i < val; i++) {
    r.push(tab[i]);
  }
  for (let i = val + 1; i < tab.length; i++) {
    r.push(tab[i]);
  }
  return r
}
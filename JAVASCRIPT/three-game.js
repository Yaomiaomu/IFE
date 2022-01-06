let num = 100;
let s = ""
for (let x = 1; x <= num; x++) {
  if (x % 3 === 0) {
    s += "PA";
  } else {
    s += x;
  }
  if (x < num) {
    s += ",";
  }
}

console.log(s);
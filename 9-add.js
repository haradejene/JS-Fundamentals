const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);

function add(a, b) {
  return a + b;
}

if (isNaN(x) || isNaN(y)) {
  console.log("NaN");
} else {
  console.log(add(x, y));
}

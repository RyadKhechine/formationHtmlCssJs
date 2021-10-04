let nombre = parseInt(prompt("Entre un nombre"));

for (let i = 1; i <= nombre; i++) {
  //i++ ou nombre.lenthg

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

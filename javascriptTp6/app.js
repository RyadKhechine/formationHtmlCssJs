let nombre = "";

while (nombre < 1 || nombre > 3) {
  nombre = prompt("Entre ton nombre");
  if (nombre < 1 || nombre > 3) {
    alert("valeur incorrect");
  } else {
    alert("valeur correct");
  }
}

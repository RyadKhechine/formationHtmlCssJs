let nombre = 0;

while (nombre < 10 || nombre > 20) {
  nombre = prompt("Entre un nombre");
  if (nombre < 10) {
    alert("plus grand");
  } else if (nombre > 20) {
    alert("plus petit");
  } else {
    alert("Vous avez trouvé le nombre");
  }
}

// const nbrDeCases = parseInt(prompt("Entre le nombre de case"));

// const tb1 = [];
// const tb2 = [];
// const tb3 = [];

// for (let i = 0; i < nbrDeCases; i++) {
//   tb1[i] = parseInt(prompt("remplir le tableau 1"));
//   console.log(`tableau 1: ${tb1[i]}`);
// }

// for (let i = 0; i < nbrDeCases; i++) {
//   tb2[i] = parseInt(prompt("remplir le tableau 2"));
//   console.log(`tableau 2: ${tb2[i]}`);
// }
// for (let i = 0; i < nbrDeCases; i++) {
//   tb3[i] = parseInt(prompt("remplir le tableau 3"));
//   console.log(`tableau 3: ${tb3[i]}`);
// }

const tailleMatrice = parseInt(
  prompt("Veuillez entrer la taille de la matrice")
);

const matrice = [];
let sommeDiagonal = 0;

// ici tu declare une matrice vide
for (let i = 0; i < tailleMatrice; i++) {
  //si user saisie 3 on cree 3 tab vide
  matrice[i] = [];
}

//ici on remplit chaque tab avec ce que entre lutilisateur
for (let i = 0; i < tailleMatrice; i++) {
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i][j] = parseInt(prompt("saisez les nombres de la matrice"));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  sommeDiagonal += matrice[i][i];
}
console.log(`La matrice est matrice = [ ${matrice} ]`);
console.log(`sommme de la diagonale est : ${sommeDiagonal}`);

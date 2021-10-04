const tailleMatrice = parseInt(
  prompt("Veuillez entrer la taille de la matrice")
);

const matrice = []; //declare matrice a vide
let somme1 = 0;
let somme2 = 0; // les 2 sommes pour les diagonales
for (let i = 0; i < tailleMatrice; i++) {
  matrice[i] = []; // ici on cree la matrice vide
}

for (let i = 0; i < tailleMatrice; i++) {
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i][j] = parseInt(prompt("saisez les nombres de la matrice"));
  } // ici on la remplit avec les 2 boucles j et i
}

for (let i = 0; i < tailleMatrice; i++) {
  somme1 += matrice[i][i]; // 1er i c la lgine 2eme i c la colonne// ici on calcul la somme de la diagonal (pour les celule qui on le meme indice)
  somme2 += matrice[i][tailleMatrice - i - 1]; // on calcul la fin de la matrice a lenvers
}
console.log(`La matrice est matrice = [ ${matrice}]`);
console.log(`sommme de la diagonale 1 est : ${somme1}`);
console.log(`sommme de la diagonale 2 est : ${somme2}`);

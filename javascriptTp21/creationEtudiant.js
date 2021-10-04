function InscriptionEtudiant(
  nom,
  prenom,
  age,
  genre,
  pays,
  option,
  listeCours
) {
  (this.nom = nom),
    (this.prenom = prenom),
    (this.age = age),
    (this.genre = genre),
    (this.pays = pays),
    (this.option = option),
    (this.listeCours = listeCours);
}

const etudiants = [];
const nombreEtudiant = parseInt(prompt("Entre le nombre d'étudiant"));

for (let i = 1; i <= nombreEtudiant; i++) {
  const nom = prompt("Entre le nom");
  const prenom = prompt("Entre le prenom");
  const age = prompt("Entre l'age");
  const genre = prompt("Entre le genre ");
  const pays = prompt("Entre le pays");
  const option = prompt("Entre une option");
  //   const listeCours = ["math", "anglais", "etc"];
  const nbreCours = prompt("Nombre de cours :");

  const listeCours = [];

  for (let i = 0; i < nbreCours; i++) {
    listeCours.push(prompt("Entrez les cours"));
  }
  const etudiant = new InscriptionEtudiant(
    nom,
    prenom,
    age,
    genre,
    pays,
    option,
    listeCours
  );
  etudiants.push(etudiant);
}

for (let i = 0; i <= etudiants.length; i++) {
  console.log(etudiants[i]);
}

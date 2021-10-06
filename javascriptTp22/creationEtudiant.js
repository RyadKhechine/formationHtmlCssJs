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

const etudiants = [
  // etudiants.push(
  //   new InscriptionEtudiant("BOSSARD", "Benjamin", 26, "M", "France", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Dupont",
  //     "George",
  //     27,
  //     "M",
  //     "Russie",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Patterson",
  //     "Emma",
  //     28,
  //     "F",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Spencer",
  //     "Antoinette",
  //     29,
  //     "F",
  //     "Russie",
  //     "Maths",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Oreilly", "Marvin", 30, "M", "Chine", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Hall", "Christian", 31, "M", "Chine", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Porter",
  //     "Marcelo",
  //     32,
  //     "M",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("King", "Claudie", 33, "F", "Russie", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Bradley",
  //     "Nicolas",
  //     34,
  //     "M",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Ramos", "Olivier", 35, "M", "Russie", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Thomas", "Leondrea", 36, "F", "Chine", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Tirrel",
  //     "Sophie",
  //     37,
  //     "F",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Mitchell",
  //     "Keitha",
  //     38,
  //     "F",
  //     "Chine",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Allen", "Davina", 39, "F", "Chine", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Coleman",
  //     "Ernest",
  //     40,
  //     "M",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Weeb",
  //     "Justine",
  //     41,
  //     "F",
  //     "France",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant("Deegan", "Jimi", 42, "M", "Chine", "Maths", [
  //     "Maths",
  //     "techno",
  //     "Anglais",
  //   ])
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Nguyen",
  //     "Aurora",
  //     43,
  //     "F",
  //     "Russie",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
  // etudiants.push(
  //   new InscriptionEtudiant(
  //     "Winston",
  //     "Robert",
  //     26,
  //     "M",
  //     "Russie",
  //     "Informatique",
  //     ["Maths", "techno", "Anglais"]
  //   )
  // ),
];
const nombreEtudiant = parseInt(prompt("Entre le nombre d'étudiant"));

for (let i = 1; i <= nombreEtudiant; i++) {
  const nom = prompt("Entre le nom");
  const prenom = prompt("Entre le prenom");
  const age = prompt("Entre l'age");
  const genre = prompt("Entre le genre ");
  const pays = prompt("Entre le pays");
  const option = prompt("Entre une option");
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

InscriptionEtudiant.prototype.changeLeNom = function (nouveauNom) {
  return (this.nom = nouveauNom);
};
InscriptionEtudiant.prototype.changeLePrenom = function (nouveauPrenom) {
  return (this.prenom = nouveauPrenom);
};
InscriptionEtudiant.prototype.changeOption = function (changeOption) {
  return (this.option = changeOption);
};

const russes = [];

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Russie") {
    russes.push(etudiants[i]);
  }
}

let nbChinoise = 0;
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Chine" && etudiants[i].genre === "F") {
    nbChinoise++;
  }
}

const nomAAffiche = [];
for (let i = 0; i < etudiants.length; i++) {
  nomAAffiche.push(etudiants[i].nom);
}

const prenomFiniA = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].prenom[etudiants[i].prenom.length - 1] === "a") {
    prenomFiniA.push(etudiants[i]);
  }
}

const nomCommenceKEtFemme = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].nom[0] === "k" && etudiants[i].genre === "F") {
    nomCommenceKEtFemme.push(etudiants[i]);
  }
}

const nomCommenceMEtHomme = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].nom[0] === "M" && etudiants[i].genre === "H") {
    nomCommenceMEtHomme.push(etudiants[i]);
  }
}

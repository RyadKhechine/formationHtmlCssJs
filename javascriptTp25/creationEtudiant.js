const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const ageInput = document.querySelector("#age");
const genreInput = document.querySelector("#genre");
const paysInput = document.querySelector("#pays");
const optionInput = document.querySelector("#option");
const listeCoursInput = document.querySelector("#listeCours");

const formulaire = document.querySelector("#formulaire");
const etudiants = document.querySelector("#etudiants");

//création d'un tableau etudiants pour stocker les valeurs dedans
const tableauEtudiants = [];

// création de notre objet etudiant + (constructeur)
function EtudiantsRemplir(
  nom,
  prenom,
  age,
  genre,
  pays,
  option,
  listeDesCours
) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeDesCours = listeDesCours;
}

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  const tr = document.createElement("tr");

  const nom = document.createElement("td");
  nom.innerText = nomInput.value;

  const prenom = document.createElement("td");
  prenom.innerText = prenomInput.value;

  const age = document.createElement("td");
  age.innerText = ageInput.value;

  const genre = document.createElement("td");
  genre.innerText = genreInput.value;

  const pays = document.createElement("td");
  pays.innerText = paysInput.value;

  const option = document.createElement("td");
  option.innerText = optionInput.value;

  const listeDesCours = document.createElement("td");
  listeDesCours.innerText = listeCoursInput.value;

  etudiants.append(tr);
  tr.append(nom, prenom, age, genre, pays, option, listeDesCours);

  //création de l'étudiant avec les valeurs des input
  const newEtudiant = new EtudiantsRemplir(
    nomInput.value,
    prenomInput.value,
    ageInput.value,
    genreInput.value,
    paysInput.value,
    optionInput.value,
    listeCoursInput.value
  );
  tableauEtudiants.push(newEtudiant);
  console.log(tableauEtudiants);
});

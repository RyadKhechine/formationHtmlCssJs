let email = prompt("Entre un email");
let motDePasse = prompt("Entre un mot de passe");
let emailVerification = "";
let mmotDePasseVerification = "";

while (email != emailVerification || motDePasse != motDePasseVerification) {
  emailVerification = emailVerification = prompt("Entre ton email");
  motDePasseVerification = motDePasseVerification = prompt(
    "Entre ton mot de passe"
  );
  if (email == emailVerification && motDePasse == motDePasseVerification) {
    alert("Bienvenu dans votre espace client");
  } else {
    alert("Identifiant incorrect");
  }
}

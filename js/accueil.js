// récupérer le bouton
const elementBouton = document.getElementById("buttonSwitch");

// lui attribuer un eventlistener
elementBouton.addEventListener("click", function() {
    // récupérer le formulaire par son ID
    let elementForm = document.getElementById("inscriptionForm");
    // si la classe est hidden on remplace par une classe show
    if (elementForm.classList.contains("hidden")){
        elementForm.classList.replace("hidden", "show");
    }
    // sinon on remplace show par hidden
    else {
        elementForm.classList.replace("show", "hidden");
    }
});

// verifier si localstorage est vide ou pas
// s'il est vide on affiche la page d'accueil
// si non on affiche la page planning semaine
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify !== null) {
    document.location.href="./planningsemaine.html";
}

// puis créer le prototype de l'objet "utilisateurs"  contenant : id, type, nom, pin, avatar, couleur
function Users(id, type, nom, pin, avatar, couleur) {
    this.id = id;
    this.type = type;
    this.nom = nom;
    this.pin = pin;
    this.avatar = avatar;
    this.couleur = couleur;
}

// récupérer le bouton "valier"
const bouton2 = document.getElementById("boutonAccueilForm");

// lui ajouter un event listener "click"
// dans la fonction click, récupérer la valeur de chaque élément du formulaire dans des variables
bouton2.addEventListener("click", function() {

    let inputNom = document.getElementById("userName");
    let nom = inputNom.value;

    let inputPin = document.getElementById("password");
    let pin = inputPin.value;

    let avatar = "";
    for (let i=1; i<=12; i++) {
        const element = document.getElementById("avatar"+i);
        if (element.checked) {
            avatar = element.value;
            break;
        } 
    }

    let couleur = "";
    for (let i=1; i<=6; i++) {
        const element = document.getElementById("color"+i);
        if (element.checked) {
            couleur = element.value;
            break;
        }
    }

    // avec ça, on crée un objet "utilisateurs"
    let user1 = new Users (0, "parent", nom, pin, avatar, couleur);
    // cet objet on le sauvegarde dans le localstorage 
    localStorage.setItem("clef-user", JSON.stringify([user1]));
    localStorage.setItem("clef-task", JSON.stringify([]));

    // et on fait une redirection vers la page "calendrier semaine"
    document.location.href="./planningsemaine.html";

});

// pour le carousel :
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "inline-block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
} 
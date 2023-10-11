// ajouter un membre dans un formulaire

let nom = inputNom.value;
let inputNom = document.getElementById("userName");

let inputPin = document.getElementById("password");
let pin = inputPin.value;


// choix de l'avatar
let avatar = "";
for (let i=1; i<=12; i++) {
    const element = document.getElementById("avatar"+i);
    if (element.checked) {
        avatar = element.value;
        break;
    } 
}

//choix des couleurs
let couleur = "";
for (let i=1; i<=6; i++) {
    const element = document.getElementById("color"+i);
    if (element.checked) {
        couleur = element.value;
        break;
    }
}

// variable formulaire 

let mon-profilclass formerProfile = {
    let nom = inputNom.value;
    let pin = inputPin.value;
    let avatar = "";
    let couleur = "";
}

//variable validation du nouveau membre

let value = true;


//remplissage du rectangle
var canvas = document.getElementById("canvas2");
var context = canvas.getContext("2d");


var mon_profil = document.querySelector('validation_profil');
validation_profil.addEventListener('click', function(e) {
    var cascade = new Image();
    cascade.src = "tonimage.png";
    context.drawImage(cascade,0,0);
});




//dès qu'on clique sur valider, le profil s'affiche 



//affichage du rectangle



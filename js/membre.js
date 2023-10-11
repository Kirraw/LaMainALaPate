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

class formerProfile = {
    let nom = inputNom.value;
    let pin = inputPin.value;
    let avatar = "";
    let couleur = "";
}

//variable validation du nouveau membre

let value = true;














//function Users(id, type, nom, pin, avatar, couleur) 
    //{ this.id = id;
        this.type = type;
        this.nom = nom;
        this.pin = pin;
        this.avatar = avatar;
        this.couleur = couleur;//


// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

// le prototype de l'objet "utilisateurs"  contenant : id, nom, avatar, couleur
function Users(id, type, nom, pin, avatar, couleur) {
    this.id = id;
    this.type = type;
    this.nom = nom;
    this.pin = pin;
    this.avatar = avatar;
    this.couleur = couleur;
}

// récupérer le bouton "valier"
const bouton = document.getElementById("boutonForm");

// lui ajouter un event listener "click"
// dans la fonction click, récupérer la valeur de chaque élément du formulaire dans des variables
bouton.addEventListener("click", function() {

       let type = "utilisateur";

    let inputNom = document.getElementById("user");
    let nom = inputNom.value;

    let pin = "";
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

    // on récupère les données du tableau users
    let tableauUser = JSON.parse(localStorage.getItem("clef-user"));
    // on attribue un id de la longueur du tableau
    let id = tableauUser.length;
    // avec ça, on alimente le tableau Users d'un nouvel objet qui aura l'indice [1] (car le premier a l'indice [0]):
    let user = new Users (id, type, nom, pin, avatar, couleur);
    tableauUser.push(user);
    // cet objet on le sauvegarde dans le localstorage 
    localStorage.setItem("clef-user", JSON.stringify(tableauUser));
});



var canvas = document.getElementById('canvas1');
var contexte = canvas.getContent('2d');


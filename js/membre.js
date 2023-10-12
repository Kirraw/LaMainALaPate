// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

const listeMembres = document.getElementById("profil_membre");
const utilisateurs = JSON.parse(localStorage.getItem("clef-user"));
for (let utilisateur of utilisateurs) {
    // on doit créer un article par utilisateur <article>
    // const article = ce qu'il faut pour créer l'article
    const article = document.createElement("article");
    // on doit ajouter une class à l'<article>
    // article.classList.add ... + la suite
    article.classList.add("member");
    // on doit créer un titre 
    // const titre = ce qu'il faut pour créer un h2 par exemple <h2>
    const titre = document.createElement("h2");
    // on doit mettre le prénom de l'utilisateur dans le titre
    // titre.innerText = .... + la suite
    titre.innerText = "Membre : "+ utilisateur.nom;
    // on doit créer une image pour l'icone
    // const icone = ce qu'il faut pour créer l'icone <img>
    const icone = document.createElement("img");
    icone.classList.add("picture");
    // on doit définir l'attribut src de l'icone
    // icone.setAttribute("src", + la suite) le but est d'avoir <img src="le chemin de l'image">
    icone.setAttribute("src", "./Images/"+utilisateur.avatar+".png");

    // on doit créer une class pour le background
    article.classList.add("fond"+utilisateur.couleur);
    // on doit ajouter
    // on doit ajouter le titre dans l'article
    // article.apprend(titre)
    article.append(titre);
    // on doit ajouter l'image dans l'article
    // article.append(icone)
    article.append(icone);
    // on doit ajouter l'article dans la colonne "liste des membres"
    // listeMembres.append(article)
    listeMembres.append(article);
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

    // on récupère le PIN du parent
    let code = document.getElementById("password");
    // on récupère les données du tableau users
    let tableauUser = JSON.parse(localStorage.getItem("clef-user"));
    // comparer le PIN du 1er utilisateur du tableauUser avec le password saisi dans le formulaire
    // pour ca on crée une const 
    const premierUser = tableauUser[0];
    // puis if else 
    if (premierUser.pin === code.value) {
        // on attribue un id de la longueur du tableau
        let id = tableauUser.length;
        // avec ça, on alimente le tableau Users d'un nouvel objet qui aura l'indice [1] (car le premier a l'indice [0]):
        let user = new Users (id, type, nom, pin, avatar, couleur);
        tableauUser.push(user);
        // cet objet on le sauvegarde dans le localstorage 
        localStorage.setItem("clef-user", JSON.stringify(tableauUser));
        // on recharge la page pour afficher automatiquement les membres créés
        window.location.reload();
        } else {
            alert("Code PIN erroné !");
        }
});

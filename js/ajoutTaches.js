// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

// récupérer les utilisateurs pour s'en servir dans le formulaire
const listeAttributions = document.getElementById("attribution");
const utilisateurs = JSON.parse(localStorage.getItem("clef-user"));
// on l'insère dans les options de la liste déroulante du HTML
for (let utilisateur of utilisateurs) {
    const option = document.createElement("option");
    option.innerText = utilisateur.nom;
    listeAttributions.append(option);
}

// prototype de taches 
function Tasks(id, titre, jour, heure, attribution) {
    this.id = id;
    this.titre = titre;
    this.jour = jour;
    this.heure = heure;
    this.attribution = attribution;
}

// récupérer le bouton "valier"
const bouton = document.getElementById("submitTask");

// lui ajouter un event listener "click"
// dans la fonction click, récupérer la valeur de chaque élément du formulaire dans des variables
bouton.addEventListener("click", function(e) {
    e.preventDefault();
   
    let inputTitre = document.getElementById("taskName");
    let titre = inputTitre.value; 

    let inputJour = document.getElementById("taskDay");
    let jour = inputJour.value;

    let inputHeure = document.getElementById("hour");
    let heure = inputHeure.value;

    let inputAttribution = document.getElementById("attribution");
    let attribution = inputAttribution.value;

    // on récupère le PIN du parent
    let code = document.getElementById("pinCode");
    // on récupère les données des tableaux
    let tableauUser = JSON.parse(localStorage.getItem("clef-user"));
    // comparer le PIN du 1er utilisateur du tableauUser avec le password saisi dans le formulaire
    // pour ca on crée une const 
    const premierUser = tableauUser[0];
    // puis if else 
    if (premierUser.pin === code.value) {
        let tableauTask = JSON.parse(localStorage.getItem("clef-task"));
        // on attribue un id de la longueur du tableau
        let id = tableauTask.length;
        // avec ça, on alimente le tableau Task d'un nouvel objet qui aura l'indice [1] (car le premier a l'indice [0]):
        let task = new Tasks (id, titre, jour, heure, attribution);
        tableauTask.push(task);
        console.log(tableauTask);
        // cet objet on le sauvegarde dans le localstorage 
        localStorage.setItem("clef-task", JSON.stringify(tableauTask));
        // on recharge la page pour revenir à la création de taches
        window.location.reload();
    } else {
            alert("Code PIN erroné !");
        }

   });
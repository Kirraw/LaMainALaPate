// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

const utilisateurs = JSON.parse(localStorage.getItem("clef-user"));

// récupérer la liste des taches
const taches = JSON.parse(localStorage.getItem("clef-task"));

// fonction changeCouleur 
// function changeCouleur() {
    
// }

// afficher les taches dans le bon jour
for (let tache of taches) {
    const listeTache = document.getElementById(tache.jour);
    const article = document.createElement("article");
    article.classList.add("item");
    // article.setAttribute("onclick", "changeCouleur()");
    const div = document.createElement("div");
    div.classList.add("affichageTache");
    const titre = document.createElement("h4");
    titre.innerText = tache.titre;
    const heure = document.createElement("span");
    heure.innerText = tache.heure;
    div.append(titre);
    div.append(heure);
    const icone = document.createElement("img");
    icone.classList.add("picture");
    icone.setAttribute("src", "./Images/"+utilisateurs[tache.attribution].avatar+".png");
    article.classList.add("fond"+utilisateurs[tache.attribution].couleur);
    article.append(div);
    article.append(icone);
    listeTache.append(article);
}


let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

function Vignette(id, titre, couleur, avatar) {
    this.id = id;
    this.titre = titre;
    this.couleur = couleur;
    this.avatar = avatar;
}

function recupererDansLeLocalStorage(clef) {
    return JSON.parse(localStorage.getItem(clef));
}

function nouvelleIdTache() {
    let taches = localStorage.getItem("clef-task");
    return taches.length;
}

function creerTachesElement (TachesObjet) {
    let divTaches = document.createElement("div");
    divTaches.classList.add("taches");
    // divTaches.classList.add("bg-"+tachesObjet.couleur);
    let divLigne1 = document.createElement("div");
    divLigne1.classList.add("taches-ligne");
    let spanTitre = document.createElement("span");
    spanTitre.classList.add("taches-title");
    spanTitre.innerText = "Titre"+vignetteObjet.id;
    let spanPhoto = document.createElement("span");
    spanPhoto.classList.add("taches-photo");
    divLigne1.append(spanTitre);
    divLigne1.append(spanPhoto);
    let divLigne2 = document.createElement("div");
    // let input1 = document.createElement("input");
    // input1.setAttribute("type", "text");
    // input1.setAttribute("value","Un commentaire");
    divLigne2.append(input1);
    divTaches.append(divLigne1);
    divTaches.append(divLigne2);
    return divTaches;
}

function ajouterTachesDansDOM(tachesElement) {
    let taches = document.getElementById("lundi");
    taches.append(tachesElement);
}

function afficherTaches() {
    const tachesTableau = recupererDansLeLocalStorage("clef-task");
    for (let i=0; i < tachesTableau.length; i++) {
        let tachesElement = creerTachesElement(tachesTableau[i]);
        ajouterTachesDansDOM(tachesElement);
    }    
}

console.log(recupererDansLeLocalStorage ("clef-task"));



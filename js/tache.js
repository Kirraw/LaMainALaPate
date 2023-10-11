
// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

//Initialisation variables du formulaire
let newTask = document.querySelector("#newTask");
let taskName = document.querySelector("#taskName");
let taskDay = document.querySelector("#taskDay");
let hour = document.querySelector("#hour");
let radios = document.querySelectorAll('input[name="attribution"]');
let pinCode = document.querySelector("#pinCode");
let attribution = "";



//Initialisation objet "Tâches"  contenant : id, nom de tâche, jour, heure, personne attribuée, nom
function task (id, name, day, hour, attribut) {
    this.id = id;
    this.name = name;
    this.day = day;
    this.hour = hour;
    this.attribut = attribut;
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
console.log(taches);
}

function creerTachesElement () {
    let tableauUser = recupererDansLeLocalStorage("clef-user");
    let tableauTache = recupererDansLeLocalStorage("clef-task");
    let divTaches = document.createElement("div");
    divTaches.classList.add("taches");
    divTaches.classList.add("fond"+tableauUser[0].couleur);
    console.log(tableauUser[0].couleur);
    let divLigne1 = document.createElement("div");
    divLigne1.classList.add("taches-ligne");
    let spanTitre = document.createElement("span");
    spanTitre.classList.add("taches-title");
    spanTitre.innerText = "Titre"+tableauTache[0].name;
    console.log(tableauTache[0].name);
    let spanPhoto = document.createElement("span");
    spanPhoto.classList.add("taches-photo");
    divLigne1.append(spanTitre);
    // divLigne1.append(spanPhoto);
    // let divLigne2 = document.createElement("div");
    // // let input1 = document.createElement("input");
    // // input1.setAttribute("type", "text");
    // // input1.setAttribute("value","Un commentaire");
    // divLigne2.append(input1);
    divTaches.append(divLigne1);
    // divTaches.append(divLigne2);
    console.log(divTaches);
    return spanTitre;
}

function ajouterTachesDansDOM(tachesElement) {
    let taches = document.getElementById("task");
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

//Event pour boutton submit
newTask.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    for (const radio of radios){
        if (radio.checked){
            attribution = radio.id;
            break;
        }
    }
    let pinCheck = JSON.parse(localStorage.getItem("clef-user"));
    console.log(pinCheck[0]);
    if (pinCode.value == pinCheck[0].pin){
        let validatedTask = new task (0, taskName.value, hour.value, taskDay.value, attribution);
        localStorage.setItem("clef-task", JSON.stringify([validatedTask]));
        afficherTaches();
        // numTask++;
        document.location.href="./planningsemaine.html";            
    } else {
        display.innerHTML = `Code Pin incorrect`;
    }
            
}

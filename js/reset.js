// verifier si localstorage est vide
// si oui, renvoie à la page d'accueil
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

// const utilisateurs = JSON.parse(localStorage.getItem("clef-user"));

// récupérer le bouton
const bouton = document.getElementById("buttonReset");

bouton.addEventListener("click", function(e) {
    e.preventDefault();
    let inputCode = document.getElementById("pinCode");
    pin = inputCode.value;
    // on récupère le PIN du parent
    let code = document.getElementById("pinCode");
    // on récupère les données des tableaux
    let tableauUser = JSON.parse(localStorage.getItem("clef-user"));
    // comparer le PIN du 1er utilisateur du tableauUser avec le password saisi dans le formulaire
    // pour ca on crée une const 
    const premierUser = tableauUser[0];
    // puis if else 
    if (premierUser.pin === code.value) {
        localStorage.setItem("clef-task", JSON.stringify([]));
        alert("les tâches ont bien été supprimées");
    } else {
        alert("mot de passe non valide");
    }
});
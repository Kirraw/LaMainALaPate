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
let userName = document.querySelector("#userName");
let pinCode = document.querySelector("#pinCode");
let attribution = "";

//Initialisation objet "Tâches"  contenant : id, nom de tâche, jour, heure, personne attribuée, nom
function task (id, name, day, hour, attribut, userName, pinCode) {
    this.id = id;
    this.name = name;
    this.day = day;
    this.hour = hour;
    this.attribut = attribut;
    this.userName = userName;
    this.pinCode = pinCode;
}


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
    let nomCheck = JSON.parse(localStorage.getItem("clef-user"));
    
    console.log(test[0].nom); // A finir
    // if (userName.value == localStorage.getItem("clef-user")){
    //     if (pinCode.value == localStorage.getItem("clef-user")){
    //         let task0 = new task (0, taskName.value, hour.value, taskDay.value, attribution, userName.value, pinCode.value);
    //         localStorage.setItem("clef-task", JSON.stringify([task0]));
    //         document.location.href="./planningsemaine.html";
    //     } else {
    //         // mauvais pin
    //     }
    // } else {
    //     //mauvais nom d'utilisateur
    // }

}

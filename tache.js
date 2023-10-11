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
    
    if (pinCode.value == pinCheck[0].pin){
        let validatedTask = new task (numTask, taskName.value, hour.value, taskDay.value, attribution);
        localStorage.setItem("clef-task", JSON.stringify([validatedTask]));
        // numTask++;
        document.location.href="./planningsemaine.html";            
    } else {
        display.innerHTML = `Code Pin incorrect`;
    }

}

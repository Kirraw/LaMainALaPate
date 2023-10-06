// récupérer le bouton
const elementBouton = document.getElementById("buttonSwitch");

// lui attribuer un eventlistener
elementBouton.addEventListener("click", function(){
    // récupérer le formulaire par son ID
    let elementForm = document.getElementById("inscriptionForm");
    // si la classe est hidden on remplace par une classe show
    if (elementForm.classList.contains("hidden")){
        elementForm.classList.replace("hidden", "show");
    }
    // sinon on remplace show par hidden
    else {
        elementForm.classList.replace("show", "hidden");
    }

});
let verify = JSON.parse(localStorage.getItem("clef-user"));
if (verify == null) {
    document.location.href="./index.html";
}

function Users(id, type, nom, pin, avatar, couleur) {
    this.id = id;
    this.type = type;
    this.nom = nom;
    this.pin = pin;
    this.avatar = avatar;
    this.couleur = couleur;
}


function canvasFun(){
    var canvas = document.getElementById('canvas1');
if (canvas.getContext)
{var ctx = canvas.getContext('2d');
ctx.font = "12pt skullbones,Arial";
ctx.strokeStyle= "rgb(0,0,0)";
ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillStyle = "rgb(0,20,180)";
    ctx.strokeText("Exemple de texte", 10, 20);
    ctx.fillText("Autre exemple", 10, 60);

}
}
window.onload=canvasFun;



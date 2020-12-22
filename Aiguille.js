let Aiguille = function (taille){
    this.taille = taille + "px";
    this.div = document.createElement("div");
    this.div.style.height = this.taille;
    this.div.style.width = "0";
    this.div.style.position = "absolute";
    this.div.style.left = "300px";
    this.div.style.top = "100px";
    this.div.style.border = "1px solid black"
}

Aiguille.prototype.afficher = function (){
    let horloge = document.getElementById("horloge");
    horloge.appendChild(this.div);
}

export {Aiguille};
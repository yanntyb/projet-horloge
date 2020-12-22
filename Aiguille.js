let date = new Date();
console.log(date.getMinutes())

let Aiguille = function (taille,couleur,parent){
    this.taille = taille;
    this.couleur = couleur;
    if(this.taille === 250){
        this.deg = date.getSeconds() * 6;
    }else if(this.taille === 200){
        this.deg = date.getMinutes() * 6;
    }else if(this.taille === 150){
        this.deg = date.getHours() * 6;
    }
    this.parent = parent.div;
    this.div = document.createElement("div");
    this.div.style.height = this.taille + "px";
    this.div.style.width = "0";
    this.div.style.position = "absolute";
    this.div.style.left = "300px";
    this.div.style.top = 300 - this.taille + "px";
    this.div.style.border = "1px solid " + this.couleur;
    this.div.className = "aiguille";
    this.div.style.transformOrigin = "bottom";
    this.div.style.transform = "rotate(" + this.deg + "deg)";
}

Aiguille.prototype.afficher = function (){
    this.parent.prepend(this.div);
}

Aiguille.prototype.moveDiv = function (){
    // FIXME
    this.deg = (this.deg < 360) ? this.deg + 6: 6;
    this.div.style.transformOrigin = "bottom";
    this.div.style.transform = "rotate(" + this.deg + "deg)";
}

export {Aiguille};
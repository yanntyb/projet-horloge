let Horloge = function(){
    this.div = document.createElement("div");
    this.div.id = "horloge";
    this.cercleCentre = document.createElement("div");
    this.cercleCentre.id = "cercleCentre"
    this.div.append(this.cercleCentre);
}

Horloge.prototype.afficherCercle = function(){
    document.body.append(this.div);
}

export {Horloge};
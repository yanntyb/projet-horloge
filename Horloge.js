let Horloge = function(){
    this.div = document.createElement("div");
    this.div.id = "horloge";
}

Horloge.prototype.afficherCercle = function(){
    document.body.append(this.div);
}

export {Horloge};
let Horloge = function(){
    this.div = document.createElement("div");
    this.div.id = "horloge";
    this.cercleCentre = document.createElement("div");
    this.cercleCentre.id = "cercleCentre"
    this.div.append(this.cercleCentre);
}

Horloge.prototype.printNumber = function(max,taille){
    for(let i =0; i < max; i++){
        let div = document.createElement("div");
        div.style.position = "absolute"
        div.style.height = taille + "px";
        div.style.left = "295px";
        div.style.top = 300 - taille + "px";
        div.innerHTML = i;
        div.style.transformOrigin = "bottom";
        div.style.transform = "rotate(" + i* (360/max) + "deg)"
        div.style.textAlign = "center";
        this.div.append(div);
    }
}

Horloge.prototype.afficher = function(){
    this.printNumber(12,300);
    this.printNumber(60,270);
    document.body.append(this.div);
}


export {Horloge};
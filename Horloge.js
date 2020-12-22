let Horloge = function(){
    this.div = document.createElement("div");
    this.div.id = "horloge";
    this.cercleCentre = document.createElement("div");
    this.cercleCentre.id = "cercleCentre"
    this.div.append(this.cercleCentre);
}

Horloge.prototype.printNumber = function(max){
    for(let i =0; i < max; i++){
        console.log(i)
        let div = document.createElement("div");
        div.style.height = "300px";
        div.innerHTML = i;
        div.style.transformOrigin = "bottom";
        div.style.transform = "rotate(" + i * (60/max) + ")";
        this.div.append(div);
    }
}

Horloge.prototype.afficher = function(){
    this.printNumber(12);
    document.body.append(this.div);
}


export {Horloge};
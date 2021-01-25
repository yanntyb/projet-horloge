
//Definition du cercle central
let Horloge = function () {
    this.div = document.createElement("div");
    this.div.id = "horloge";
    this.cercleCentre = document.createElement("div");
    this.cercleCentre.id = "cercleCentre"
    this.div.append(this.cercleCentre);
}


//definition des nombres autour de l'horloge
Horloge.prototype.printNumber = function (max, taille) {
    for (let i = 0; i < max; i++) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.height = taille + "px";
        div.style.left = "295px";
        div.style.top = 300 - taille + "px";
        div.innerHTML = i;
        div.style.transformOrigin = "bottom";
        div.style.transform = "rotate(" + i * (360 / max) + "deg)"
        div.style.textAlign = "center";
        this.div.append(div);
    }
}


//J'affiche les minutes et les heures
Horloge.prototype.afficher = function () {
    //heures donc 12 nombres
    this.printNumber(12, 300);
    //minutes donc 60 nombres
    this.printNumber(60, 270);
    document.body.append(this.div);
}

//Fonction qui permet de modifier l'heure avec les boutons sur la droite
Horloge.prototype.setTime = function (aiguille) {
    let div = document.createElement("div");
    div.className = "setTime";
    let title = ["hours", "min", "sec"];
    for (let i = 0; i < 3; i++) {
        let divBox = document.createElement("div");
        divBox.className = "setTimeBox";
        divBox.innerHTML = title[i];
        let nameButton = ["add", "remove"];
        for (let j = 0; j < 2; j++) {
            let divButton = document.createElement("div");
            divButton.className = title[i] + " " + nameButton[j];
            divButton.innerHTML = nameButton[j];


            //Quand je click sur un des boutons ça ajuste l'heure, les minutes ou les secondes en fonction de la class du bouton
            //sur lequel j'ai cliqué
            //mes aiguilles sont stocké dans un tableau donc je bouge seulement celle qui correspondes
            divButton.addEventListener("click", function () {
                if (this.className.includes("add")) {
                    if (this.className.includes("hours")) {
                        aiguille[2][0].moveDiv()
                    } else if (this.className.includes("min")) {
                        aiguille[1][0].moveDiv()
                    } else if (this.className.includes("sec")) {
                        aiguille[0][0].moveDiv()
                    }
                }else {
                    if (this.className.includes("hours")) {
                        aiguille[2][0].deg -= 12;
                        aiguille[2][0].moveDiv();
                    } else if (this.className.includes("min")) {
                        aiguille[1][0].deg -= 12;
                        aiguille[1][0].moveDiv();
                    } else if (this.className.includes("sec")) {
                        aiguille[0][0].deg -= 12;
                        aiguille[0][0].moveDiv();
                    }
                }
            })
            divBox.append(divButton)
        }
        div.append(divBox)
    }
    this.div.append(div);
}


export {Horloge};
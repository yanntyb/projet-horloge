let Horloge = function () {
    this.div = document.createElement("div");
    this.div.id = "horloge";
    this.cercleCentre = document.createElement("div");
    this.cercleCentre.id = "cercleCentre"
    this.div.append(this.cercleCentre);
}

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

Horloge.prototype.afficher = function () {
    this.printNumber(12, 300);
    this.printNumber(60, 270);
    document.body.append(this.div);
}

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

Horloge.prototype.setDate = function (taille){
    let tabDay = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"];
    for(let i in tabDay){
        let divDate = document.createElement("div");
        divDate.className = "date"
        divDate.innerHTML = tabDay[i];
        divDate.style.transformOrigin = "bottom";
        divDate.style.transform = "rotate(" + i * (360 / 6) + "deg)";
        divDate.style.height = taille + "px";
        divDate.style.position = "absolute"
        divDate.style.left = "285px";
        divDate.style.top = 300 - taille + "px";
        this.div.append(divDate);
    }
}

export {Horloge};
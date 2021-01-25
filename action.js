import {Horloge} from "./Horloge.js";
import {Aiguille} from "./Aiguille.js";


//je créé l'horloge
let horloge = new Horloge();

//je défini les aiguilles en fonction de leurs tailles et le nombre de millisecondes pour quelles bougent
let aiguille = [];
aiguille.push([new Aiguille(250,"red",horloge),1000]);
aiguille.push([new Aiguille(200,"yellow",horloge), 61000]);
aiguille.push([new Aiguille(150,"purple",horloge),3661000]);

horloge.afficher();
horloge.setTime(aiguille);

//je bouge les aiguilles en fonction de du nombre de milliseconde qui correspong
function move(obj,time){
    obj.afficher()
    setTimeout(function (){
        obj.moveDiv();
        move(obj,time);
    },time)
}

//je parcours le tableau d'aiguilles pour les bouger dans un timeout recursife juste au dessus.
for(let i of aiguille){
    move(i[0],i[1]);
}


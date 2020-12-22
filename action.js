import {Horloge} from "./Horloge.js";
import {Aiguille} from "./Aiguille.js";

let horloge = new Horloge();
let aiguille = [[new Aiguille(150,"red"),1000],[new Aiguille(200,"yellow"),60000],[new Aiguille(250,"purple"),3600000]];

horloge.afficherCercle();

function move(obj,time){
    obj.afficher()
    setTimeout(function (){
        obj.moveDiv();
        move(obj,time);
    },time)
}


for(let i of aiguille){
    i[0].moveDiv();
    move(i[0],i[1]);
}


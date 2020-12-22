import {Horloge} from "./Horloge.js";
import {Aiguille} from "./Aiguille.js";

let horloge = new Horloge();
let aiguille = [
    [new Aiguille(250,"red",horloge),1000],
    [new Aiguille(200,"yellow",horloge), 61000],
    [new Aiguille(150,"purple",horloge),3661000]
];

horloge.afficher();

function move(obj,time){
    obj.afficher()
    setTimeout(function (){
        obj.moveDiv();
        move(obj,time);
    },time)
}


for(let i of aiguille){
    move(i[0],i[1]);
}


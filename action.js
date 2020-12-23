import {Horloge} from "./Horloge.js";
import {Aiguille} from "./Aiguille.js";

let horloge = new Horloge();

let aiguille = [];
aiguille.push([new Aiguille(250,"red",horloge),1000,1000]);
aiguille.push([new Aiguille(200,"yellow",horloge), 61000]);
aiguille.push([new Aiguille(150,"purple",horloge),3661000]);
aiguille.push([new Aiguille(100,"brown",horloge),527184]);

horloge.afficher();
horloge.setTime(aiguille);
horloge.setDate(150)

function move(obj,time){
    obj.afficher()
    setTimeout(function (){
        obj.moveDiv();
        move(obj,time,time);
    },time)
}


for(let i of aiguille){
    move(i[0],i[1]);
}


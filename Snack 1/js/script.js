/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

var arrayBici = [

    {
        nome : "zavorra",
        peso : 74
    },

    {
        nome : "speedy", 
        peso : 2
    },

    {
        nome : "medio", 
        peso : 40
    }

];

var pesi = confrontoPesi (arrayBici);
var bici;

console.log(pesi);
console.log(bici);

function confrontoPesi (nomeArray) {
    var peso = nomeArray[0].peso;
    for ( var i = 0; i < nomeArray.length; i++) {
        if (nomeArray[i].peso < peso) {
            peso = nomeArray[i].peso;
            bici = nomeArray[i];
        }
    }
    return peso;
}

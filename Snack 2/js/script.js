/* 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/ 

var squadre = [
    {
        nome : "Juve",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Milan",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Inter",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Lazio",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Parma",
        puntiFatti : 0, 
        falliSubiti : 0
    }
];

var nuovoArray = [
    {},
    {},
    {},
    {},
    {},
];

console.log(nuovoArray);

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

for (var i = 0; i < squadre.length; i++) {

    squadre[i].puntiFatti += generaNumeri (0, 100);
    squadre[i].falliSubiti += generaNumeri (0, 100);

    nuovoArray[i].nome = squadre[i].nome;
    nuovoArray[i].puntiFatti = squadre[i].puntiFatti;
}
console.log(squadre);

// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




// SEZIONE DEDICATA ALLA SCRITTURA DELLE FUNZIONI
// funzione dedicata alla generazione di numeri random
function generaNumeri (numMin, numMax) {
    var numeri = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return numeri;
}
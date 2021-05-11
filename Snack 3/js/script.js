/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/ 

var array = [5, 10, 8, 4, 11, 5, 35, 13, 14, 2];
var nuovoArray = [];
nuovoArray = prova (array, 6, 15);
console.log(nuovoArray);


// SEZIONE DEDICATA ALLA CREAZIONE DELLE FUNZIONI
// funzione a 3 argomenti

function prova (array, a, b) {
    var nuovoArray = [];
    for(var i = 0; i < array.length; i++) {
        if (array[i] > a && array[i] < b) {
            nuovoArray.push(array[i]);
        }
    }
    return nuovoArray;
}


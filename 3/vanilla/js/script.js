// -------- jsnack 3 ----------
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// --- versione ES5

function myFunction(array, min, max) {
  var newArray = [];
  for(var x = 0; x < array.length; x++) {
    if(x >= min && x <= max) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}

var disney = ['pippo', 'pluto', 'paperino', 'topolino', 'zio paperone', 'archimede'];
var min = prompt('Inserisci minimo');
var max = prompt('Inserisci massimo');

console.log(myFunction(disney, min, max));

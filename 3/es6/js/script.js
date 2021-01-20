// -------- jsnack 3 ----------
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// --- versione ES6

myFunction = (array, min, max) => {
  const newArray = array.filter((element, index) => {
    return index >= min && index <= max;
  });
  return newArray;
}

const disney = ['pippo', 'pluto', 'paperino', 'topolino', 'zio paperone', 'archimede'];
const min = prompt('Inserisci minimo');
const max = prompt('Inserisci massimo');

console.log(myFunction(disney, min, max));

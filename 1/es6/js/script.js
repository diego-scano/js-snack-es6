// jsnack 1
// Creare un array di oggetti :
// - Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// - Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)

const listaBici = [
  {'nome': 'Atala', 'peso': 8},
  {'nome': 'Olympia', 'peso': 7},
  {'nome': 'Piaggio', 'peso': 9},
  {'nome': 'Bianchi', 'peso': 6}
];

let biciPiuLeggera = listaBici[0];

for(let x = 1; x < listaBici.length; x++) {
  if(listaBici[x].peso < biciPiuLeggera.peso) {
    biciPiuLeggera = listaBici[x];
  }
}

console.log(biciPiuLeggera);

const {nome, peso} = biciPiuLeggera;

document.getElementById('container').innerHTML = `
  <ul>
  <li> Nome: ${nome} </li>
  <li> Peso: ${peso} </li>
  </ul>`;

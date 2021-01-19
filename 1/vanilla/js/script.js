// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

listaBici = [
  {'nome': 'Atala', 'peso': 8},
  {'nome': 'Olympia', 'peso': 7},
  {'nome': 'Piaggio', 'peso': 9},
  {'nome': 'Bianchi', 'peso': 6}
]

var biciPiuLeggera = listaBici[0];

for(x = 1; x < listaBici.length; x++) {
  if (listaBici[x].peso < biciPiuLeggera.peso) {
    biciPiuLeggera = listaBici[x];
  }
}

console.log(biciPiuLeggera);

document.getElementById('container').innerHTML =
  '<ul><li>Nome:' +
  biciPiuLeggera.nome +
  ' </li> <li> Peso:' +
  biciPiuLeggera.peso +
  '</li></ul>';

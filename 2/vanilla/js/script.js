// jsnack 2
// Creare un array di oggetti di squadre di calcio.
// - Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// - Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// - Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// - Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// VERSIONE VANILLA

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var listaSquadre = [
  {'nome': 'Milan', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Inter', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Napoli', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Roma', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Juventus', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Atalanta', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Lazio', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Sassuolo', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Verona', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Sampdoria', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Benevento', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Bologna', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Spezia', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Fiorentina', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Udinese', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Genoa', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Cagliari', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Torino', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Parma', 'puntiFatti': 0, 'falliSubiti': 0},
  {'nome': 'Crotone', 'puntiFatti': 0, 'falliSubiti': 0}
];

for(var i = 0; i < listaSquadre.length; i++) {
  listaSquadre[i].puntiFatti = randomNumber(1, 10);
  listaSquadre[i].falliSubiti = randomNumber(1, 10);
}

console.log(listaSquadre);

var newArray = [];

for(var i = 0; i < listaSquadre.length; i++) {
  newArray.push({
    'nome': listaSquadre[i].nome,
    'falliSubiti': listaSquadre[i].falliSubiti
  })
}

console.log(newArray);

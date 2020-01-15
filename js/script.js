// alert('Ciao');

// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali da 1 a 100.

var arrayNumeriVietati = []; // salviamo numeri casuali in array
while (arrayNumeriVietati.length < 16) {
  var genera = getRandomIntInclusive(100, 1); // genera numeri
  var trovato = isInArray(arrayNumeriVietati, genera) // true o false
  if (trovato == false) {
    arrayNumeriVietati.push(genera);
  }
}
console.log(arrayNumeriVietati.sort()); // stampiamo numeri

// / In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100

var i = 0;
var numRitrovato = false;
while (i < 4 && numRitrovato == false) {
  var numeroUtente = parseInt(prompt('Inserisci 16 numeri compresi tra 1 e 100'));
  for (var j = 0; j < arrayNumeriVietati.length; j++) {
    if (numeroUtente == arrayNumeriVietati[j]) {
      numRitrovato = true;
      console.log(numRitrovato);
    }
  }
  i++;
}
// un array per i numeri generati dall'utente
var numbersUser = [];
var numeroUtente = false;
if(isInArray(numbersUser, numeroUtente) == false) {
  numbersUser.push(numeroUtente);
  console.log(numbersUser.sort());
}
// una variabile per il punteggio
var points = 0;
// messaggio standard
var message = 'Hai vinto';
// una variabile per il numero di tentativi
// var numberPrompt;
var cercaBomba = false;

// se il numero dell'utente è presente nell'array numeri vietati hai perso
if(isInArray(arrayNumeriVietati, numeroUtente) == true) {
  message = 'hai perso';
  cercaBomba = true;
} else {
  points++;
}
// console.log(numbersUser);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

console.log(message + ' ' + points);

// Funzioni
// funzione per generare numeri casuali del pc
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// funzione per controllare numeri in un array non siano uguali
function isInArray(array, element) {
  var i = 0;
  var risultato = false;
  while (i < array.length && risultato == false) {
    if (array[i] == element) {
      risultato = true;
    }
    i++;
  }
  return risultato;
}







// var numberBomb = []; // salviamo i numeri
// while (numberBomb.length < 16) {
//   //pusho solo se il numero non è già presente
//   var numberRandom = getRandomNumber(1, 100);
//   var find = isInArray(numberBomb, numberRandom); // true o false
//   if(find == false) {
//     numberBomb.push(numberRandom);
//   }
// }
// console.log(numberBomb.sort());
// // una variabile per il punteggio
// var points = 0;
// //messaggio standard
// var message = 'Hai vinto';
// // un array per i numeri generati dall'utente
// var numbersUser = [];
// // una variabile per il numero di tentativi
// var numberPrompt;
// // numeri minimi e massimi della base di calcolo
// var numMinChek;
// var numMaxChek;
// // tentativi di difficoltà
// var difficultTry = 0;
// do {
//   var difficult = parseInt(prompt('con che grado di difficoltà vuoi giocare? da 0 a 2:'));
//   difficultTry++
// } while (checkRangeNumber(0, 2, difficult) == false && difficultTry < 3);
// if (difficult == 0) {
//   numberPrompt= 84;
//   numMinChek = 1;
//   numMaxChek = 100;
// } else if (difficult == 1){
//   numberPrompt= 64;
//   numMinChek = 1;
//   numMaxChek = 80;
// } else if (difficult == 2) {
//   numberPrompt= 34;
//   numMinChek = 1;
//   numMaxChek = 50;
// }
// console.log('difficolta',difficult);
// console.log('volte',numberPrompt);
// console.log('base minima',numMinChek);
// console.log('base massima',numMaxChek);
// var findBomb = false;
// while (numbersUser.length < numberPrompt && findBomb == false) {
//   var userNumber = false;
//   do{
//     var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
//     console.log('numero inserito' + checkRangeNumber(numMinChek, numMaxChek, userNumber));
//   } while(checkRangeNumber(numMinChek, numMaxChek, userNumber) == false)
//   if(isInArray(numbersUser, userNumber) == false) {
//     numbersUser.push(userNumber);
//     // se il numero dell'utente è presente nelle numberBomb hai perso
//     if(isInArray(numberBomb, userNumber) == true){
//       message = 'hai perso';
//       findBomb = true;
//     } else {
//       points++;
//     }
//   }
// }
// console.log(numbersUser);
// console.log(message + ' ' + points);
// // ______________________________
// // FUNZIONI
// // funzione che genera numeri
// function getRandomNumber(numMin, numMax) {
//   //codice
//   numMin = Math.ceil(numMin);
//   numMax = Math.floor(numMax);
//   var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
//   return  result;
// }
// // funzione che cerca in un array
// function isInArray(array, elem
//   ent) {
//   var i = 0;
//   var result = false;
//   while (i < array.length && result == false) {
//     if (array[i] == element) {
//       result = true;
//     }
//     i++;
//   }
//   return result;
// }
// //funzione che controlla che un numero sia in un certo range
// function checkRangeNumber(min, max, number) {
//   var result = false;
//   if(number >= min && number <= max) {
//     result = true;
//   }
//   return result;
// }

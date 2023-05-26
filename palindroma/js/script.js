"use strict";
//PROBLEMA: Palindroma, chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma.

//CREAZIONE DELLA COSTANTE DI INSERIMENTO DELLA PAROLA CON PROMPT
const entered_word = prompt("Inserisci una parola e ti diremo se è Palindroma: ");
console.log(entered_word)

//CREAZIONE DELLA FUNZIONE PER LA PAROLA PALINDROMA
function palindroma_word(entered_word) {

    //VARIABILE INTERNA ALLA FUNZIONE CON LE PROPRIETA' SPLIT, REVERSE E JOIN 
    let reversed_word = entered_word.split('').reverse().join('');
    
    //RESTITUZIONE DELL'UGUAGLIANZA DELLA PAROLA INSERITA CON QUELLA INVERTITA
    return entered_word === reversed_word;
}

//CHIAMATA DELLA FUNZIONE
palindroma_word(entered_word);
console.log(palindroma_word(entered_word));


"use strict";
//PROBLEMA: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// PROMNT DELLA SCELTA UTENTE SE PARI O DISPARI
let choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();

// CONTROLLO DEL VALORE INSERITO DALL'UTENTE
while (choice !== "pari" && choice !== "dispari") {
    alert('ATTENZIONE! Inserisci un valore valido, scegli tra "pari" o "dispari"');
    choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();
    console.log(choice)
 }

// PROMNT DELLA SCELTA UTENTE NUMERO DA 1 A 5
let insert_number = parseInt(prompt('Inserire un numero compreso tra 1 e 5'));

// CONTROLLO DEL VALORE INSERITO DALL'UTENTE
while (isNaN(insert_number) || insert_number < 1 || insert_number > 5) {
    alert('ATTENZIONE! Inserisci un valore valido, scegli un numero compreso tra "1" e "5"');
    insert_number = prompt('"Inserire un numero compreso tra 1 e 5"').toLowerCase();
    console.log(insert_number)
 }
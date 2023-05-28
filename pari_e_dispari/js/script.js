"use strict";
//PROBLEMA: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// PROMNT DELLA SCELTA UTENTE SE PARI O DISPARI
let choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();
console.log(choice)

// CONTROLLO DEL VALORE INSERITO DALL'UTENTE
 if (choice !== "pari" && choice !== "dispari") {
    alert('ATTENZIONE! Inserisci un valore valido, scegli tra "pari" o "dispari"');
    choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();
 }

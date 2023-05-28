"use strict";
//PROBLEMA: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// FUNZIONE CON NUMERO RANDOMICO SCELTA COMPUTER
function random_number() {
    return Math.floor(Math.random() * 6) + 1;
    }

// PROMNT DELLA SCELTA UTENTE SE PARI O DISPARI
let choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();

// CONTROLLO DEL VALORE INSERITO DALL'UTENTE
while (choice !== "pari" && choice !== "dispari") {
    alert('ATTENZIONE! Inserisci un valore valido, scegli tra "pari" o "dispari"');
    choice = prompt('"Inserire "pari" o "dispari"').toLowerCase();
 }

// PROMNT DELLA SCELTA UTENTE NUMERO DA 1 A 5
let insert_number = parseInt(prompt('Inserire un numero compreso tra 1 e 5'));

// CONTROLLO DEL VALORE NUMERICO INSERITO DALL'UTENTE
while (isNaN(insert_number) || insert_number < 1 || insert_number > 5) {
    alert('ATTENZIONE! Inserisci un valore valido, scegli un numero compreso tra "1" e "5"');
    insert_number = prompt('"Inserire un numero compreso tra 1 e 5"').toLowerCase();
 }

// VARIABILE CONTENIORE DEL NUMERO RANDOMICO DEL COMPUTER
let computer_number = random_number();
console.log(computer_number);

// SOMMA DEI DUE NUMERI
let sum_of_numbers = insert_number + computer_number;
console.log(sum_of_numbers);

// VARIABILE PER SALVARE IL RISULTATO
let check_number_result = check_number(sum_of_numbers);
console.log(check_number_result);

//FUNZIONE DI CONTROLLO SULLA SOMMA SE SI TRATTA DI NUMERO PARI O DISPARI E RESTITUZIONE RISULTATO
function check_number(number) {
    if (number % 2 === 0 && choice === "pari") {
        alert('Utente hai VINTO!');
        console.log('Utente hai VINTO!');
    } else if (number % 2 !== 0 && choice === "dispari") {
        alert('Utente hai VINTO!');
        console.log('Utente hai VINTO!');
    } else {
        alert('Utente NON hai Vinto! Il computer ti ha battuto.');
        console.log('Utente NON hai Vinto! Il computer ti ha battuto.');
    }
};
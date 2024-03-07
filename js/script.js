/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Mi raccomando facciamo il bonus solo dopo aver completato la consegna base e averne testato il corretto funzionamento.
*/



// scrivo un ciclo "for" per stampare i numeri da 1 a 100
const fizzBuzzContainer = document.querySelector('.fizzbuzz-container');

for (let i = 1; i <= 100; i++) {

    // inserisco un "if" per discriminare i numeri multipli di 3 e 5 e stampo FizzBuzz
    let fizzBuzzNum;

        // se i numeri sono multipli *sia* di 3 che 5 stampo "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzNum = 'FizzBuzz';
    
        // se i numeri sono multipli *solo* di 5 stampo "Buzz"
        }else if (i % 5 === 0) {
            fizzBuzzNum = 'Buzz';
    
        // se i numeri sono multipli *solo* di 3 stampo "Fizz"
        }else if (i % 3 === 0) {
            fizzBuzzNum = 'Fizz';

        }else {
            fizzBuzzNum = i;
        }
        console.log(fizzBuzzNum)
    
// Per ogni Fizz-Buzz-Numero creo un list item e lo inserisco nel container 
const listItem = `<div class="box ${fizzBuzzNum}">${fizzBuzzNum}</div>`;
fizzBuzzContainer.innerHTML += listItem;

}


    

    

    
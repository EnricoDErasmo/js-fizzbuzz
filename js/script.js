/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”. Per i numeri che sono
 sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// Creo una variabile per bersagliare l'elemento HTML
let listEl = document.getElementById ("list");

// Creo un ciclo
for (let i = 1; i < 100; i++) {

    // Creo un nuovo elemento
    let newLiElement = document.createElement("li");

    newLiElement.style.listStyle = "none";

    // Faccio in modo che l'elemento creato venga inserito all'interno della ul
    listEl.append(newLiElement);

    // Assegno un numero crescente a ogni li
    newLiElement.innerHTML = i;

    // Pongo le condzioni
    if (i % 3 == 0 && i % 5 == 0) {

        newLiElement.innerHTML = "FizzBuzz";

    } else if (i % 5 == 0) {

        newLiElement.innerHTML = "Buzz";

    } else if (i % 3 == 0) {

        newLiElement.innerHTML = "Fizz";
    }
}



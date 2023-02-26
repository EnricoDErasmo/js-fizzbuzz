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
    newLiElement.style.width = "calc(100% / 7 - 20px)";
    newLiElement.style.padding = "40px 0";
    newLiElement.style.fontWeight = "bold";
    newLiElement.style.textAlign = "center";
    newLiElement.style.border = "1px solid black";
    newLiElement.style.backgroundColor = "#1389b2"

    // Faccio in modo che l'elemento creato venga inserito all'interno della ul
    listEl.append(newLiElement);

    // Assegno un numero crescente a ogni li
    newLiElement.innerHTML = i;

    // Pongo le condzioni
    if (i % 3 == 0 && i % 5 == 0) {

        newLiElement.innerHTML = "FizzBuzz";
        newLiElement.style.backgroundColor = "#f0466f"

    } else if (i % 5 == 0) {

        newLiElement.innerHTML = "Buzz";
        newLiElement.style.backgroundColor = "#ffd166"

    } else if (i % 3 == 0) {

        newLiElement.innerHTML = "Fizz";
        newLiElement.style.backgroundColor = "#0cd6a1"
    }
}



// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Scriviamo nell'html tutti i numeri da 1 a 100
const boxesContainer = document.querySelector('.container');

for(let i = 1; i <= 100; i++) {
    // console.log(i);
    let FizzOrBuzzOrBoth = i;

    if (i % 3 === 0 && i % 5 === 0) {
        FizzOrBuzzOrBoth = 'fizzbuzz';
    } else if ( i % 5 === 0) {
        FizzOrBuzzOrBoth = 'buzz';
    } else if (i % 3 === 0) {
        FizzOrBuzzOrBoth = 'fizz';
    }

    const newBox = `
        <div class="box ${FizzOrBuzzOrBoth}">${FizzOrBuzzOrBoth}</div>
    `;

    boxesContainer.innerHTML += newBox;
}
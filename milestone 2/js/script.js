// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// Scriviamo nell'html tutti i numeri da 1 a 100
const boxesContainer = document.querySelector('.container');

for(let i = 1; i <= 100; i++) {
    // console.log(i);
    let FizzOrBuzzOrBoth = i;

    if (i % 3 === 0 && i % 5 === 0) {
        FizzOrBuzzOrBoth = "fizzbuzz";
    } else if ( i % 5 === 0) {
        FizzOrBuzzOrBoth = "buzz";
    } else if (i % 3 === 0) {
        FizzOrBuzzOrBoth = "fizz";
    }

    const newBox = `
        <div class="box">${FizzOrBuzzOrBoth}</div>
    `;

    boxesContainer.innerHTML += newBox;
}


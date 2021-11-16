// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

for(let i = 1; i <= 100; i++) {

    let FizzOrBuzzOrBoth = i;

    if (i % 3 === 0 && i % 5 === 0) {
        FizzOrBuzzOrBoth = "FizzBuzz";
    } else if ( i % 5 === 0) {
        FizzOrBuzzOrBoth = "Buzz";
    } else if (i % 3 === 0) {
        FizzOrBuzzOrBoth = "Fizz";
    }

    console.log(FizzOrBuzzOrBoth);
}
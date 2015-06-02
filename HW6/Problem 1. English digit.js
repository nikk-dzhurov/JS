// Problem 1. English digit

// Write a function that returns the last digit of given integer as an English word.

var number = 34523,
    inWord;

inWord = lastDigit(number);
console.log(number + ' last digit with word: ' + inWord);

function lastDigit(x) {
    var digit = x % 10;
    switch (digit) {
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return NaN;
    }
}

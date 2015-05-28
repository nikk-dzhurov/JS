//Problem 5. Digit as word

//Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
//Print “not a digit” in case of invalid input.
//Use a switch statement.

var digit = [2, 1, 0, 5, -0.1, 'hi', 9, 10];
var result;
for (var i = 0; i < 8; i += 1) {
    result = 'digit:' + digit[i] + ', result: ';
    switch (digit[i]) {
        case 0:
            console.log(result + 'zero');
            break;
        case 1:
            console.log(result + 'one');
            break;
        case 2:
            console.log(result + 'two');
            break;
        case 3:
            console.log(result + 'three');
            break;
        case 4:
            console.log(result + 'four');
            break;
        case 5:
            console.log(result + 'five');
            break;
        case 6:
            console.log(result + 'six');
            break;
        case 7:
            console.log(result + 'seven');
            break;
        case 8:
            console.log(result + 'eight');
            break;
        case 9:
            console.log(result + 'nine');
            break;
        default:
            console.log(result + 'not a digit');
    }
}

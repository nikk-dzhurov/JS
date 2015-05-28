//Problem 8. Number as words

//Write a script that converts a number in the range [0…999] to words,
//corresponding to its English pronunciation.

var numbers = [0, 9, 10, 12, 19, 25, 98, 98, 273, 400, 501, 617, 711, 999];
var digits,
    special,
    hundreds,
    tens,
    result;

for (var i = 0; i < 14; i += 1) {
    hundreds = Math.floor(numbers[i] / 100);
    tens = (Math.floor(numbers[i] / 10)) % 10;
    digits = numbers[i] % 10;
    special = 10 + digits;
    result = 'number: ' + numbers[i] + ', result: ';

    switch (digits) {
        case 0:
            digits = 'zero';
            break;
        case 1:
            digits = 'one';
            break;
        case 2:
            digits = 'two';
            break;
        case 3:
            digits = 'three';
            break;
        case 4:
            digits = 'four';
            break;
        case 5:
            digits = 'five';
            break;
        case 6:
            digits = 'six';
            break;
        case 7:
            digits = 'seven';
            break;
        case 8:
            digits = 'eight';
            break;
        case 9:
            digits = 'nine';
            break;
    }

    switch (tens) {
        case 1:
            tens = "ten";
            break;
        case 2:
            tens = "twenty ";
            break;
        case 3:
            tens = "thirty ";
            break;
        case 4:
            tens = "fourty ";
            break;
        case 5:
            tens = "fifty ";
            break;
        case 6:
            tens = "sixty ";
            break;
        case 7:
            tens = "seventy ";
            break;
        case 8:
            tens = "eighty ";
            break;
        case 9:
            tens = "ninety ";
            break;
    }
    switch (special) {
        case 11:
            special = 'eleven';
            break;
        case 12:
            special = 'twelve';
            break;
        case 13:
            special = 'thirteen';
            break;
        case 14:
            special = 'fourteen';
            break;
        case 15:
            special = 'fifteen';
            break;
        case 16:
            special = 'sixteen';
            break;
        case 17:
            special = 'seventeen';
            break;
        case 18:
            special = 'eighteen';
            break;
        case 19:
            special = 'nineteen';
            break;
    }

    if (numbers[i] < 10) {
        console.log(result + digits);
    } else if (!(numbers[i] % 10) && numbers[i] < 100) {
        console.log(result + tens);
    } else if (!!(numbers[i] % 10) && numbers[i] < 100) {
        if (numbers[i] < 20) {
            console.log(result + special);
        } else {
            console.log(result + tens + digits);
        }
    } else if (hundreds > 0) {
        switch (hundreds) {
            case 1:
                hundreds = 'one hundred ';
                break;
            case 2:
                hundreds = 'two hundred ';
                break;
            case 3:
                hundreds = 'three hundred ';
                break;
            case 4:
                hundreds = 'four hundred ';
                break;
            case 5:
                hundreds = 'five hundred ';
                break;
            case 6:
                hundreds = 'six hundred ';
                break;
            case 7:
                hundreds = 'seven hundred ';
                break;
            case 8:
                hundreds = 'eight hundred ';
                break;
            case 9:
                hundreds = 'nine hundred ';
                break;
        }
        if (!(numbers[i] % 100)) {
            console.log(result + hundreds);
        } else if (!tens) {
            console.log(result + hundreds + 'and ' + digits);
        } else if ((Math.floor(numbers[i] / 10)) % 10 < 2) {
            console.log(result + hundreds + 'and ' + special);
        } else {
            console.log(result + hundreds + 'and ' + tens + digits);
        }

    }


}

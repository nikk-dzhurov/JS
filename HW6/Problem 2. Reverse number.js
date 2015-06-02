// Problem 2. Reverse number

// Write a function that reverses the digits of given decimal number.

var decimal = [256, 123.45, 345, 3455.467],
    i,
    reversed;

for (i = 0; i < decimal.length; i += 1) {
    reversed = reverseNumber(decimal[i]);
    console.log(decimal[i] + ' reversed : ' + reversed);
}

function reverseNumber(x) {
    return x.toString().split('').reverse().join('');
}

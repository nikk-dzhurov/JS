// Problem 1. Reverse string

// Write a JavaScript function that reverses a string and returns it.

function reverseString(str) {
    var i,
        result = '';
    for (i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }
    return result;
}

str = 'sample';

console.log('Original: ' + str);
console.log('Reversed: ' + reverseString(str));

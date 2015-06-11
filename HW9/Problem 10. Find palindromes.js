// Problem 10. Find palindromes

// Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

// **** My palindromes are case-sensitive :) 

var text = 'Abba doll roll lamal AnnA cockroach exe ABBA trap sack wow';

function findPalindromes(text) {
    var arr = text.split(' ');
    var i,
        len,
        reversed,
        result = [];

    arr = arr.filter(function(item) {
        return !!item;
    });

    for (i = 0, len = arr.length; i < len; i += 1) {
        reversed = reverseWord(arr[i]);

        if (reversed === arr[i]) {
            result.push(reversed);
        }
    }
    return result;
}

function reverseWord(word) {
    var i,
        result = '';

    for (i = word.length - 1; i >= 0; i -= 1) {
        result += word[i];
    }
    return result;
}

var result = findPalindromes(text);

console.log('Palindromes: ' + result.join(', '));

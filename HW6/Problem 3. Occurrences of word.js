// Problem 3. Occurrences of word

// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.

var text = 'Some text , some text , soMe text , Some TeXt , some Text',
    key = 'Some'; // here you can change the word :)


console.log(key + ': ' + findOccurences(text, key) + ' times  - Case InSensitive');
console.log(key + ': ' + findOccurences(text, key, true) + ' times - Case Sensitive');


function findOccurences(text, key, sensitive) {
    var i,
        clear = '',
        arr = new Array(),
        counter = 0;
    for (i = 0; i < text.length; i += 1) { //cycle for making text just words separated by spaces
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z') || text[i] === ' ') {
            clear += text[i];
        } else {
            clear += ' ';
        }
    }

    if (!!sensitive) {} else { //OVERLOADING
        clear = clear.toLowerCase();
        key = key.toLowerCase();
    }

    arr = toArrayWithWords(clear);

    for (i = 0; i < arr.length; i += 1) {
        if (key === arr[i]) {
            counter += 1;
        }
    }
    return counter;
}

function toArrayWithWords(clear) { // make cleared text to array with words(removing spaces)
    var count,
        j,
        i,
        arr = new Array();
    arr = clear.split(' ');
    for (i = 0; i < arr.length; i += 1) {
        count = 0;
        if (arr[i] === '') {
            j = i;
            while (arr[j] === '') {
                count += 1;
                j += 1;
            }
            arr.splice(i, count);
        }
    }
    return arr;
}

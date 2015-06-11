// Problem 2. Correct brackets

// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).


var str = '((a+b)/5-d)',
    str2 = ')(a+b))',
    answer;

function check(str) {
    var i,
        len,
        openedBr = 0;
    for (i = 0, len = str.length; i < len; i += 1) {
        if (openedBr < 0) {
            return false;
        }
        if (str[i] === '(') {
            openedBr += 1;
        } else if (str[i] === ')') {
            openedBr -= 1;
        }
    }
    return !openedBr;
}

answer = check(str) ? 'Yes' : 'No'
console.log('Correct Expression?');
console.log(str + '\n' + answer);

console.log('----------------------');

answer = check(str2) ? 'Yes' : 'No'
console.log('Correct Expression?');
console.log(str2 + '\n' + answer);

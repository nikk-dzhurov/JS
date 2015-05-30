// Problem 6. Most frequent number

// Write a script that finds the most frequent number in an array.

var input = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    mostFreq = Number.MIN_VALUE,
    currentFreq,
    currentNum,
    num,
    i,
    k;

for (var i = 0; i < input.length - mostFreq; i += 1) {
    currentFreq = 1;
    for (var k = i + 1; k < input.length; k += 1) {
        if (input[i] === input[k]) {
            currentFreq += 1;
        }
    }
    if (currentFreq > mostFreq) {
        num = input[i];
        mostFreq = currentFreq;
    }
}
console.log(num + '(' + mostFreq + ' times)');

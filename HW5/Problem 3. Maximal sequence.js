// Problem 3. Maximal sequence

// Write a script that finds the maximal sequence of equal elements in an array.

var input = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    result = new Array,
    max = Number.MIN_VALUE,
    current = 1,
    currentElement,
    i,
    k;

for (i = 0; i < input.length; i += 1) {
    if (input[i] === input[i + 1]) {
        current += 1;
    } else {
        current = 1;
    }
    if (current > max) {
        max = current;
        for (k = 0; k < max; k += 1) {
            result[k] = input[i];
        }
    }
}
console.log(result.join(', '));

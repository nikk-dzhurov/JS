// Problem 4. Maximal increasing sequence

// Write a script that finds the maximal increasing sequence in an array.

var input = [3, 2, 3, 4, 2, 2, 4],
    result = new Array,
    max = Number.MIN_VALUE,
    current = 1,
    currentElement,
    i,
    position = 0,
    x;

for (i = 0; i < input.length; i += 1) {
    if (input[i] < input[i + 1]) {
        current += 1;
    } else {
        current = 1;
        position = i + 1;
    }
    if (current > max) {
        max = current;
        x = position;
        for (k = 0; k < max; k += 1, x += 1) {
            result[k] = input[x];
        }
    }
}
console.log(result.join(', '));

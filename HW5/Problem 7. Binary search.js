// Problem 7. Binary search

// Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

var numbers = new Array(11),
    index = [4, 10, 3, 16],
    maxIndex,
    minIndex,
    middle,
    i,
    found;

for (i = 0; i < numbers.length; i += 1) {
    numbers[i] = i * 2;
}

console.log('Array: ' + numbers.join(', '));
console.log();

for (i = 0; i < index.length; i += 1) {
    found = false;
    maxIndex = numbers.length - 1;
    minIndex = 0;
    while (maxIndex >= minIndex) {
        middle = Math.floor((maxIndex + minIndex) / 2)
        if (numbers[middle] > index[i]) {
            maxIndex = middle - 1;
        } else if (numbers[middle] < index[i]) {
            minIndex = middle + 1;
        } else {
            found = true;
            break;
        }
    }
    if (found) {
        console.log('Number: ' + index[i] + ' is at position: ' + middle);
    } else {
        console.log('Number: ' + index[i] + ' doesn\'t exist in array!');
    }
}

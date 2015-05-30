// Problem 5. Selection sort

// Sorting an array means to arrange its elements in increasing order.
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Hint: Use a second array

var arr = [6, 5, 21, 84, 1, 37, 9, 12, 5, 2, 1, 7, 3, 17],
    changePosition,
    i,
    k,
    min,
    minPosition,
    tmp,
    start;

function minEl(arr, start) {
    min = Number.MAX_VALUE;
    for (i = start; i < arr.length; i += 1) {
        if (min > arr[i]) {
            min = arr[i];
            minPosition = i;
        }
    }
    return minPosition;
}

for (k = 0; k < arr.length; k += 1) {
    changePosition = minEl(arr, k);
    tmp = arr[changePosition];
    arr[changePosition] = arr[k];
    arr[k] = tmp;
}
console.log(arr.join(', '));

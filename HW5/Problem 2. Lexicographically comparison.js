// Problem 2. Lexicographically comparison

// Write a script that compares two char arrays lexicographically (letter by letter).

var arr1 = ['a', 'b', 'c', 'd'],
    arr2 = ['a', 'b', 'c', 'd', 'x'],
    bigger,
    i,
    longer = arr1.length > arr2.length ? arr1.length : arr2.length;

for ( i = 0; i < longer; i++) {
    if (!arr1[i]) {
        bigger = arr2;
    } else if (!arr2[i]) {
        bigger = arr1;
    }
    if (arr1[i] < arr2[i]) {
        bigger = arr2;
        break;
    } else if (arr1[i] > arr2[i]) {
        bigger = arr1;
        break;
    }
}
if (!!bigger) {
    console.log('Bigger: ' + bigger);
} else {
    console.log('They are equal!');
}

//Problem 3. Min/Max of sequence

//Write a script that finds the max and min number from a sequence of numbers.
// max is 45 , min is -22 :)
var numbers = [3, 12, 2, 15, 3, 7, 18, 45, -22, 0.4, 13, -14];
var min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;

for (var i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log('Min: ' + min);
console.log('Max: ' + max);

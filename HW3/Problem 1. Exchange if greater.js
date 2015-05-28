//Problem 1. Exchange if greater

//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space.

var a = [5, 3, 5.5];
var b = [2, 4, 4.5];
var tmp;
for (var i = 0; i < 3; i += 1) {
    if (a > b) {
        tmp = b;
        b = a;
        a = tmp;
    }
    console.log(a[i] + ' ' + b[i]);
}

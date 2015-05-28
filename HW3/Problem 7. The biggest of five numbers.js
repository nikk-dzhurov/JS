//Problem 7. The biggest of five numbers

//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

var a = [5, -2, -2, 1, 0, -3];
var b = [2, -22, 4, 4, -2.5, -0.5];
var c = [2, 1, 3, 'hi', 0, -1.1];
var d = [4, 0, 2, 3, 5, -2];
var e = [1, 0, 0, 2, 5, -0.1];
var biggest,
    result;
for (var i = 0; i < 6; i += 1) {
    result = 'a= ' + a[i] + ', b=' + b[i] +
        ', c= ' + c[i] + ', d=' + d[i] + ', e= ' + e[i] + ', biggest: ';
    if (isNaN(a[i]) || isNaN(b[i]) || isNaN(c[i]) || isNaN(d[i]) || isNaN(e[i])) {
        console.log(result + 'incorrect input');
    } else {
        biggest = a[i];
        if (biggest < b[i]) {
            biggest = b[i];
        }
        if (biggest < c[i]) {
            biggest = c[i];
        }
        if (biggest < d[i]) {
            biggest = d[i];
        }
        if (biggest < e[i]) {
            biggest = e[i];
        }
        console.log(result + biggest);
    }
}

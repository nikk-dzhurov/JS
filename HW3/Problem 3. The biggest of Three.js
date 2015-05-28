//Problem 3. The biggest of Three

//Write a script that finds the biggest of three numbers.
//Use nested if statements.

var a = [5, -2, -2, 0, -0.1];
var b = [2, -2, 4, -2.5, -0.5];
var c = [2, 1, 3, 5, -1.1];
var biggest;
for (var i = 0; i < 5; i += 1) {
    biggest = 'a= ' + a[i] + ', b= ' + b[i] + ', c= ' + c[i] + ', biggest: ';
    if (a[i] > b[i] && a[i] > c[i]) {
        console.log(biggest + a[i]);
    } else if (b[i] > a[i] && b[i] > c[i]) {
        console.log(biggest + b[i]);
    } else {
        console.log(biggest + c[i]);
    }
}

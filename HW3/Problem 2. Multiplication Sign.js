//Problem 2. Multiplication Sign

//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

var a = [5, -2, -2, 0, -1];
var b = [2, -2, 4, -2.5, -0.5];
var c = [2, 1, 3, 4, -5.1];
var result;
for (var i = 0; i < 5; i += 1) {
    result = 'a= ' + a[i] + ', b= ' + b[i] + ', c= ' + c[i] + ', result: ';
    if ((a[i] > 0 && b[i] > 0 && c[i] > 0) || (a[i][i] > 0 && b[i] < 0 && c[i] < 0) ||
        (a[i] < 0 && b[i] > 0 && c[i] < 0) || (a[i] < 0 && b[i] < 0 && c[i] > 0)) {
        console.log(result + '+');
    } else if (!a[i] || !b[i] || !c[i]) {
        console.log(result + '0');
    } else {
        console.log(result + '-');
    }
}

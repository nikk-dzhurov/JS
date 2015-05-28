//Problem 4. Sort 3 numbers

//Sort 3 real values in descending order.
//Use nested if statements.
//Note: Don’t use arrays and the built-in sorting functionality.

// ****** I am using arrays just for saving many variables :)

var a = [5, -2, -2, 0, -1.1, 10, 1];
var b = [1, -2, 4, -2.5, -0.5, 20, 1];
var c = [2, 1, 3, 5, -0.1, 30, 1];
var result;
var tmp;
for (var i = 0; i < 7; i += 1) {
    result = 'a= ' + a[i] + ', b= ' + b[i] + ', c= ' + c[i] + ', result: ';
    if (a[i] > b[i] && a[i] > c[i] && b[i] < c[i]) {
        tmp = b[i];
        b[i] = c[i];
        c[i] = tmp;
    } else if (a[i] < b[i] && b[i] > c[i]) {
        tmp = b[i];
        b[i] = a[i];
        a[i] = tmp;
        if (b[i] < c[i]) {
            tmp = b[i];
            b[i] = c[i];
            c[i] = tmp;
        }
    } else {
        tmp = a[i];
        a[i] = c[i];
        c[i] = tmp;
        if (b[i] < c[i]) {
            tmp = b[i];
            b[i] = c[i];
            c[i] = tmp;
        }
    }
    console.log(result + a[i] + ' ' + b[i] + ' ' + c[i]);
}

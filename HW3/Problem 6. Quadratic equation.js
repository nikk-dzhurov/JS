//Problem 6. Quadratic equation

//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.
//Note: Quadratic equations may have 0, 1 or 2 real roots.

var a = [2, -1, -0.5, 5];
var b = [5, 3, 4, 2];
var c = [-3, 0, -8, 8];
var x1,
    x2,
    D,
    result;
for (var i = 0; i < 4; i += 1) {
    result = 'a= ' + a[i] + ', b= ' + b[i] + ', c= ' + c[i] + ', roots: ';
    if (!a[i]) {
        x1 = (-c[i]) / b[i];
        console.log(result + 'x= ' + x1)
    } else {
        D = b[i] * b[i] - 4 * a[i] * c[i];
        if (D < 0) {
            console.log(result + 'no real roots');
        } else if (!D) {
            x1 = -b[i] / 2 / a[i];
            console.log(result + 'x1=x2= ' + x1);
        } else {
            x1 = (-b[i] - Math.sqrt(D)) / 2 / a[i];
            x2 = (-b[i] + Math.sqrt(D)) / 2 / a[i];
            console.log(result + 'x1= ' + x1 + ' x2= ' + x2);
        }
    }
}

//Problem 8. Trapezoid area
//Write an expression that calculates trapezoid's area by given sides a and b and height h.

var area;
var a = [5,2,8.5,100,0.222];
var b = [7,1,4.3,200,0.333];
var h = [12,33,2.7,300,0.555];

for (var i = 0; i < 5; i+=1) {
 	area = (a[i]+b[i])/2*h[i];
 	console.log('a= ' + a[i] + ', b= ' + b[i] + ', area= ' + area);
 }
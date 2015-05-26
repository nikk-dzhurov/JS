//Problem 6. Point in Circle
//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). 
//{0,0} is the centre and 5 is the radius

var x = [0,-5,-4,1.5,-4,100,0,0.2,0.9,2];
var y = [1,0,5,-3,-3.5,-30,0,-0.8,-4.93,2.655];
var radius = 5;
var inside;
console.log('Is in circle(radius=5, center(0,0)) ?\n');
for (var i = 0; i < 10; i+=1) {
	inside = (x[i]*x[i] + y[i]*y[i]) <= radius*radius;
	console.log('x= ' + x[i] + ', y= '+ y[i] + '; Inside: ' + inside); 
}
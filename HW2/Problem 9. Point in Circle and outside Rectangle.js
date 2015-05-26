//Problem 9. Point in Circle and outside Rectangle
//Write an expression that checks for given point P(x, y) if it is within the circle
//K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

//(x[i]*x[i] + y[i]*y[i]) <= radius*radius
var x = [1,2.5,0,2.5,2,4,2.5,2,1,-100];
var y = [2,2,1,1,0,0,1.5,1.5,2.5,-100];
var top = 1;
var left = -1; 
var width=6;
var height=2;
var radius=3;
console.log('inside K & outside of R ?');
for (var i = 0; i < 10; i+=1) {
	insideCircle = ((x[i]-1)*(x[i]-1) + (y[i]-1)*(y[i]-1)) <= radius*radius;
	insideRectangle = x[i]<=left+width && x[i]>=left && y[i]<=top && y[i]>=top-height;
	if(insideCircle==true && insideRectangle!=true){
		console.log('x= ' + x[i] + ', y= '+ y[i] + ', Result: yes'); 
	}
	else {
		console.log('x= ' + x[i] + ', y= '+ y[i] + ', Result: no');
	}
}
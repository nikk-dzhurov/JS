//Problem 3. Rectangle area
//Write an expression that calculates rectangle’s area by given width and height.

var widths = [3,2.5,5];
var heights = [4,3,5];
var area;

for (var i = 0; i < 3; i+=1) {
	area = widths[i]*heights[i];
	console.log('Width: ' + widths[i] + ', Height: ' + heights[i] + ', Area: ' + area);
}
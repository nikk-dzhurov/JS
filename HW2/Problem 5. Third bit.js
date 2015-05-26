//Problem 5. Third bit
//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//The bits are counted from right to left, starting from bit #0.
//The result of the expression should be either 1 or 0.

var numbers = [5,8,0,15,5343,62241];
var result;
for (var i = 0; i < 6; i+=1) {
	result = (numbers[i]>>3) & 1;
	console.log('Number: ' + numbers[i] + ', result: ' + result); 
}
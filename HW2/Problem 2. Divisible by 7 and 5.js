//Problem 2. Divisible by 7 and 5
//Write a boolean expression that checks for given integer 
//if it can be divided (without remainder) by 7 and 5 in the same time.

var number = [3,0,5,7,35,140];
for (var i = 0; i < 6; i+=1) {
	console.log('Is ' + number[i] + ' Divided by 7 and 5? : ' + (number[i]%5===0 && number[i]%7===0));
}
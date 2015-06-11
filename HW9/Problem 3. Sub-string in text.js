// Problem 3. Sub-string in text

// Write a JavaScript function that finds how many times a substring is contained in a given 
// text (perform case insensitive search).

// Example:

// The target sub-string is in The text is as follows: 
// We are living in an yellow submarine. We don't have anything else. 
// inside the submarine is very tight. So we are drinking all the day.
// We will move out of it in 5 days.

// The result is: 9

var str = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

str = str.toLowerCase();

var i,
	subStr = 'in',
	check,
	count=0;

for (i = 0; i < str.length - subStr.length; i+=1) {

	check = str.substring(i,i+subStr.length);
	if(check === subStr) {
		count+=1;
	}
}

console.log('Word: \'' + subStr + '\' is contained: ' + count + ' times in string!');
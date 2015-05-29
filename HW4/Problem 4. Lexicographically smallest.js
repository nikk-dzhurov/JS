// Problem 4. Lexicographically smallest

// Write a script that finds the lexicographically smallest and 
// largest property in document, window and navigator objects.


// This problem can be tested in build-in console in browser ;) 

var smallest='zzzzz',
	largest='',
	property;
for(property in document) {
	if(property<smallest){
		smallest=property;
	}
	if(property>largest){
		largest=property;
	}
}
console.log('smallest property in document : ' + smallest);
console.log('largest property in document : ' + largest);


mallest='zzzzz';
largest='';
for(property in window) {
	if(property<smallest){
		smallest=property;
	}
	if(property>largest){
		largest=property;
	}
}
console.log('smallest property in window : ' + smallest);
console.log('largest property in window : ' + largest);


smallest='zzzzz';
largest='';
for(property in navigator) {
	if(property<smallest){
		smallest=property;
	}
	if(property>largest){
		largest=property;
	}
}
console.log('smallest property in navigator : ' + smallest);
console.log('largest property in navigator : ' + largest);
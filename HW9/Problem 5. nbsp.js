// Problem 5. nbsp

// Write a function that replaces non breaking white-spaces in a text with &nbsp;

var str = 'Gosho Pesho Sasho John.';

function repl(text) {
	text = text.split(' ');
	return text.join('&nbsp;');
}

console.log('Old: ' + str);

str = repl(str);

console.log('New: ' + str);
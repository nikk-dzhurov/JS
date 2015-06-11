// Problem 11. String format

// Write a function that formats a string using placeholders.
// The function should work with up to 30 placeholders and all types.

function stringFormat() {
    var i,
        args,
        str,
        len,
        strToReplace,
        index;

    args = [].slice.apply(arguments);
    str = args.shift();
    len = args.length;

    for (i = 0; i < len; i += 1) {
        strToReplace = '{' + i + '}';

        while (index = str.indexOf(strToReplace) >= 0) {
            str = str.replace(strToReplace, args[i]);
        }
    }
    return str;
}



var str = stringFormat('{0}, {1}, {0} text {2}');

str = stringFormat(str, 1, 'Pesho', 'Gosho');
console.log(str);

console.log('-------------------------------------');
var str2 = stringFormat('Hello {0}!', 'Peter');

str2 = stringFormat(str2, 1, 'Pesho', 'Gosho');
console.log(str2);

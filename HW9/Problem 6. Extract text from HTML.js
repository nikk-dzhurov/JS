// Problem 6. Extract text from HTML

// Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags.

var text = '<html>\
<head>\
<title>Sample site</title>\
</head>\
<body>\
<div>text\
<div>more text</div>\
and more...\
</div>\
in body\
</body>\
</html>';


function extractText(html) {
    var i,
        result = '';

    for (i = 0; i < html.length; i += 1) {
        if (html[i] === '<') {
            i = html.indexOf('>', i);
        }
        if (html[i] !== '>') {
            result += html[i];
        }
    }
    return result;
}

var extracted = extractText(text);

console.log('Result: \n' + extracted);

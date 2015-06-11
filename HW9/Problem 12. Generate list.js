// Problem 12. Generate list

// Write a function that creates a HTML <ul> using a template for every HTML <li>.
// The source of the list should be an array of elements.
// Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.



var arrayOfObjects = [{
    name: 'Nikki',
    age: 20
}, {
    name: 'Tanq',
    age: 24
}, {
    name: 'Mariq',
    age: 19
}, {
    name: 'Vikki',
    age: 21
}, {
    name: 'Todor',
    age: 23
}];

var i,
    item,
    obj,
    prop,
    result = '<ul>\n',
    len = arrayOfObjects.length,
    tmpl = '<strong>-{name}-</strong> <span>-{age}-</span>';

for (i = 0; i < len; i++) {
    obj = arrayOfObjects[i];
    item = tmpl;
    for (prop in obj) {
        prop = '-{' + prop + '}-';
        item = item.replace(prop, obj[prop]);
    }
    item = '\t<li>' + item + '</li>\n'
    result += item;
}
result += '<ul>';

console.log(result);

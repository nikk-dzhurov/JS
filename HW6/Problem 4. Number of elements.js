// Problem 4. Number of elements

// Write a function to count the number of div elements on the web page

// to see how it works , open divs.html and click the button :)

function countElements(type) {

    var count = document.getElementsByTagName(type).length;
    document.getElementById('result').innerHTML = 'result: ' + count;
    console.log(type + ' count: ' + count);
}

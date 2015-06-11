// Problem 9. Extract e-mails

// Write a function for extracting all email addresses from given text.
// All sub-strings that match the format @… should be recognized as emails.
// Return the emails as array of strings.

var text = 'emails : a asd@aasdd.com asd@  123  addd@asd.com 123 432 aba@asd.com aasd@ aaa@asad.com asd@asd.com @ @'; // 5 emails at all ;)

function findEmails(text) {
    var arr = text.split(' ');
    var index,
        result = [],
        next;

    arr = arr.filter(function(item) {
        return !!item;
    });

    for (item in arr) {

        index = arr[item].indexOf('@');
        next = index + 1;
        if (index >= 0 && !!arr[item][index + 1] && arr[item].indexOf('@', index + 1) < 0) {
            result.push(arr[item]);

        }
    }
    return result;
}

console.log('All Emails: \n' + findEmails(text).join(', '));

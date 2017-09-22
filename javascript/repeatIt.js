// Create a function called repeatIt that takes in a string and a number (n).
// The function should return a string that repeats the initial passed in string (n) number of times.

var repeatIt = function(str, n) {
    return (typeof str === 'string')? str.repeat(n) : "Not a string";
}

repeatIt("Hello", 2);
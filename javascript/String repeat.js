// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(5, "."));


//Other
repeatStr = (n, s) => s.repeat(n);
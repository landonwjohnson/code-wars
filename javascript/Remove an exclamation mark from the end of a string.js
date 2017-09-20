// Remove a exclamation mark from the end of string. 
// For a beginner kata, you can assume that the input
// data is always a string, no need to verify it.


function remove(s) {
    return s.replace( /!$/, '')
}

console.log(remove("Hello my name is Landon!"))




//Other
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

console.log(remove("Hello my name is Landon!"))
// Replace all vowel to exclamation mark in the sentence.
// aeiouAEIOU is vowel.

function replace(s){
    return s.replace(/[aeiou]/ig , '!');
}

//Other
const replace = s => s.replace(/[aeiou]/gi, '!');
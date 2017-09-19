// Write a method smash that takes an array of words and smashes them together 
// into a sentence and returns the sentence. You can ignore any need to sanitize
// words or add punctuation, but you should add spaces betweeneach word. Be 
// careful, there shouldn't be a space at the beginning 
// or the end of the sentence!


var words = ['My' , 'name', 'is', 'Landon' , 'Johnson.'];

function smash (words) {
    "use strict";
    return words.join(' ');  
};


console.log(smash(words));


//Other

smash = function (words) {
    return words.join(" ");
  };


// Simple, remove the spaces from the string,
// then return the resultant string.

function noSpace(x){
    return x.replace(/\s/g, '');
}

//Other
const noSpaces = (x) => x.replace(/\s/g, '');

console.log(noSpace("This sentence has no spaces in it"));
console.log(noSpaces("Using RegEx can remove spaces"));
console.log(noSpaces("\s metacharacter is used to find a whitespace character"));


//
function noSpace(x){return x.split(' ').join('')}
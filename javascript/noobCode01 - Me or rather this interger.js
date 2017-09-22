// Write a function that rearranges an integer into its largest possible value.

function superSize(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
}

console.log(superSize(123432409842));
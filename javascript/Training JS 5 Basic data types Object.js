var myObj = {
    name: "dog",
    color: "white",
    legs: 4
  }
  
function animal(obj){
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " " + "legs."
}
  
console.log(animal(myObj))


//Other 

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
}
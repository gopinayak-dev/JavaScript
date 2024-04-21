//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

/*syntax: 
for (variable of iterable) {
  // code block to be executed
}
*/

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];

for(let car of cars){
    console.log(car);
}

//Looping over a String
let language = "JavaScript";
for(let text of language){
    console.log(text);
}


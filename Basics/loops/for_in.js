//The JavaScript for in statement loops through the properties of an Object

/*syntax:
for (key in object) {
  // code block to be executed
}*/

/*
    The for in loop iterates over a object
    Each iteration returns a key (x)
    The key is used to access the value of the key
    The value of the key is object[x]
*/

const testScores = {
    nayak: 75,
    pavan: 99,
    raju: 89,
    vinod: 91,
    sai: 87,
    prem: 82,
    vmasi: 65
}

for(let person in testScores){
    console.log(`Person ${person} has scored ${testScores[person]} score`);
}


//The JavaScript for in statement can also loop over the properties of an Array
//but it returns the index of the array, so we need to use that index to get value from array
//Do not use for in over an Array if the index order is important.
const numbers = [45, 4, 9, 16, 25];
for(let x in numbers){
    console.log(numbers[x]);
}

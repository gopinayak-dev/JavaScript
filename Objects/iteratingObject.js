
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    email: "johndoe@example.com",
    gender: "Male",
    occupation: "Software Engineer",
  };
  

  //for iterating object we use for..in loop 
  for(let key in person){
    console.log(key); //key returns the key present in the person object
  }

//we need to use the key for to access value of object
for(let key in person){
    console.log(person[key]);
}

//(or) we use built in Object methods: Object.key returns the array of keys present in object & Object.values returns the array of values present in object

console.log(Object.keys(person));//returns array keys
console.log(Object.values(person));//returns array of values
console.log(Object.entries(person));//returns key-value pair array

//while iterating over array better use for...of loop
for(let key of Object.keys(person)){
    console.log(key);
}

for(let value of Object.values(person)){
    console.log(value);
}


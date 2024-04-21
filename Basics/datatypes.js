
//datatypes: 1)primitive 2)objects

//Primitive: Numbers, Strings, Boolean, Null, Undefined, BigInt, Symbol

/*Immutable - An immutable value is one whose content cannot be changed without creating an entirely new value.
In JavaScript, primitive values are immutable — once a primitive value is created, 
it cannot be changed, although the variable that holds it may be reassigned another value. 
By contrast, objects and arrays are mutable by default — their properties and elements can be 
changed without reassigning a new value. */

//Number data type
let a = 20;
a = 2.99999999;
a = -4;
a = +4;

/*Nan: NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of 
an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is 
not equal to itself.
*/

console.log(0/0);//prints NaN
//--------------------------------------------------------------------------------------------------------------------

//booleans are two types 1)true 2) false

let isLoggedin = false;
console.log(typeof(isLoggedin));//prints boolean

isLoggedin = true;
console.log(typeof(isLoggedin));//prints boolean
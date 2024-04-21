
//Variables are containers that store values.
//we can declare the variables in three ways using keywords let, const, var

//var: before the const & let the only keyword is to declare the variables is var keyword.
var  distance = 21;
console.log(distance);

//------------------------------------------------------------------------------------------------------------------

//const: const keyword is used to declare the variable, the variables value can't be changed that are declared with const keyword.
//const keyword used where the value need not to be changed.
//while declaring the variable value also be assigned
const miles = 50;
console.log(miles);//prints 50
miles = 60;//gives error TypeError: Assignment to constant variable.
console.log(miles);

//--------------------------------------------------------------------------------------------------------------------

//let keyword is used to decalre the variable
let age = 30;
console.log(age);
//for primitive types when we use const keyword we can't assign/change the value
const pi = 3.14;
//pi = 3.12; //throws error Assignment to constant variable.
console.log(pi);

/*Array with const keyword: It does NOT define a constant array. It defines a constant reference to an array.
Because of this, we can still change the elements of a constant array. */

const array1 = [1,2,3,4];
array1.pop();
array1.push('hello');
array1[2] = true;
console.log(array1);

array1 = [1,2,true,'hello']; //throws error Assignment to constant variable.
//even though both values are same but the reference is different in memory.
console.log(array1);
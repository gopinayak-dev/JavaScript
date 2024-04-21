/*if we use strict equal(===) or abstract equal(==) for checking equality of two arrays it will throw the false as result,
even though values in the two arrays are equal. since JavaScript compares Arrays by reference, not value*/

console.log('hi'==='hi');//true
console.log('hi'=='hi');//true
//console.log([hi]===[hi]);//false
//console.log([hi]==[hi]);//false

let nums = [1,2,3];
let numsCopy = nums;
//here nums and numsCopy both the variables are referring to same array in the memory.
//So if we change any thing in any one variable that will reflects in both arrays.
nums.push(4);
numsCopy.push(5,6);
console.log(nums);
console.log(numsCopy);

console.log(nums === numsCopy);//true
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//string is a primitive data type, it is used to represent the sequence of characters enclosed in single ordouble quotes.
let str1 = 'hello welcome to JS';

//string contains the properties and methods
//length is property of string and it returns the length of string.
console.log(str1.length);//prints 19.

//below are few methods of string data type
let strLowCase = str1.toLocaleLowerCase();//it returns the new string with all char changed to lowercase. It doesn't change orginal string
console.log(strLowCase);

let strUpper = str1.toUpperCase();//returns the new string with upper case char.
console.log(strUpper);

console.log(str1);//prints original str. orginal string not changed.

console.log('charAt()--------------------------------------------------')
 //charAt() returns the character at specified index. here we need to give index as argument
 console.log(str1.charAt(0));//here index starts from zero.
 console.log(str1.charAt(4));

 console.log('indexOf()--------------------------------------------------')
 //indexOf() returns the index of specified character.here we need to give specified char as argument
 console.log(str1.indexOf('h'));
 console.log(str1.indexOf('o'));

 console.log('concat()--------------------------------------------------')
//concat() joins the two strigs and returns the new string.
let str2 = ' world';
let str3 = str1.concat(str2);
console.log(str3);

console.log('endsWith()--------------------------------------------------')
//endsWith() checks the string it ends with given char or word and returns the true/false
console.log(str1.endsWith('JS'));//true
console.log(str1.endsWith('Java'));//false
console.log(str1.endsWith('S'));//true

console.log('startsWith()--------------------------------------------------')
//startsWith()
console.log(str1.startsWith('hello'))//true
console.log(str1.startsWith('o'))//false
console.log(str1.startsWith('h'))//true

console.log('includes()--------------------------------------------------')
//includes() checks the specified char or word present in the string and returns true/false
console.log(str1.includes('to'));//true
console.log(str1.includes('java'));//false

console.log('lastindexOf()--------------------------------------------------')
//latindexOf() returns the specified char index from the last
console.log(str1.lastIndexOf('o'));

console.log('repeat()--------------------------------------------------')
//repeats() returns the string with specified no of times
console.log('hello'.repeat(2));

console.log('replace()--------------------------------------------------')
//replace() returns the current char/word is replaced with specified char/word.
console.log(str1.replace('JS', 'Java'));

console.log('replaceAll()--------------------------------------------------')
//replaces the all the char in string with specified char.
console.log(str1.replaceAll('l', 'k'));

console.log('slice(startIndex, endIndex)--------------------------------------------------')
//slice() returns the new string
console.log(str1.slice(0,5));//here endIndex is optional. If it is not mentioned goes up to last index.
console.log(str1.slice(8));

console.log('slice(startIndex, endIndex)--------------------------------------------------')
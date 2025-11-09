/*In JavaScript, a variable is a container used to store data values — such as numbers, text, objects, or 
other data types — that your program can later use, modify, or display.

There are three main ways to declare (define) a variable:
1.var
2.let
3.const
*/


var fname = "Gopi";
console.log(fname); // Output: Gopi

/*Introduced in early JavaScript versions.
Has function scope (not block scope).
Can be re-declared and updated.
Not recommended in modern JavaScript (can cause bugs).*/


let age = 25;
console.log(age); // Output: 25
age = 26; // ✅ You can update it

/*Introduced in ES6 (2015).
Has block scope — only available within { } where defined.
Can be updated but not re-declared in the same scope*/

const PI = 3.1416;
console.log(PI); // Output: 3.1416
// PI = 3.15; ❌ Error: Assignment to constant variable

/*Also block-scoped.
Must be initialized when declared.
Cannot be changed or re-declared. */


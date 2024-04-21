//Arrays: Arrays are ordered collection of data
// In array we can store similar data type or different/mixed data type

//creating Empty Array: for to create empty array we'll assign the square brackets to a variable
let emptyArray = [];

//Array with similar data type:
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"]; //string data type array
const sequence = [1, 1, 2, 3, 5, 8, 13]; //number data type array

//In an array we can store various data types — strings, numbers, objects, and even other arrays.
const mixed = [true, undefined, null,NaN, 'hello', 10, 9.22]; //different data type array

//Length of Array: 
//----------------
/*You can find out the length of an array (how many items are in it) in exactly the same way as you find out 
the length (in characters) of a string — by using the length property.*/
console.log("No of items in shopping list "+shopping.length); // 5


//Accessing items in Array:
//------------------------
/* Items in an array are numbered, starting from zero. This number is called the item's index.
So the first item has index 0, the second has index 1, and so on. You can access individual items
in the array using bracket notation and supplying the item's index, in the same way that you accessed
the letters in a string. */
console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);

//Modifying items in Array:
//--------------------------
/*You can also modify an item in an array by giving a single array item a new value*/
console.log("before modifying: "+shopping);
shopping[0] = "tahini";
shopping[3] = "chocolate";
console.log("after modifying: "+shopping);
//what will happens if I give the outofindex:
shopping[10] = 'meat';
console.log("after giving outofindex: "+shopping);
console.log(shopping[9]); //undefined
console.log("length after giving outofindex: "+shopping.length);

/*Note: 
-------
In string we can't able to modify the each characters like modifying the items in array*/
let totalName = "Raju";
totalName[3] = 'a';
console.log("name will not modify "+totalName);


//Note:
//----
/*Note that an array inside an array is called a multidimensional array. You can access an item inside 
an array that is itself inside another array by chaining two sets of square brackets together. For example, 
to access one of the items inside the array that is the third item inside the random array (see previous section), 
we could do something like this:  */
const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Array Methods: Methods are used to manipulate the arrays

/*Adding Items: push(), unshift()
---------------
To add one or more items to the end of an array we can use push().
To add one or more items to the start of an array we can use unshift().
Note that you need to include one or more items that you want to add to the end of your array or start of your array. */

//push():
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

/*Note: The new length of the array is returned when the push() & unshift() method call completes. If you wanted to 
store the new array length in a variable, you could do something like this: */
const newLength = cities.push("Bristol");
console.log(newLength); // 6

//unshift():
const newLength2 =cities.unshift("Edinburgh"); //returns new length of array
console.log(cities);
console.log(newLength2); // 6


/*Removing Items: pop(), shift() 
-----------------
To remove the last item from the array, use pop().
To remove the first item from the array, use shift().
Note: The pop() & shift() method returns the item that was removed. */

//pop():
console.log('before pop() method array is: '+cities);
console.log(cities.length);
cities.pop();
console.log(cities.length);
const removedCity = cities.pop();
console.log(removedCity);


//shift():
console.log('before shift() method array is: '+cities);
console.log(cities.length);
cities.shift();
console.log(cities.length);
const removedCity2 = cities.shift();
console.log(removedCity2);


/*Finding Index of items in an Array: indexOf()
-------------------------------------
If you don't know the index of an item, you can use the indexOf() method. The indexOf() method takes an item as 
an argument and will either return the item's index or -1 if the item is not in the array:  */
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1


/*includes():
-------------
The includes() method of Array instances determines whether an array includes a certain value among its entries, 
returning true or false as appropriate.   */
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('Owl')); // Expected output: true
console.log(birds.includes('cat')); // Expected output: true
console.log(pets.includes('at')); // Expected output: false

/*concat():
-----------
The concat() method of Array instances is used to merge two or more arrays. This method does not change the 
existing arrays, but instead returns a new array.  */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array4 = array2.concat(array1);
console.log(array3);
console.log(array4);
console.log(array1);
console.log(array2);


/*reverse():
-----------
The reverse() method of Array instances reverses an array in place and returns the reference to the same array, 
the first array element now becoming the last, and the last array element becoming the first. In other words, 
elements order in the array will be turned towards the direction opposite to that previously stated.  */
array3.reverse(); //Note: original array will modified.
console.log(array3);
console.log(array4.reverse());


/*slice():
----------
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object 
selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified. */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//if we not give end index it will go to the end of array
console.log("without end index: "+animals.slice(2)); //returns new array Expected output: Array ["camel", "duck", "elephant"]
//if we give out of index it will take up to last index
console.log("end index is out of index: "+animals.slice(2, 10)); 
console.log(animals);//original array will not change
console.log(animals.slice(2,4));//[ 'camel', 'duck' ]

//Note: Negative index counts back from the end of the array — if start < 0, start + array.length is used. if end < 0, end + array.length is used.
console.log(animals.slice(-2)) //[ 'duck', 'elephant' ]
console.log(animals.slice(-3, 4))

/*splice():
-----------
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements 
and/or adding new elements in place.  */
//syntax: splice(start, deleteCount, item1, item2, /* …, */ itemN)
const months = ['Jan', 'March', 'April', 'June'];   
months.splice(1, 0, 'Feb');//returns the removed element
console.log(months);//original array will change
let eleRemoved = months.splice(4, 1, 'May', 'June');
console.log(eleRemoved);
console.log(months.splice(4, 2, 'May', 'June', 'July'));
console.log(months);


//The while loop loops through a block of code as long as a specified condition is true.
/*Syntax
while (condition) {
  // code block to be executed
}
 */

//note: If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
  }

//do_while loop:
/*The do while loop is a variant of the while loop. This loop will execute the code block once, 
  before checking if the condition is true, then it will repeat the loop as long as the condition is true. 
  
Syntax
do {
  // code block to be executed
}
while (condition);

*/
let j=11
do {
    console.log('------'+j);
    j++;
  }
  while (j < 10); 


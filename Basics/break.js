/*the break keyword is used to exit a loop prematurely. It is typically used within for, while, or 
do...while loops to terminate the loop's execution before it reaches its normal exit condition. 

When a break statement is encountered, the program flow immediately exits the loop or switch statement, 
and execution continues after the loop or switch block. If there are nested loops, the break statement 
will only exit the innermost loop in which it is placed.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    console.log(i);
  }
  
  console.log('at i=5 loop will terminates')
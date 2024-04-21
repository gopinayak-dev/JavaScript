/*the continue keyword is used within loops (such as for, while, or do...while) to skip the 
current iteration of the loop and move on to the next iteration. It effectively allows you 
to bypass the remaining code within the loop for the current iteration and proceed to the 
next iteration. The continue statement is often used in conjunction with conditional statements 
to control when a loop iteration should be skipped. 

The continue statement is useful for cases where you want to skip specific iterations of a loop based 
on some condition, allowing you to avoid executing certain code during those iterations while continuing 
with the loop.
*/

for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Skip iteration when i is 2
    }
    console.log(i);
  }

  console.log('at i==2 skips the loop & goes to next iteration');
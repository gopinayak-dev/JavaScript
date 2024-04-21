
let maximum = parseInt(prompt("Enter the Maximum Number!"));
console.log(maximum);

//while loop checks the given maximum is Number data type or not & runs until maximum is a Number data type
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

//target is the number we need to guess
let target = parseInt(Math.floor(Math.random() * maximum) + 1);
console.log(target);

//need to enter the guessing number
let guess = prompt("Enter your first guess! (Type 'q' to Quit)");
console.log(guess);

//finds the how many times we attempted to correctly guess the target number
let attempts = 1;

//while loop runs until only when guess number is not equal to target number
while(parseInt(guess) !== target){

    //if guess is q then exits from while loop
    if(guess === 'q') break;
    
    guess = parseInt(guess);

    if(guess > target){
        guess = prompt("guess is too high: Enter new guess!");
        attempts++;
    }
    else if(guess < target){
        guess = prompt("guess is too low: Enter new guess!");
        attempts++;
    }
    else{
        guess = prompt("Invalid guess. Please enter a number or Type 'q' to Quit");
    }
}

//if guess is equal to q then exits from game
if(guess === 'q'){
    console.log("OK, You Quited from Game");
}
else{
    console.log(`Congratulations! your guess is correct in ${attempts} attempts:)`);
}

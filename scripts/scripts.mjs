// Part 1 
// num variable to hold a randomly generated number between 0 - 100
let num = Math.floor(Math.random(100)*100);
console.log(`CHEATER!!! The answer is ${num}.`);
//let bodyColor = document.body.
//bodyColor.style.backgroundColor = 'gold';

// For loop to give user 5 tries to guess
for(let tries = 5; tries >= 1; tries--)
{
    // prompt user to guess a number
    let userInput = prompt("Guess a number between 0 and 100");

    // If user guesses correct number, they win
    if(userInput == num)
    {
        // Change background color to green if user is correct
        document.body.style.backgroundColor = "green";
        // Delays message by .3s to allow background color change
        setTimeout(() => {
            alert(`YOU WIN!!!`);
        }, 300);
        
        break;
    }
    // If their guess too high, message them it's too high and remaining tries left
    else if(userInput > num)
    {
        alert(`${userInput} is too high. You have ${tries-1} tries left.`);
    }
        // If their guess too low, message them it's too low and remaining tries left
    else if(userInput < num)
        alert(`${userInput} is too low. You have ${tries-1} tries left.`);

    // If no tries left, message they lost
    if(tries == 1)
    {
        // Change background color to red if user loses
        document.body.style.backgroundColor = "red";
        // Delays message by .3s to allow background color change
        setTimeout(() => {
            alert(`Sorry, you LOSE!!!`);
        }, 300);
    }
}


// Part 2
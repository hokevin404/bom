// Create your game here!
// num variable to hold a randomly generated number between 0 - 100
let num = Math.floor(Math.random(100)*100);
//console.log(num);

// For loop to give user 5 tries to guess
for(let tries = 5; tries >= 1; tries--)
{
    // prompt user to guess a number
    let userInput = prompt("Guess a number between 0 and 100");

    // If user guesses correct number, they win
    if(userInput == num)
    {
        alert(`YOU WIN!!!`);
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
        alert(`Sorry, you LOSE!!!`);
}

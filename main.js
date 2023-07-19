/*  
    This will be a short madlib program. 
    It will ask for user input of different types of words one at a time. 
    E.g. --> Input an adjective.
        --> (user inputs) beautiful
    Program will take inputs and put them into the phrase.
    The madlib will then be printed.
*/

//This will be the array that stores the phrases taking the inputted words. They will be printed to the user at the end.
let madlibPromptsArr = ["Last night at", "_", "Stadium,", "_", "played against", "_"];

//This is boilerplate code to create the user interface functionality.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  /*
  This function prompts the user for a word. It then takes the word and adds it to the madlibPromptsArr in the given spot.
  The promise allows for the program to wait for the input of the user and the user input to be added to the necessary array.
  The parameter "answer" stands for the user's input. It should be a string. 
  "answer" will need to be checked and tested in the future.
  */

function getUserWordPromise ()  {
    return new Promise((resolve, reject) => {
        readline.question('Plese enter a noun.', (answer) => { 
            console.log(`Letter entered: ${answer}`);
            madlibPromptsArr.splice(madlibPromptsArr.indexOf("_"), 1, answer);
            resolve(" words inputted. Thank you for the input");
    });
    });
}

/*
This function executes the function which gets the user input multiple times.
The number of times is now hard coded in, but in future version would depend on number of needed words.
The first console log is for both user and developer tracking. 
It finally prints the madlib with the prompt and the user input.
It is then executed.
*/
async function getUserWords () {
    for (i = 0; i <= 2; i++) {
        let userAnswer = await getUserWordPromise();
        console.log(`${i + 1}${userAnswer}`);
    }

    readline.close();
    console.log(madlibPromptsArr.join(" ") + ".");

}


getUserWords();


/*CODE FROM CHATGPT:

function getUserInput(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function getUserInputs() {
  const userInput = [];

  for (let i = 0; i < 3; i++) {
    const answer = await getUserInput(`Enter a value (${i + 1}/3): `);
    userInput.push(answer);
  }

  return userInput;
}

async function printUserInputs(userInputs) {
  console.log('User inputs:');
  for (let i = 0; i < userInputs.length; i++) {
    await getUserInput(`${userInputs[i]}. Press Enter to continue.`);
    console.log(userInputs[i]);
  }
}

async function main() {
  const userInputs = await getUserInputs();
  await printUserInputs(userInputs);

  rl.close();
}

main();

*/
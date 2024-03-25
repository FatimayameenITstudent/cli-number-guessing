#! /usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate random number
//2.user input for guessing number
//3.compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: 'userguessednumber',
        type: 'number',
        message: 'please guess a number between 1-6',
    }
]);
if (answer.userguessednumber === randomnumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}

# Number Guessing Game 🎯

A simple Number Guessing Game built using JavaScript.

## How It Works

1. The user enters a maximum number.
2. The program generates a random number between `1` and the maximum number.
3. The user tries to guess the number.
4. The game provides hints:

   * "Too small" if the guess is lower than the random number.
   * "Too high" if the guess is higher than the random number.
5. The game continues until:

   * The user guesses the correct number, or
   * The user types `quit` to exit the game.

## Features

* Random number generation using `Math.random()`
* User input with `prompt()`
* Looping with `while`
* Conditional statements (`if`, `else if`, `else`)
* Exit option using `quit`
* Winning message displaying the correct number

## Technologies Used

* HTML
* JavaScript

## Sample Gameplay

Enter the max number: 10

Guess the number: 5

Hint: Your guess was too small. Please try again

Guess the number: 8

Hint: Your guess was too high. Please try again

Guess the number: 7

🎉 You win! The number was 7

## Learning Concepts

This project demonstrates:

* Variables and Constants
* User Input
* Random Number Generation
* Loops
* Conditional Logic
* Basic Game Development in JavaScript

# App Overview

word-guess-cli is an app created as a homework assignment for the UNCH Coding Bootcamp in week 12 of the program. The assignment focuses on the use of node.js constructors.

### Technologies Used

    1. Node.js

    2. npm Inquirer

### Setup

    1. Clone the repo from GitHub.

    2. In the command prompt: navigate to the root folder and run "npm install" to download the dependencies.

    3. Then run the program with "node index.js".

### Use

    1. The app initially asks the user if they would like to play the game.

![Run Program and Choose Yes or No](assets.word_guess_cli_begin.gif)

    2. The app then prompts the user to begin guessing letters in an attempt to guess the hidden word. Individual letters are denoted with "_" characters.

![Begin Guessing Letters](assets.word_guess_cli_guess.gif)

    3. Victory is acheived by fully guessing the correct word.

![Victory](assets.word_guess_cli_win.gif)

    4. Input validation prevents invalid characters, duplicate letters, and multiple letters from being guessed. Running out of guesses causes loss and requests user input for game restart.

![Input Validation and Loss](assets.word_guess_cli_loss.gif)
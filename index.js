var Word = require("./word");
var Inquirer = require("inquirer");

var alphCheck = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters =[];

var remain = 12;
var numberCorrect = 0;
var numberIncorrect = 0;

var selectedWord;

var selection = ["pomegranate", "banana", "blueberry", "blackberry", "mango", "cherry", "strawberry", "watermelon", "canteloupe", "peach", "lemon", "raspberry"];

function rand() {
    return Math.floor(Math.random() * (selection.length + 1)) 
};

function run() {
    selectedWord = new Word(selection[rand()]);
    selectedWord.splitWord();
    console.log("You have won " + numberCorrect + " times!");
    console.log("You have lost " + numberIncorrect + " times!");
    request();
};

function start() {
    Inquirer.prompt([
        {type: "confirm",
        name: "start",
        message: "Would you like to play a game?",
        default: true
    }
    ]).then((res) => {
        if (res.start == true) {
            run();
        }
    })
};

function restart() {
    Inquirer.prompt([
        {type: "confirm",
        name: "start",
        message: "Would you like to play again?",
        default: true
    }
    ]).then((res) => {
        if (res.start == true) {
            run();
        }
    })
};

function request() {
    console.log("You have " + remain + " guesses remaining.")
    Inquirer.prompt([
        {type: "input",
        message: "Guess a letter to complete the word below. \n Hint: Fruit \n" + selectedWord.string() + "\n",
        name: "letterGuess",
        validate: function(input) {
            if (alphCheck.includes(input.toLowerCase()) && !guessedLetters.includes(input)) {
                return true;
            } else {return false};
        }}
    ]).then((res) => {
        selectedWord.check(res);
        guessedLetters.push(res.letterGuess);
        console.log("You have guessed: " + guessedLetters);
        winCheck();
    });
};

function winCheck() {
    if (allGuessed()) {
        finishedWin();
    } else if (remain <= 1) {
        finishedLose();
    } else {
        remain--;
        request();
    }
};

function allGuessed() {
    for (let i = 0; i < selectedWord.letters.length; i++) {
        if (!selectedWord.letters[i].guessed) {
            return false;
        };
    };
    return true;
};

function finishedWin() {
    console.log("You got it!");
    numberCorrect++;
    reset();
    restart();
};

function finishedLose() {
    console.log("You ran out of guesses!");
    numberIncorrect++;
    reset();
    restart();
};

function reset() {
    remain=12;
    guessedLetters=[];
    selectedWord="";
}

start();
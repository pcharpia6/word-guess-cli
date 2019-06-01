var Letter = require("./letter");

// var letter = new Letter;

var Word = function(input) {
    this.letters = [],
    this.splitWord = function() {
        let wordSplit = input.split("");
        for (let i = 0; i < wordSplit.length; i++) {
            this.letters.push(new Letter(wordSplit[i]))
        }
    },
    this.string = function() {
        str = [];
        for (let i = 0; i < this.letters.length; i++) {
            str.push(this.letters[i].ret());
        }
        return str.join(" ");
    },
    this.check = function(letter) {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].check(letter.letterGuess);
        }
        console.log(letter.letterGuess);
    }
};

module.exports = Word;
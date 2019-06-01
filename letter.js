// constructor function for creating new letters
var Letter = function(id) {
    this.id = id,
    this.guessed = false,
    this.ret = function() {
        if (this.guessed == true) {
            return id
        } else {return "_"}
    },
    this.check = function(char) {
        if (char == id) {
            this.guessed = true;
        }
    }
};

// exporting the Letter constructor
module.exports = Letter;
const reverseString = function(inputString) {
    if (inputString == ''){
        return inputString;
    }

    var splitString = inputString.split('');
    splitString.reverse();

    joinedString = splitString.join('');
    return joinedString;

};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(inputString, inputTimes) {

    if (inputTimes < 0) {
        return "ERROR";
    }
    if (inputString == "") {
        return inputString
    }
    return inputString.repeat(inputTimes);

};

// Do not edit below this line
module.exports = repeatString;

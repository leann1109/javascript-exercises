const reverseString = function(string) {
    let stringInReverse = "";

    if (string.length > 0) {
        for (i = string.length; i >= 0; i--) {
            stringInReverse += string.charAt(i);
        }
        return stringInReverse;
    }
    else {
        return stringInReverse;
    }
};

// Do not edit below this line
module.exports = reverseString;

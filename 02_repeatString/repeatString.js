const repeatString = function(string, num) {
    let stringResult = "";

    if (num > 0) {
        for (i = 0; i < num; i++) {
            stringResult += string;
        }
        return stringResult;
    }
    else if (num == 0) {
        return stringResult;
    }
    else {
        return "ERROR";
    }
}
// Do not edit below this line
module.exports = repeatString;
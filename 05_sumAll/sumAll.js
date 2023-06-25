const sumAll = function(num1,num2) {
    let sumAllEqualTo = 0;
    let testForNegative = num1 + num2;

    if (num1 < num2 && testForNegative > 0 
        && typeof num1 === "number" && typeof num2 === "number") {
        for (i = num1; i <= num2; i++) {
            sumAllEqualTo += i;
        }
        return sumAllEqualTo;
    }
    else if (num1 > num2 && testForNegative > 0 
        && typeof num1 === "number" && typeof num2 === "number") {
        for (i = num1; i >= num2; i--) {
            sumAllEqualTo += i;
        }
        return sumAllEqualTo;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

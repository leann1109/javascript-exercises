const removeFromArray = function(array, ...args) {
    for (i = 0; i < array.length; i++) {
        return array.filter(x => !args.includes(x))
    }
};

// Do not edit below this line
module.exports = removeFromArray;

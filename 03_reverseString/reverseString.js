const reverseString = function(string) {
    let gnirtS = "";
    for(let i = string.length-1; i >= 0; i--) {
        gnirtS = gnirtS + string[i];
    }
    return gnirtS;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    let sanitisedString = "";
    
    for(let  i = 0; i < string.length; i++) {
        if(string[i] !== "!" && string[i] !== "," && string[i] !== "." && string[i] !== " ") {
            sanitisedString = sanitisedString + string[i];
        }
    }
    sanitisedString = sanitisedString.toUpperCase()

    let reversedString = "";

    for(let i = sanitisedString.length-1; i >= 0; i--) {
        reversedString = reversedString + sanitisedString[i];
    }
    if(reversedString === sanitisedString) {
        return true;
    } else {return false}

};

// Do not edit below this line
module.exports = palindromes;

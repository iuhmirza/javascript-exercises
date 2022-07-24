const sumAll = function(a, b) {
    if(a < 0 || b < 0) {
        return "ERROR"
    }
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR"
    }
    let start, stop;
    if(b>a) {
        start = a;
        stop = b;
    } else {
        start = b;
        stop = a;
    }
    let counter = 0;
    for(let i = start; i < stop+1; i++) {
        counter += i;
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;

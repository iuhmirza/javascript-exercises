const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS"
    }
    fibonacciArray = [1, 1];
    for(let i = 0; i < n; i++) {
        fibonacciArray[i+2] = fibonacciArray[i+1] + fibonacciArray[i];
    }
    return fibonacciArray[n-1]
};

// Do not edit below this line
module.exports = fibonacci;

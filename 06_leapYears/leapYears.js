const leapYears = function(year) {
    if(year % 100 === 0) {
        year = year/100;
    }
    if(year % 4 === 0){
        return true
    } else {return false}

};

// Do not edit below this line
module.exports = leapYears;

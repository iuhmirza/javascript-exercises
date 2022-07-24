const removeFromArray = function(array, ...val) {
    let removedArray = [];
    let include = true;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < val.length; j++) {
            if(array[i] === val[j]) {
                include = false;
            }
        }
        if(include === true){
            removedArray.push(array[i]);
        }
        include = true
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

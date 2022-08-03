const findTheOldest = function(people) {
    for(let person of people) {
        if(person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = (new Date().getFullYear()) - person.yearOfBirth;
        }

    };
    let oldest = "";
    let oldestAge = 0;
    for(let person of people) {
        if(person.age > oldestAge){
            oldestAge = person.age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = (people) => {

    people.sort((person1, person2) => {
        const currentYear = (new Date()).getFullYear();
        let age1;
        let age2;
        if (person1.yearOfDeath === undefined) {
            age1 = currentYear - person1.yearOfBirth;
        } else age1 = person1.yearOfDeath - person1.yearOfBirth;

        if (person2.yearOfDeath === undefined) {
            age2 = currentYear - person2.yearOfBirth;
        } else age2 = person2.yearOfDeath - person2.yearOfBirth;
        return age1 - age2;
    });

    const everyoneIsDead = people.every(person => {
        return typeof (person.yearOfDeath) === 'number';
    });
    const someoneIsAlive = people.some(person => {
        return typeof (person.yearOfDeath) !== 'number';
    });
    const oldestStillAlive = (people) => {
        return people[people.length - 1]['yearOfDeath'] === undefined;
    };

    if (everyoneIsDead) {
        return people[people.length - 1];
    } else if (someoneIsAlive) {
        return people[people.length - 1];
    } else if (oldestStillAlive(people)) {
        return people[people.length - 1];
    }
};

// Do not edit below this line
module.exports = findTheOldest;

const fibonacci = function (member) {
    if (member < 0) return 'OOPS';

    let fibArray = [];
    for (i = 0; i < member; i++) {
        if (i === 0 || i === 1) {
            fibArray.push(1);
        } else {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }
    return fibArray[member - 1];

};

// Do not edit below this line
module.exports = fibonacci;

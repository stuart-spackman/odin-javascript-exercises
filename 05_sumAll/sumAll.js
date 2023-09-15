const sumAll = function (n, m) {
    if (n < 0 || m < 0) {
        return 'ERROR';
    } else if (typeof (n) !== 'number' || typeof (m) !== 'number') {
        return 'ERROR';
    } else {
        let arr = [n, m].sort();
        let sum = 0;
        for (i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        return sum;
        ;
    }
};

// Do not edit below this line
module.exports = sumAll;

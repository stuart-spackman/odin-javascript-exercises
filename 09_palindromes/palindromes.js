const palindromes = function (string) {
    let edit = string.toLowerCase().replaceAll('!', '').replaceAll(',', '').replaceAll(' ', '').replaceAll('.', '');
    let arr = edit.split('');
    let reversedArr = [];
    while (arr.length > 0) {
        reversedArr.push(arr.pop());
    }
    let reversed = reversedArr.reduce((newString, char) => {
        return newString += char;
    }, '');
    return edit === reversed;



};

// Do not edit below this line
module.exports = palindromes;

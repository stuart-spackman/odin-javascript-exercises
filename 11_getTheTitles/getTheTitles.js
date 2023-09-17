const getTheTitles = function (obj) {
    let titles = obj.map(book => {
        return book.title;
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

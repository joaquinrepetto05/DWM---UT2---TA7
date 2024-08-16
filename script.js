function getTheTitles(books) {
    var titles = [];

    for (var book of books) {
        titles.push(book.title);
    }

    return titles;
}

const books = [
    {
        title: 'Book1',
        author: 'Name1'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    },
    {
        title: 'Book5',
        author: 'Name5'
    }
];

console.log(getTheTitles(books));

// OTRAS ALTERNATIVAS:
/*

function getTheTitles(books) {
    return books.map(book => book.title); // Se usa el método .map()
}

function getTheTitles(books) {
    var titles = [];
    books.forEach(book => titles.push(book.title)); // Se usa el método .forEach()
    return titles;
}

*/
const apiUrl = 'https://65d6dc82f6967ba8e3bec1ae.mockapi.io/practice/v1/';

function fetchBooks() {
  return fetch(apiUrl + 'books').then(res => res.json());
}
// ----------------------------------------------------------------------- GET

function fetchBooksID(bookId) {
  return fetch(`${apiUrl}books/${bookId}`).then(res => res.json());
}

fetchBooks();
// fetchBooksID(2);
// fetchBooksID(4);
// ----------------------------------------------------------------------- POST
function addBook(book) {
  const options = {
    method: 'POSt',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(book),
  };
  return fetch(apiUrl + 'books', options).then(res => res.json());
}

addBook({
  title: 'test book',
  author: 'TestName',
  genres: ['test'],
  Rating: 9,
}).then(book => {
  console.log('All ok');
  console.log(book);
});
// ----------------------------------------------------------------------- PUT/PATCH
function updateBookId(update, bookId) {
  const options = {
    method: 'PUT', // дивитися в документацію
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(update),
  };
  return fetch(`${apiUrl}books/${bookId}`, options).then(res => res.json());
}

updateBookId({ title: 'test1', author: 'testII' }, 13);
updateBookId({ title: 'test2', author: 'testIII', Rating: 9999 }, 17);
updateBookId({ title: 'test3', author: 'testIV' }, 21);
// ----------------------------------------------------------------------- DELETE

function removeBook(bookId) {
  const config = {
    method: 'DELETE',
  };
  return fetch(`${apiUrl}books/${bookId}`, config).then(res => res.json());
}

removeBook(14);
removeBook(17);

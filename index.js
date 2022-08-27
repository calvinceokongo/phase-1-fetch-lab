function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(json => renderBooks(json))

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
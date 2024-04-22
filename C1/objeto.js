function Book(title, pages, isbn) { 
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}
var book = new Book('JavaScript', '324', 'isbn');
console.log(book.title); // exibe o título do livro 
book.title = 'new title'; // atualiza o valor do título do livro 
console.log(book.title); // exibe o valor atualizado

Book.prototype.printTitle = function() { 
  book.title = 'JavaScript de novo';
  console.log(this.title);
};
book.printTitle();
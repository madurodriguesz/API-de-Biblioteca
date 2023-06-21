const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Exemplo de dados da biblioteca
let books = [
  { id: 1, title: 'Livro 1', author: 'Autor 1' },
  { id: 2, title: 'Livro 2', author: 'Autor 2' },
];

// Rota para obter todos os livros
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Rota para obter um livro específico
app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (!book) {
    res.status(404).json({ error: 'Livro não encontrado' });
  } else {
    res.json(book);
  }
});

// Rota para adicionar um novo livro
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;

  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);

  res.status(201).json(newBook);
});

// Rota para atualizar um livro existente
app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(book => book.id === id);

  if (!book) {
    res.status(404).json({ error: 'Livro não encontrado' });
  } else {
    book.title = title || book.title;
    book.author = author || book.author;

    res.json(book);
  }
});

// Rota para remover um livro
app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    res.status(404).json({ error: 'Livro não encontrado' });
  } else {
    books.splice(bookIndex, 1);
    res.sendStatus(204);
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

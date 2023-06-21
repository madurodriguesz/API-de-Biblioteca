# API-de-Biblioteca
Este é um exemplo de uma API de biblioteca simples desenvolvida em Node.js utilizando o framework Express.

A API permite obter informações sobre livros, adicionar novos livros, atualizar informações existentes e remover livros.

## Instalação

Tem que ter o Node.js e o npm instalados na sua máquina.

1. Clone este repositório:
 git clone https://github.com/madurodriguesz/API-de-Biblioteca.git


2. Navegue até o diretório do projeto:
cd api-biblioteca


3. Instale as dependências:
npm install

## Utilização

1. Inicie a API executando o seguinte comando:
node server.js


2. A API estará disponível em `http://localhost:3000/api/books`.

3. Utilize uma ferramenta de teste de API, como o Postman ou o cURL, para interagir com os endpoints disponíveis.

## Endpoints

- `GET /api/books`: Obter todos os livros.
- `GET /api/books/:id`: Obter um livro específico pelo ID.
- `POST /api/books`: Adicionar um novo livro.
- `PUT /api/books/:id`: Atualizar um livro existente pelo ID.
- `DELETE /api/books/:id`: Remover um livro pelo ID.

Certifique-se de fornecer os dados corretos nos formatos adequados ao realizar solicitações POST e PUT.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novos recursos.

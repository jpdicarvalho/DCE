const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// 1. Criando o Schema
const schema = buildSchema(`
    type Query {
      hello: String
    }
`);

  // 2. Criando o Resolver
const root = {
    hello: () => "Hello, World!",
};

  // 3. Inicializando o servidor Express com GraphQL
const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Habilita interface GraphiQL para testes
  })
);

// 4. Iniciando o servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/graphql`);
});
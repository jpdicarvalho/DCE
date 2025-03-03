export const typeDefs = `#graphql
    type Fornecedor {
        id: ID!
        nome: String!
        logo: String!
        estado: String!
        custo_por_kwh: Float!
        limite_minimo_kwh: Int!
        clientesAtendidos: Int
        avaliacaoMedia: Float
        avaliacoes: [Avaliacao]
    }

    type Avaliacao {
        id: ID!
        fornecedorId: Int!
        nota: Float!
        comentario: String
        data: String!
    }

    type Query {
        fornecedores(consumo: Int!): [Fornecedor]
    }
`;

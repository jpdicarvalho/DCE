export const typeDefs = `#graphql
    type Fornecedor {
        id: ID!
        nome: String!
        logo: String!
        estado: String!
        custo_por_kwh: Float!
        limite_minimo_kwh: Int!
    }

    type Query {
        fornecedores(consumo: Int!): [Fornecedor]
    }
`;

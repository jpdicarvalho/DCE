export const typeDefs = `#graphql
    type Fornecedor {
        id: ID!
        nome: String!
        logo: String!
        estado: String!
        custo_por_kwh: Float!
        limite_minimo_kwh: Int!
        avaliacoes: [Avaliacao]
        avaliacaoMedia: Float
        clientesAtendidos: Int # Adicionamos o número total de clientes atendidos
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

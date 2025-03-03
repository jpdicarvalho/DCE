import prisma from '../config/database.js';

export const resolvers = {
    Query: {
        fornecedores: async (_: any, { consumo }: { consumo: number }) => {
            if (consumo <= 0) {
                throw new Error("O consumo deve ser um número maior que zero.");
            }

            const fornecedores = await prisma.fornecedor.findMany({
                where: {
                    limite_minimo_kwh: { lte: consumo }
                },
                include: {
                    avaliacoes: true,
                    clientesAtendidos: true,
                }
            });

            return fornecedores.map(fornecedor => ({
                ...fornecedor,
                avaliacaoMedia: fornecedor.avaliacoes.length > 0
                    ? fornecedor.avaliacoes.reduce((acc, a) => acc + a.nota, 0) / fornecedor.avaliacoes.length
                    : 0,
                clientesAtendidos: fornecedor.clientesAtendidos
                    ? fornecedor.clientesAtendidos.quantidade
                    : 0
            }));
        },
    },
};

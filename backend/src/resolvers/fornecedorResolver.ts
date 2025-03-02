import prisma from '../config/database.js';

export const resolvers = {
    Query: {
        fornecedores: async (_: any, { consumo }: { consumo: number }) => {
            if (consumo <= 0) {
                throw new Error("O consumo deve ser um número maior que zero.");
            }

            return await prisma.fornecedor.findMany({
                where: {
                    limite_minimo_kwh: { lte: consumo }
                }
            });
        },
    },
};

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.fornecedor.createMany({
        data: [
            {
                nome: 'Energia Solar LTDA',
                logo: 'https://example.com/solar-logo.png',
                estado: 'SP',
                custo_por_kwh: 0.42,
                limite_minimo_kwh: 25000,
            },
            {
                nome: 'Hidrelétrica do Norte',
                logo: 'https://example.com/hidro-logo.png',
                estado: 'AM',
                custo_por_kwh: 0.38,
                limite_minimo_kwh: 20000,
            },
            {
                nome: 'Eólica Brasil',
                logo: 'https://example.com/eolica-logo.png',
                estado: 'RN',
                custo_por_kwh: 0.45,
                limite_minimo_kwh: 15000,
            },
            {
                nome: 'Usina de Biomassa Verde',
                logo: 'https://example.com/biomassa-logo.png',
                estado: 'MT',
                custo_por_kwh: 0.40,
                limite_minimo_kwh: 18000,
            },
        ],
    });
    console.log('Dados de fornecedores inseridos com sucesso!');
}
main()
    .catch((e) => {
    console.error('Erro ao popular o banco:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});

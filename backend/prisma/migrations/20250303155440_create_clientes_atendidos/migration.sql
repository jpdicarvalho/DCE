-- CreateTable
CREATE TABLE `clientes_atendidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fornecedorId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `clientes_atendidos_fornecedorId_key`(`fornecedorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientes_atendidos` ADD CONSTRAINT `clientes_atendidos_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

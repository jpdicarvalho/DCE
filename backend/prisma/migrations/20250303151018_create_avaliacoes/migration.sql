-- CreateTable
CREATE TABLE `avaliacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fornecedorId` INTEGER NOT NULL,
    `nota` DOUBLE NOT NULL DEFAULT 0.0,
    `comentario` VARCHAR(191) NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

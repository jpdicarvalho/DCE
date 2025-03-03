-- CreateTable
CREATE TABLE `fornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `custo_por_kwh` DOUBLE NOT NULL,
    `limite_minimo_kwh` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

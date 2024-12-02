/*
  Warnings:

  - You are about to drop the column `courseId` on the `clase` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `clase` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `clase` table. All the data in the column will be lost.
  - Added the required column `classNumber` to the `Clase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `Clase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `clase` DROP FOREIGN KEY `Clase_courseId_fkey`;

-- AlterTable
ALTER TABLE `clase` DROP COLUMN `courseId`,
    DROP COLUMN `number`,
    DROP COLUMN `thumbnail`,
    ADD COLUMN `classNumber` INTEGER NOT NULL,
    ADD COLUMN `moduleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `course` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Module` ADD CONSTRAINT `Module_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clase` ADD CONSTRAINT `Clase_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

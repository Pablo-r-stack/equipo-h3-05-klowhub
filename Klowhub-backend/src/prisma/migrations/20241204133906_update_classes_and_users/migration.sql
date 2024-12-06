/*
  Warnings:

  - You are about to drop the column `video` on the `clase` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clase` DROP COLUMN `video`,
    ADD COLUMN `thumbnail` VARCHAR(191) NULL,
    ADD COLUMN `videoUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `avatar`,
    ADD COLUMN `avatarUrl` VARCHAR(191) NULL;

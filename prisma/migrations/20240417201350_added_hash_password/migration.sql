-- AlterTable
ALTER TABLE `user` ADD COLUMN `hashedPassword` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

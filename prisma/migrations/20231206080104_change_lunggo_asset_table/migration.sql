/*
  Warnings:

  - You are about to alter the column `price` on the `lunggo_asset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(25)` to `Int`.
  - You are about to alter the column `price_total` on the `user_booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(25)` to `Int`.
  - Added the required column `location` to the `lunggo_asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lunggo_asset` ADD COLUMN `location` VARCHAR(25) NOT NULL,
    MODIFY `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user_booking` MODIFY `price_total` INTEGER NOT NULL;

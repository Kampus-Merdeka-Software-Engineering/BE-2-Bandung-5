/*
  Warnings:

  - Added the required column `price` to the `lunggo_asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lunggo_asset` ADD COLUMN `price` VARCHAR(25) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `paid` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `items` DROP COLUMN `paid`,
    ADD COLUMN `completed` BOOLEAN NOT NULL DEFAULT false;

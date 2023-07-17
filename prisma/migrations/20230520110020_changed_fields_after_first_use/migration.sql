/*
  Warnings:

  - You are about to drop the column `dateActual` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `activities` DROP COLUMN `dateActual`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `duration`,
    ADD COLUMN `paid` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `planned` BOOLEAN NOT NULL DEFAULT true;

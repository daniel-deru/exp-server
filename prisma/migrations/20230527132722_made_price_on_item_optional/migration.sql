/*
  Warnings:

  - The values [Active] on the enum `activities_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `activities` MODIFY `status` ENUM('Pending', 'Finished', 'Cancelled') NOT NULL DEFAULT 'Pending';

-- AlterTable
ALTER TABLE `items` MODIFY `price` DOUBLE NULL;

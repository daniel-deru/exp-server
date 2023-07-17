/*
  Warnings:

  - The values [Cancelled] on the enum `activities_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `activities` MODIFY `status` ENUM('Pending', 'Finished', 'Active') NOT NULL DEFAULT 'Pending';

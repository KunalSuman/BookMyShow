/*
  Warnings:

  - Made the column `image` on table `movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "movie" ALTER COLUMN "image" SET NOT NULL;

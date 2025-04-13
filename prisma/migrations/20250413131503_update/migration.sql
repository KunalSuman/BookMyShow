/*
  Warnings:

  - You are about to drop the column `image` on the `movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "f1" ALTER COLUMN "date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "movie" DROP COLUMN "image";

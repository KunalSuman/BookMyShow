/*
  Warnings:

  - You are about to drop the column `seat` on the `concert` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `f1` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "concert" DROP COLUMN "seat";

-- AlterTable
ALTER TABLE "eventpayment" ADD COLUMN     "seat" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "f1" DROP COLUMN "seat";

-- AlterTable
ALTER TABLE "movie" DROP COLUMN "seat";

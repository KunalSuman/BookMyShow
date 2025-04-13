/*
  Warnings:

  - You are about to drop the column `company_id` on the `event_history` table. All the data in the column will be lost.
  - Added the required column `amount` to the `event_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `event_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction` to the `event_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event_history" DROP COLUMN "company_id",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sender_id" TEXT NOT NULL,
ADD COLUMN     "transaction" TEXT NOT NULL;

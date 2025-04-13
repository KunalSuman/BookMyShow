/*
  Warnings:

  - You are about to drop the column `amount` on the `event_history` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `event_history` table. All the data in the column will be lost.
  - You are about to drop the column `transaction` on the `event_history` table. All the data in the column will be lost.
  - Added the required column `company_id` to the `event_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event_history" DROP COLUMN "amount",
DROP COLUMN "sender_id",
DROP COLUMN "transaction",
ADD COLUMN     "company_id" TEXT NOT NULL;

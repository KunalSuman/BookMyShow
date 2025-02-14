/*
  Warnings:

  - You are about to drop the column `type` on the `customer_history` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[transaction_id]` on the table `customer_history` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `transaction_id` to the `customer_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer_history" DROP COLUMN "type",
ADD COLUMN     "transaction_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_history_transaction_id_key" ON "customer_history"("transaction_id");

-- AddForeignKey
ALTER TABLE "customer_history" ADD CONSTRAINT "customer_history_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

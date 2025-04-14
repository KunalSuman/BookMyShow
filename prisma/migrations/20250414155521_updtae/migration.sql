/*
  Warnings:

  - You are about to drop the column `receiver_id` on the `payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "concert" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "f1" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "movie" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "receiver_id",
ADD COLUMN     "receiver_phone" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "eventpayment" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "reciver_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eventpayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

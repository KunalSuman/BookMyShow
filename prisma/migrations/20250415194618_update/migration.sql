/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customer_phone_key" ON "customer"("phone");

-- AlterTable
ALTER TABLE "concert" ALTER COLUMN "date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "movie" ALTER COLUMN "date" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "ticketsale" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,

    CONSTRAINT "ticketsale_pkey" PRIMARY KEY ("id")
);

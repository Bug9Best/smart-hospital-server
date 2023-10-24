/*
  Warnings:

  - The `status` column on the `Queue` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WAITING', 'DONE');

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'WAITING';

-- AlterTable
ALTER TABLE "Queue" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'WAITING';

-- DropEnum
DROP TYPE "QueueStatus";

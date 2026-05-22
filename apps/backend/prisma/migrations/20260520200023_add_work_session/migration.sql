/*
  Warnings:

  - The primary key for the `WorkSession` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `WorkSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `extraDayHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraNightHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holidayHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourlyRate` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nightHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sundayHours` to the `WorkSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPayment` to the `WorkSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkSession" DROP CONSTRAINT "WorkSession_pkey",
ADD COLUMN     "extraDayHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "extraNightHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "holidayHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "hourlyRate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nightHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "normalHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sundayHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "totalPayment" DOUBLE PRECISION NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WorkSession_pkey" PRIMARY KEY ("id");

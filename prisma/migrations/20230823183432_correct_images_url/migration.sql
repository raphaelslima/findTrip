/*
  Warnings:

  - You are about to drop the column `ImageUrl` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "ImageUrl",
ADD COLUMN     "ImagesUrl" TEXT[];

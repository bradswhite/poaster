/*
  Warnings:

  - You are about to drop the column `repostCount` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_reposts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_reposts" DROP CONSTRAINT "_reposts_A_fkey";

-- DropForeignKey
ALTER TABLE "_reposts" DROP CONSTRAINT "_reposts_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "repostCount";

-- DropTable
DROP TABLE "_reposts";

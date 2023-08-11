/*
  Warnings:

  - Added the required column `likeCount` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repostCount` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerCount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followingCount` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "likeCount" INTEGER NOT NULL,
ADD COLUMN     "repostCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "followerCount" INTEGER NOT NULL,
ADD COLUMN     "followingCount" INTEGER NOT NULL;

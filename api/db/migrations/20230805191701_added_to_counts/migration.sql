-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "likeCount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "followerCount" DROP NOT NULL,
ALTER COLUMN "followingCount" DROP NOT NULL;

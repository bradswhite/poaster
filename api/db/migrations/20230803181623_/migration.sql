-- AlterTable
ALTER TABLE "Follows" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Follows_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "interests" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "interestsOther" TEXT;

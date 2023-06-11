-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "cleaning" TEXT,
ADD COLUMN     "communicationMethod" TEXT,
ADD COLUMN     "hasPets" TEXT,
ADD COLUMN     "likesParties" TEXT,
ADD COLUMN     "likesPets" TEXT,
ADD COLUMN     "petsDescription" TEXT,
ADD COLUMN     "roommateConflict" TEXT,
ADD COLUMN     "roommateGender" TEXT,
ADD COLUMN     "roommateGuests" TEXT,
ADD COLUMN     "roommateSharing" TEXT,
ADD COLUMN     "sleepSchedule" TEXT,
ALTER COLUMN "alcohol" SET DATA TYPE TEXT,
ALTER COLUMN "smoking" SET DATA TYPE TEXT;

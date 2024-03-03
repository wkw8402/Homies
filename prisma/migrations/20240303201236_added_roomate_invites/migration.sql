-- CreateTable
CREATE TABLE "invites" (
    "id" TEXT NOT NULL,
    "homieId" TEXT NOT NULL,
    "roomateId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roomateStatus" TEXT,
    "homieStatus" TEXT,

    CONSTRAINT "invites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_homieId_fkey" FOREIGN KEY ("homieId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_roomateId_fkey" FOREIGN KEY ("roomateId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

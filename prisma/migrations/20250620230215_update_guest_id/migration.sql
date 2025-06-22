/*
  Warnings:

  - You are about to alter the column `id` on the `Guest` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Guest" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "rsvp" BOOL NOT NULL,
    "email" STRING,
    "phone" INT4,
    "dietaryRestrictions" STRING,
    "message" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Guest" ("createdAt","dietaryRestrictions","email","id","message","name","phone","rsvp","updatedAt") SELECT "createdAt","dietaryRestrictions","email","id","message","name","phone","rsvp","updatedAt" FROM "Guest";
DROP TABLE "Guest" CASCADE;
ALTER TABLE "_prisma_new_Guest" RENAME TO "Guest";

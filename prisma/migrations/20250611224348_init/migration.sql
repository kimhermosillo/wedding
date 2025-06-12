-- CreateEnum
CREATE TYPE "RsvpStatus" AS ENUM ('YES', 'NO', 'MAYBE', 'PENDING');

-- CreateTable
CREATE TABLE "Guest" (
    "id" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "email" STRING,
    "phone" INT4,
    "rsvp" BOOL NOT NULL,
    "dietaryRestrictions" STRING,
    "message" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

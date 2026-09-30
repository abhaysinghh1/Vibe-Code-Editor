-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER', 'PREMIUM_USER');

-- CreateEnum
CREATE TYPE "Templates" AS ENUM ('REACT', 'NEXTJS', 'EXPRESS', 'VUE', 'HONO', 'ANGULAR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playground" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "template" "Templates" NOT NULL DEFAULT 'REACT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Playground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarMark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "playgroundId" TEXT NOT NULL,
    "isMarked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StarMark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateFile" (
    "id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playgroundId" TEXT NOT NULL,

    CONSTRAINT "TemplateFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "playgroundId" TEXT,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Account_user_id_idx" ON "Account"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "Playground_userId_idx" ON "Playground"("userId");

-- CreateIndex
CREATE INDEX "Playground_template_idx" ON "Playground"("template");

-- CreateIndex
CREATE INDEX "StarMark_userId_idx" ON "StarMark"("userId");

-- CreateIndex
CREATE INDEX "StarMark_playgroundId_idx" ON "StarMark"("playgroundId");

-- CreateIndex
CREATE UNIQUE INDEX "StarMark_userId_playgroundId_key" ON "StarMark"("userId", "playgroundId");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateFile_playgroundId_key" ON "TemplateFile"("playgroundId");

-- CreateIndex
CREATE INDEX "TemplateFile_playgroundId_idx" ON "TemplateFile"("playgroundId");

-- CreateIndex
CREATE INDEX "ChatMessage_userId_idx" ON "ChatMessage"("userId");

-- CreateIndex
CREATE INDEX "ChatMessage_userId_createdAt_idx" ON "ChatMessage"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ChatMessage_playgroundId_idx" ON "ChatMessage"("playgroundId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playground" ADD CONSTRAINT "Playground_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarMark" ADD CONSTRAINT "StarMark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarMark" ADD CONSTRAINT "StarMark_playgroundId_fkey" FOREIGN KEY ("playgroundId") REFERENCES "Playground"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateFile" ADD CONSTRAINT "TemplateFile_playgroundId_fkey" FOREIGN KEY ("playgroundId") REFERENCES "Playground"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_playgroundId_fkey" FOREIGN KEY ("playgroundId") REFERENCES "Playground"("id") ON DELETE CASCADE ON UPDATE CASCADE;

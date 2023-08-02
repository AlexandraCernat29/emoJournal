import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {
  const user = await getUserByClerkId()
  const entry = user ? await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about what you ate today!'
    }
  }) : ''


  revalidatePath('/eating-journal')

  return NextResponse.json({data: entry})
}
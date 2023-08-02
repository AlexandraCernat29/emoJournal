import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntries = async () => {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user?.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return entries
}

const EatingJournalPage = async () => {
  const entries = await getEntries()
  console.log('!!entries', entries)

  return (
    <div className="p-10 bg-zinc-400/10 h-full">  
      <h2 className="text-3xl mb-8">Eating Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />

        {entries && entries.map((entry: any) => (
          <EntryCard key={entry.ud} entry={entry} />
        ))}
      </div>
    </div>

  )
}

export default EatingJournalPage
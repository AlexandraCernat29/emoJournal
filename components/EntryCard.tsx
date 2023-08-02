const EntryCard = ({ entry }: any) => {
  const date = new Date(entry.createdAt).toDateString()

  return (
    <div className="divide-y divide-zinc-400 overflow-hidden bg-white shadow">
      <div className="p-4">{date}</div>
      <div className="p-4">Summary{/*entry.analysis.summary*/}</div>
      <div className="p-4">Mood{/*entry.analysis.mood*/}</div>
    </div>
  )
}

export default EntryCard
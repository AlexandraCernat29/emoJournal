'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry}: any) => {
  const[valueTextarea, setValueTextarea] = useState(entry.content)
  const[isLoading, setIsLoading] = useState(false)
  
  useAutosave({
    data: valueTextarea,
    onSave: async (_valueTextarea: string) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id,_valueTextarea)
      setIsLoading(false)
    }
  })

  return (
    <div className="w-full -full">
      {isLoading && <div>...loading</div>}
      <textarea 
        className="w-full h-full p-8 text-lg outline-none"
        value={valueTextarea} 
        onChange={(e) => setValueTextarea(e.target.value)} />
    </div>
  )
}

export default Editor
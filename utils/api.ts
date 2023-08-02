const createURL = (path: string) => {
  return window.location.origin + path
}

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/eating-journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({content})
    })
  )

  if (res.ok) { 
    const data = await res.json()
    return data.data
  }
}

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/eating-journal'), {
      method: 'POST',
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
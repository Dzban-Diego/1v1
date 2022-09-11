import { trpc } from '../utils/trpc'
import { useEffect } from 'react'

export const StoryList = () => {
  const story = trpc.useMutation('story.getAll')

  useEffect(() => {
    story.mutate()
  }, [])

  const renderList = () => {
    if (story.data) {
      return story.data.map((storyone) => (
        <StoryItem key={JSON.stringify(storyone)} item={storyone} />
      ))
    } else {
      return <span>no data</span>
    }
  }

  return <>{story.data && <div>{renderList()}</div>}</>
}

type storyItem = {
  id: number
  points: number
  category: {
    name: string
  } | null
  forId: number | null
  description: string | null
}

const StoryItem: React.FC<{ item: storyItem }> = ({ item }) => {
  return (
    <div
      className={`m-3 rounded-3xl flex justify-between p-2 px-4 items-center ${
        item.forId === 1 ? 'bg-lightsecondary' : 'bg-third flex-row-reverse'
      }`}
    >
      <div className={'text-6xl'}>{item.points}</div>
      <div
        className={`flex flex-col ${
          item.forId === 1 ? 'items-end' : 'items-start'
        }`}
      >
        {item.category && (
          <span className={'text-3xl'}>{item.category.name}</span>
        )}
        <span>{item.description || ''}</span>
      </div>
    </div>
  )
}

import { trpc } from '../utils/trpc'
import { useEffect } from 'react'

const TopBar = () => {
  const points = trpc.useMutation(['points.getAll'])

  useEffect(() => {
    points.mutate()
  }, [])

  return (
    <>
      <button onClick={() => points.mutate()} className={'bg-primary w-full'}>
        {points.data && (
          <>
            <span className={'font-extrabold'} style={{ fontSize: '24vw' }}>
              {points.data[1].name.substring(0, 1)}
            </span>
            <span
              className={'font-extrabold mx-4'}
              style={{ fontSize: '20vw' }}
            >
              {points.data[1].points}
            </span>
            <span className={'font-extrabold'} style={{ fontSize: '12vw' }}>
              /
            </span>
            <span
              className={'font-extrabold mx-4'}
              style={{ fontSize: '20vw' }}
            >
              {points.data[2].points}
            </span>
            <span className={'font-extrabold'} style={{ fontSize: '24vw' }}>
              {points.data[2].name.substring(0, 1)}
            </span>
          </>
        )}
      </button>
    </>
  )
}

export default TopBar

import { trpc } from '../utils/trpc'
import { useEffect } from 'react'
import { MdBolt } from 'react-icons/md'
import Image from 'next/image'

const TopBar = () => {
  const points = trpc.useMutation(['points.getAll'])

  useEffect(() => {
    points.mutate()
  }, [])

  return (
    <>
      <button
        onClick={() => points.mutate()}
        className={
          'bg-primary w-full flex flex-row items-center justify-center text-4xl h-1/5'
        }
      >
        {points.data ? (
          <>
            <Image src={'/masiek.png'} alt={'M'} width={'150'} height={'150'} />
            <span className={'font-extrabold mx-4'}>
              {points.data[1].points}
            </span>
            <span className={''}>
              <MdBolt />
            </span>
            <span className={'font-extrabold mx-4'}>
              {points.data[2].points}
            </span>
            <Image src={'/olo.png'} alt={'M'} width={'150'} height={'150'} />
          </>
        ) : (
          <span className={'text-3xl'}>Ładowanie...</span>
        )}
      </button>
    </>
  )
}

export default TopBar

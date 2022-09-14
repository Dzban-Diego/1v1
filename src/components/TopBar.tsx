import { trpc } from '../utils/trpc'
import { useEffect } from 'react'
import { MdBolt } from 'react-icons/md'
import Image from 'next/image'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const TopBar = () => {
  const { data, mutate } = trpc.useMutation(['points.getAll'])

  useEffect(() => {
    mutate()
  }, [mutate])

  return (
    <>
      <button
        onClick={() => mutate()}
        className={
          'bg-primary w-full flex flex-row items-center justify-between text-4xl '
        }
      >
        <Image
          src={'/masiek.png'}
          alt={'M'}
          width={'150'}
          height={'150'}
          className={'slideLeft'}
        />
        {data ? (
          <>
            <span className={'font-extrabold mx-4 w-1/4'}>
              {data[1].points}
            </span>
            <span>
              <MdBolt />
            </span>
            <span className={'font-extrabold mx-4 w-1/4'}>
              {data[2].points}
            </span>
          </>
        ) : (
          <>
            <span className={'font-extrabold mx-4 w-1/4'}></span>
            <span className={'animate-spin'}>
              <AiOutlineLoading3Quarters />
            </span>
            <span className={'font-extrabold mx-4 w-1/4'}></span>
          </>
        )}
        <Image
          src={'/olo.png'}
          alt={'M'}
          width={'150'}
          height={'150'}
          className={'slideRight transition-all'}
        />
      </button>
    </>
  )
}

export default TopBar

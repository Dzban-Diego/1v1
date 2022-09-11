import { trpc } from '../../utils/trpc'
import { Dispatch, SetStateAction, useEffect } from 'react'

type endpoints = 'users.getAll' | 'category.getAll'

export const SelectUser = ({
  value,
  setValue,
  endpoint,
}: {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  endpoint: endpoints
}) => {
  const { data, isLoading } = trpc.useQuery([endpoint])

  useEffect(() => {
    if (data && data[0] && typeof data[0].id === 'number') {
      setValue(data[0].id.toString())
    }
  }, [data, setValue])

  return (
    <>
      {!isLoading && (
        <>
          {data && data[0] && data[1] && (
            <div>
              <button
                className={`rounded-l w-3/6 text-3xl p-3 ${
                  value === data[0].id.toString()
                    ? 'bg-primary'
                    : 'bg-lightbackground'
                }`}
                onClick={() => setValue(`${data[0] && data[0].id.toString()}`)}
              >
                {data[0].name}
              </button>
              <button
                onClick={() => setValue(`${data[1] && data[1].id.toString()}`)}
                className={`rounded-r w-3/6 text-3xl p-3 ${
                  value === data[1].id.toString()
                    ? 'bg-primary'
                    : 'bg-lightbackground'
                }`}
              >
                {data[1].name}
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

import { trpc } from '../../utils/trpc'
import { Dispatch, SetStateAction, useEffect } from 'react'

type endpoints = 'users.getAll' | 'category.getAll'

export const SelectFromApi = ({
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

  const renderOptions = () => {
    if (data) {
      return data.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))
    }
  }

  return (
    <>
      {!isLoading && (
        <>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={'bg-primary rounded w-full text-3xl'}
          >
            {renderOptions()}
          </select>
        </>
      )}
    </>
  )
}

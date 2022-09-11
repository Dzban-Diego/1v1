import type { NextPage } from 'next'
import Layout from '../../components/Layouts/Default'
import { useState } from 'react'
import { trpc } from '../../utils/trpc'
import { useRouter } from 'next/router'

const Add: NextPage = () => {
  const router = useRouter()
  const { mutate, isLoading } = trpc.useMutation(['category.create'])

  const [name, setName] = useState('')

  const sendCategory = () => {
    const prepareData = {
      name,
    }
    mutate(prepareData)
    if (!isLoading) router.push('/category')
  }

  return (
    <>
      <Layout page={'addCagegory'}>
        <div className={'p-4 flex flex-col gap-5'}>
          <div className={'flex justify-center'}>
            <input
              className={
                'w-4/6 text-6xl bg-background text-primary text-center border-b-4 border-primary'
              }
              type={'text'}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={'Nazwa'}
            />
          </div>

          <button
            onClick={sendCategory}
            className={'bg-secondary rounded-2xl w-full text-5xl mt-3'}
          >
            Zapisz
          </button>
        </div>
      </Layout>
    </>
  )
}

export default Add

import type { NextPage } from 'next'
import Layout from '../components/Layouts/Default'
import { useState } from 'react'
import { SelectFromApi } from '../components/formInputs/SelectFromApi'
import { trpc } from '../utils/trpc'
import { SelectUser } from '../components/formInputs/SelectUser'
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Add: NextPage = () => {
  const router = useRouter()
  const { mutate, isLoading } = trpc.useMutation(['points.create'])

  const [pointCount, setPointCount] = useState('0')
  const [user, setUser] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const sendPoint = () => {
    const prepareData = {
      points: parseInt(pointCount),
      forId: parseInt(user),
      categoryID: parseInt(category),
      description,
    }
    mutate(prepareData)
    if (!isLoading) router.push('/')
  }

  return (
    <>
      <Layout page={'add'}>
        <div className={'p-4 flex flex-col gap-5'}>
          <div className={'flex justify-center'}>
            <button
              className={'text-primary text-3xl m-3'}
              onClick={() => setPointCount(`${parseInt(pointCount) - 1}`)}
            >
              <BiMinus />
            </button>
            <input
              className={
                'w-3/6 text-8xl bg-background text-primary text-center border-b-4 border-primary'
              }
              type={'number'}
              onChange={(e) => setPointCount(e.target.value)}
              value={pointCount}
            />
            <button
              className={'text-primary text-3xl m-3'}
              onClick={() => setPointCount(`${parseInt(pointCount) + 1}`)}
            >
              <BsPlusLg />
            </button>
          </div>

          <SelectUser
            value={user}
            setValue={setUser}
            endpoint={'users.getAll'}
          />

          <SelectFromApi
            value={category}
            setValue={setCategory}
            endpoint={'category.getAll'}
          />

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder={'Opis'}
            rows={1}
            className={
              'bg-primary w-full text-black placeholder-lightbackground text-2xl text-center'
            }
          />
          <button
            onClick={sendPoint}
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

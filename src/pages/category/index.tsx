import type { NextPage } from 'next'
import { StoryList } from '../../components/StoryList'
import Layout from '../../components/Layouts/Default'
import { trpc } from '../../utils/trpc'
import { useEffect } from 'react'

const CategoryList: NextPage = () => {
  const { data } = trpc.useQuery(['category.getAll'])

  const renderCategories = () => {
    if (data) {
      return data.map((category) => (
        <div
          className={
            'm-3 rounded-3xl justify-between p-2 px-4 items-center bg-third text-6xl text-center'
          }
          key={category.id}
        >
          {category.name}
        </div>
      ))
    }
  }

  return (
    <>
      <Layout page={'category'}>
        <>{renderCategories()}</>
      </Layout>
    </>
  )
}

export default CategoryList

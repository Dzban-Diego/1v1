import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { StoryList } from '../components/StoryList'
import Layout from '../components/Layouts/Default'

const Home: NextPage = () => {
  const points = trpc.useMutation(['points.getAll'])
  return (
    <>
      <Layout page={'home'}>
        <StoryList />
      </Layout>
    </>
  )
}

export default Home

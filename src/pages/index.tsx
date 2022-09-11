import type { NextPage } from 'next'
import { StoryList } from '../components/StoryList'
import Layout from '../components/Layouts/Default'

const Home: NextPage = () => {
  return (
    <>
      <Layout page={'home'}>
        <StoryList />
      </Layout>
    </>
  )
}

export default Home

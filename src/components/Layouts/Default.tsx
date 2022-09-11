import TopBar from '../TopBar'
import type { ReactElement } from 'react'
import NavBar from '../NavBar'
import Head from 'next/head'

export type pages = 'home' | 'add' | 'category' | 'addCagegory'

const Layout = ({
  children,
  page,
}: {
  children: ReactElement
  page: pages
}) => {
  return (
    <>
      <Head>
        <title>1v1</title>
        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="apple-touch-icon" sizes="72×72" href="logo.png" />
        <link rel="apple-touch-icon" sizes="114×114" href="logo.png" />
      </Head>
      <div className={'flex justify-center hand'}>
        <div
          className={
            'bg-background flex-col justify-center lg:w-6/12 w-screen h-screen overflow-hidden'
          }
        >
          <TopBar />
          <main className={'overflow-y-auto scroll-auto h-5/6'}>
            {children}
          </main>
          <NavBar page={page} />
        </div>
      </div>
    </>
  )
}

export default Layout

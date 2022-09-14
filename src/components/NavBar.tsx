import { pages } from './Layouts/Default'
import { FaThList } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

const NavBar = ({ page }: { page: pages }) => {
  const router = useRouter()

  const openStory = () => {
    router.push('/')
  }

  const renderLeftButton = () => {
    switch (page) {
      case 'addCagegory': {
        return (
          <button
            onClick={openStory}
            className={'h-fit bg-secondary rounded-2xl my-6 mx-6 p-2 text-3xl'}
          >
            <FaThList />
          </button>
        )
      }
      case 'category': {
        return (
          <button
            onClick={openStory}
            className={'h-fit bg-secondary rounded-2xl my-6 mx-6 p-2 text-3xl'}
          >
            <FaThList />
          </button>
        )
      }
      default: {
        return (
          <button
            onClick={openCategory}
            className={'h-fit bg-secondary rounded-2xl my-6 mx-6 p-2 text-3xl'}
          >
            <BiCategoryAlt />
          </button>
        )
      }
    }
  }

  const mainButtonClasss = 'w-9 h-9'
  const renderMainButton = () => {
    switch (page) {
      case 'add': {
        return (
          <button onClick={() => router.push('/')}>
            <FaThList className={mainButtonClasss} />
          </button>
        )
      }
      case 'home': {
        return (
          <button onClick={() => router.push('/add')}>
            <BsPlusLg className={mainButtonClasss} />
          </button>
        )
      }
      case 'category': {
        return (
          <button onClick={() => router.push('/category/add')}>
            <BsPlusLg className={mainButtonClasss} />
          </button>
        )
      }
      case 'addCagegory': {
        return (
          <button onClick={() => router.push('/category')}>
            <BiCategoryAlt className={mainButtonClasss} />
          </button>
        )
      }
    }
  }

  const openCategory = () => {
    router.push('/category')
  }

  const openRight = () => {
    alert('Tu będą inne ustawienia')
  }

  return (
    <div className={'fixed bottom-0 w-screen flex justify-center items-end'}>
      <div>{renderLeftButton()}</div>
      <div
        className={
          'bg-primary w-20 h-20 rounded-full flex justify-center items-center m-4'
        }
      >
        {renderMainButton()}
      </div>
      <button
        onClick={openRight}
        className={'h-fit bg-secondary rounded-2xl my-6 mx-6 p-2 text-3xl'}
      >
        <BiCategoryAlt />
      </button>
    </div>
  )
}

export default NavBar

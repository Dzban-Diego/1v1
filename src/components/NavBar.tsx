import { pages } from './Layouts/Default'
import { FaThList } from 'react-icons/fa'
import Link from 'next/link'
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
          <Link href="/">
            <FaThList className={mainButtonClasss} />
          </Link>
        )
      }
      case 'home': {
        return (
          <Link href="/add">
            <BsPlusLg className={mainButtonClasss} />
          </Link>
        )
      }
      case 'category': {
        return (
          <Link href="/category/add">
            <BsPlusLg className={mainButtonClasss} />
          </Link>
        )
      }
      case 'addCagegory': {
        return (
          <Link href="/category">
            <BiCategoryAlt className={mainButtonClasss} />
          </Link>
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

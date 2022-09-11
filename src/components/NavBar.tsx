import { pages } from './Layouts/Default'
import { FaThList } from 'react-icons/fa'
import Link from 'next/link'
import { BsPlusLg } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'

const NavBar = ({ page }: { page: pages }) => {
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
    }
  }

  const openCategory = () => {
    alert('Tu będą ustawienia kategorii')
  }

  const openRight = () => {
    alert('Tu będą inne ustawienia')
  }

  return (
    <div className={'fixed bottom-0 w-screen flex justify-center items-end'}>
      <button
        onClick={openCategory}
        className={'h-fit bg-secondary rounded-2xl my-6 mx-6 p-2 text-3xl'}
      >
        <BiCategoryAlt />
      </button>
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

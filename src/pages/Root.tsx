import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'

const Root = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  return (
    <div
      className='antialiased w-full min-h-full flex flex-col 
      dark:bg-slate-900 bg-sky-50 dark:text-white text-sky-900 dark:selection:bg-sky-600 selection:bg-sky-300'
    >
      <Nav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      {!navIsOpen && (
        <main className='flex flex-1'>
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default Root

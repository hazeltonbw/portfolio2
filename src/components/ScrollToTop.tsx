import { useState, useEffect } from 'react'
import { PiCaretUpLight } from 'react-icons/pi'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollToTopBtn(true)
      } else {
        setShowScrollToTopBtn(false)
      }
    })
  }, [])

  return showScrollToTopBtn ? 
  (
    <div className='md:hidden fixed bottom-16 right-10 justify-center'>
      <button
        onClick={scrollToTop}
        className='p-2 rounded-full mb-0 group hover:bg-sky-700 bg-sky-600'
        aria-label='Scroll back to top'
      >
        <PiCaretUpLight
          size={32}
          className='text-white group-hover:-translate-y-1 transition-all'
        />
      </button>
    </div>
  ) : null
}
export default ScrollToTop

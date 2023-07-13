import { Link } from 'react-router-dom'
import avatar from '../../../portfolio/src/assets/img/avataaars.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Home = () => {
  return (
    <div className='flex flex-col flex-1 items-center justify-center text-center'>
      <img src={avatar} alt='Avatar of me' />
      <h1 className='font-playfair  mt-4 font-semibold'>
        Hey there! My name is{' '}
        <pre className='font-playfair dark:text-sky-400 text-sky-600'>
          Brandon Hazelton
        </pre>
      </h1>
      <p className='mt-4 font-lora'>
        I am a <strong className='text-xl'>web developer</strong> based in{' '}
        <strong className='text-xl'>California</strong>.{' '}
      </p>
      <Link
        to='/about'
        aria-label='Link to about me page'
        className='flex font-playfair mt-4 rounded-xl items-center gap-1 
        transition-colors text-2xl bg-sky-800 hover:bg-sky-700 p-4 text-sky-100'
      >
        <p>Learn more about me</p>
        <AiOutlineArrowRight aria-label='Right arrow' />
      </Link>
    </div>
  )
}
export default Home

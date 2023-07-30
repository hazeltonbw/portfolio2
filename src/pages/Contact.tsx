import EmailForm from '../components/EmailForm'

const Contact = () => {
  return (
    <section className='flex flex-1 flex-col mt-8 font-playfair items-center '>
      <div className='w-3/4'>
        <h1 className='text-4xl mb-4 border-b border-b-gray-500/25 dark:border-b-sky-500/25'>
          Contact me
        </h1>
        <EmailForm />
      </div>
    </section>
  )
}

export default Contact

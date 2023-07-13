import { IconContext } from 'react-icons'
type Props = {
  children: any
}

const TechUsed = (props: Props) => {
  return (
    <ul className='grid gap-y-4 gap-x-1 md:gap-x-0 my-4 grid-cols-2  sm:grid-cols-4 lg:grid-cols-4'>
      <IconContext.Provider value={{ size: '32' }}>
        {props.children}
      </IconContext.Provider>
    </ul>
  )
}

export default TechUsed

import React from 'react'

type Props = { children: any }

const Tech = (props: Props) => {
  return (
    <li
      className='flex flex-col gap-y-1 justify-start  items-center text-center 
    dark:fill-sky-500 text-sky-900 dark:text-sky-100'
    >
      {props.children}
    </li>
  )
}

export default Tech

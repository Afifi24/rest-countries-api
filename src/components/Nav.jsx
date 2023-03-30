import React from 'react'
import {CiDark} from 'react-icons/ci'
const Nav = ({ChangeTheme}) => {
  return (
    <div>
       <nav className='bg-white font-NunitoSans shadoww items-center z-20 py-8 px-8 md:px-14 flex justify-between'>
          <div className='font-bold text-sm md:text-2xl'>Where in the world?</div>
          <div onClick={ChangeTheme} className='flex cursor-pointer gap-2 items-center'>
            <CiDark className='text-md md:text-xl'/>
          <p className='font-semibold text-sm md:text-xl  '>Dark Mode</p>
          </div>

       </nav>

    </div>
  )
}

export default Nav
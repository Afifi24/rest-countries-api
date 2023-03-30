import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'
const Search = ({theme}) => {
    const [isopen,setIsopen]= useState(false)
    const OpenClose = ()=>{
        setIsopen(!isopen)
    }
  return (
    <div className='flex gap-6 md:gap-0  md:items-center justify-between mb-10 flex-col sm:flex-row'>
        <div className={`  w-1/2 relative`}>
            <input className={` ${theme ? 'btn':''} py-5 text-sm md:text-md  outline-none rounded-md shadoww px-14 w-[250px] sm:w-[90%]  md:w-[90%] `} type="text" placeholder='Search for a country...' />
            <BiSearch className={` ${theme ? 'text-white':''} absolute text-2xl  left-4 top-1/2 -translate-y-1/2`}/>
        </div>
        <div className='  relative '>
            <div onClick={OpenClose} className={`${theme ? 'btn':''} bg-white flex justify-between items-center w-[200px] shadoww rounded-md cursor-pointer text-center px-4 py-5`}>
            <p>filter by region</p>
             <IoIosArrowDown/>
            </div>
            { isopen &&
                <div className={` ${theme ? 'btn':''} bg-white absolute mt-2 flex flex-col   w-[200px] shadoww rounded-md cursor-pointer text-start  py-5`}>
                <p className='px-4 py-1 hover:bg-gray-200 duration-200'>Africa</p>
                <p className='px-4 py-1 hover:bg-gray-200 duration-200'>Asia</p>
                <p className='px-4 py-1 hover:bg-gray-200 duration-200'>Europe</p>
                <p className='px-4 py-1 hover:bg-gray-200 duration-200'>America</p>
                <p className='px-4 py-1 hover:bg-gray-200 duration-200'>Oceania</p>
            </div>
            }
        </div>
    </div>
  )
}

export default Search
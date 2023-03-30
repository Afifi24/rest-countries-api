import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
const Search = ({theme,setInput,input,setRegion,region,Delete,desepear,setDesepear,setIsopen,isopen,reff,FetchDataAfrica,FetchDataAsia,FetchDataEurope,FetchDataAmericas,FetchDataOceania}) => {
    const OpenClose = ()=>{
        setIsopen(!isopen)
    }
    const Africa = ()=>{
        setRegion('Africa')
        setDesepear(true)
        setIsopen(false)
        FetchDataAfrica()
    }
    const Asia = ()=>{
        setRegion('Asia')
        setDesepear(true)
        setIsopen(false)
        FetchDataAsia()

    }
    const America = ()=>{
        setRegion('America')
        setDesepear(true)
        setIsopen(false)
        FetchDataAmericas()

    }
    const Europe = ()=>{
        setRegion('Europe')
        setDesepear(true)
        setIsopen(false)
        FetchDataEurope()

    }
    const Oceania = ()=>{
        setRegion('Oceania')
        setDesepear(true)
        setIsopen(false)
        FetchDataOceania()

    }
  return (
    <div className='flex gap-6 md:gap-0  md:items-center justify-between mb-10 flex-col sm:flex-row'>
        <div className={`  w-1/2 relative`}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} className={` ${theme ? 'btn':''} py-5 text-sm md:text-md  outline-none rounded-md shadoww px-14 w-[250px] sm:w-[90%]  md:w-[90%] `} type="text" placeholder='Search for a country...' />
            <BiSearch className={` ${theme ? 'text-white':''} duration-200 absolute text-2xl  left-4 top-1/2 -translate-y-1/2`}/>
        </div>
        <div className='  relative '>
            <div  className={`${theme ? 'btn':''} duration-200 bg-white flex justify-between items-center w-[200px] relative shadoww rounded-md cursor-pointer text-center px-4 py-5`}>
            <p onClick={OpenClose}>{region}</p>
             <IoIosArrowDown onClick={OpenClose}/>
              { desepear &&
                <FaRegTimesCircle onClick={Delete} className='absolute z-10 right-12'/>
              }
            </div>
            { isopen ?
                <div ref={reff} className={` ${theme ? 'btn':''} duration-200 bg-white absolute mt-2 flex flex-col   w-[200px] shadoww rounded-md cursor-pointer text-start  py-5`}>
                <p onClick={Africa} className={`${theme ? 'hover:bg-gray-800':''} px-4 py-1 hover:bg-gray-200 duration-200`}>Africa</p>
                <p onClick={Asia} className={`px-4 py-1 ${theme ? 'hover:bg-gray-800':''} hover:bg-gray-200 duration-200`}>Asia</p>
                <p onClick={Europe} className={`px-4 py-1 ${theme ? 'hover:bg-gray-800':''} hover:bg-gray-200 duration-200`}>Europe</p>
                <p onClick={America} className={`px-4 py-1 ${theme ? 'hover:bg-gray-800':''} hover:bg-gray-200 duration-200`}>America</p>
                <p onClick={Oceania} className={`px-4 py-1 ${theme ? 'hover:bg-gray-800':''} hover:bg-gray-200 duration-200`}>Oceania</p>
            </div>:null
            }
        </div>
    </div>
  )
}

export default Search
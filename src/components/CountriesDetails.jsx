import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import img from '../assets/pexels-mati-mango-11291053.jpg'
const CountriesDetails = ({theme,store}) => {
  return (
    <div>
      {store ?
      <div className={` ${theme ? 'darkdetail':''} py-20 px-8 md:px-14 flex font-NunitoSans flex-col gap-20`}>
      <Link className={`px-8 flex cursor-pointer justify-center w-fit gap-1 items-center  py-2  ${theme ? 'btn':''} shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`} to={'/'}>
      <HiOutlineArrowNarrowLeft className='text-lg'/>
        Back
      </Link>
     <div className='flex gap-32  flex-col md:flex-row   md:items-start'>
          <div className='flex-1'>
          <img className='w-full' src={store.flags.png} alt="" />
          </div>
          <div className='flex flex-1 py-1 items-start  flex-col gap-10'>
            <div className='flex flex-col md:flex-row md:items-center  gap-20'>
              <div className='flex flex-col gap-8'>
              <h4 className='font-bold text-3xl'>{store.name.common}</h4>
              <div className='flex flex-col gap-3'>
                <p> <span className='font-semibold'>Native Name:</span> {store.name.official}</p>
                <p><span className='font-semibold'> Population: </span>{store.population}</p>
                <p><span className='font-semibold'> Region: </span>{store.region}</p>
                <p><span className='font-semibold'> Sub Region: </span>  {store.subregion}</p>
                <p><span className='font-semibold'>  Capital: </span> {store.capital}</p>
              </div>
              </div>
              <div className='flex flex-col gap-1'>
                <p> <span className='font-semibold'>  Top Level Domain: </span>  .al</p>
                <p> <span className='font-semibold'>  Currencies: </span> {store.currencies.name}</p>
                <p> <span className='font-semibold'>  Languages: </span>  spanish</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-20 md:items-center justify-start'>
                <div>
                  <p className='font-bold'>Border <br className='hidden md:block' /> countries</p>
                </div>
                <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-2'>
                 
                      <button className={`px-6 flex cursor-pointer justify-center w-fit gap-1 items-center   ${theme ? 'btn':''} py-1 shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`}>greece</button>
                   
                  <button className={`px-6 flex cursor-pointer justify-center w-fit gap-1 items-center  ${theme ? 'btn':''}  py-1 shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`}>montenigro</button>
                  <button className={`px-6 flex cursor-pointer justify-center w-fit gap-1 items-center   ${theme ? 'btn':''} py-1 shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`}>malawi</button>
                  <button className={`px-6 flex cursor-pointer justify-center w-fit gap-1 items-center   ${theme ? 'btn':''} py-1 shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`}>morocco</button>
                </div>
            </div>
          </div>
     </div>
  </div>
  :''}
    </div>
  )
}

export default CountriesDetails
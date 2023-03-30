import React from 'react'
import { Link } from 'react-router-dom'
const CountriesItems = ({item,theme,AddtoDetails}) => {
  return (
    <header className='bg-white shadow-sm overflow-hidden rounded-md hover:shadow-xl duration-200 '>
      <Link onClick={()=>AddtoDetails(item)} to={'/details'}>
       <img className='md:h-[200px]  w-full' src={item.flags.png} alt="" />
       <div className='max-w-[300px] p-6 flex gap-6 flex-col'>
        <h2 className='font-bold'>{item.name.common}</h2>
        <div className='flex flex-col gap-1'>
          <p className='font-semibold text-[14px]'>Population: <span className={`${theme ? '#fafafa':'text-gray-500'}  font-normal`}>{item.population}</span></p>
          <p className='font-semibold text-[14px]'>Region: <span className={`${theme ? '#fafafa':'text-gray-500'}  font-normal`}>{item.region}</span></p>
          <p className='font-semibold text-[14px]'>Capital: <span className={`${theme ? '#fafafa':'text-gray-500'}  font-normal`}>{item.capital}</span></p>
        </div>
        </div>
        </Link>
    </header>
  )
}

export default CountriesItems
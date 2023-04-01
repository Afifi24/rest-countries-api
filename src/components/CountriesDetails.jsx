import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Datal from '../../data.json'
const CountriesDetails = ({theme,store,DetailsBorder}) => {
  const {name} = useParams()
   const [product,setProduct]= useState([])
    useEffect(()=>{
      setProduct(Datal.filter(item=>item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())))
    },[name])
  return (
    <div>
      {product!=='' ?
      <div className={` ${theme ? 'darkdetail':''} py-20 px-8 md:px-14 flex font-NunitoSans flex-col gap-20`}>
      <Link className={`px-8 flex cursor-pointer justify-center w-fit gap-1 items-center  py-2  ${theme ? 'btn':''} shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`} to={'/'}>
      <HiOutlineArrowNarrowLeft className='text-lg'/>
        Back
      </Link>
     {
      product.map(product=>(
        <div className='flex gap-32  flex-col md:flex-row   md:items-start'>
          <div className='flex-1'>
          <img className='w-full' src={product.flags ? product.flags.png :''} alt="" />
          </div>
          <div className='flex flex-1 py-1 items-start  flex-col gap-10'>
            <div className='flex flex-col md:flex-row md:items-center  gap-20'>
              <div className='flex flex-col gap-8'>
              <h4 className='font-bold text-3xl'>{ product.name}</h4>
              <div className='flex flex-col gap-3'>
                <p> <span className='font-semibold'>Native Name:</span> { product.nativeName}</p>
                <p><span className='font-semibold'> Population: </span>{product.population ? product.population.toLocaleString('en-US') || 'N/A':''}</p>
                <p><span className='font-semibold'> Region: </span>{product.region}</p>
                <p><span className='font-semibold'> Sub Region: </span>  {product.subregion}</p>
                <p><span className='font-semibold'>  Capital: </span> {product.capital}</p>
              </div>
              </div>
              <div className='flex flex-col gap-1'>
                <p> <span className='font-semibold'>  Top Level Domain: </span>{product.topLevelDomain}</p>
                <p> <span className='font-semibold'>  Currencies: </span>{product.currencies? product.currencies.map(item=>item.name):''} </p>
                <p> <span className='font-semibold'>  Languages: </span>{product.languages? product.languages.map(item=>item.name).join(', '):''}</p>
              </div>
            </div>
            { product.borders &&
            <div className='flex flex-col md:flex-row gap-4 md:gap-20 md:items-center justify-start'>
                <div>
                  <p className='font-bold'>Border <br className='hidden md:block' /> countries</p>
                </div>
                <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3'>
                 
                      {  product.borders.map(item=>(
                            <Link to={'/borderDetails/' + item}>
                                <button  key={item} className={`px-6 flex cursor-pointer justify-center w-fit gap-1 items-center   ${theme ? 'btn':''} py-1 shadoww rounded-md hover:-translate-y-0.5 duration-200 hover:shadow-lg`}>{item}</button>
                            </Link>
                      )) 
                        
                        }
                   
                </div>
            </div>}
          </div>
     </div>
      ))
     }
  </div>
  :null}
    </div>
  )
}

export default CountriesDetails
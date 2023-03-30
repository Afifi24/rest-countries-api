import React, { useEffect,useState } from 'react'
import CountriesItems from './CountriesItems'
import Search from './Search'
const Countries = ({theme,AddtoDetails}) => {
  const [Data,setData] = useState()
  const [filteredbyletter,setFilteredbyletter] =useState()
 
  const FetchData = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/all')
      const response = await data.json()
      setData(response)
  }
  const FilteredFunction = ()=>{
    if(Data){
      const FilteredItem = Data.filter(filte=>filte.capital.toLowercase())
      console.log(FilteredItem)
    }
  }
  useEffect(()=>{
    FetchData()
    FilteredFunction()
  },[])
  return (
    <div className='py-20 px-8 md:px-14'>
      <Search theme={theme}/>
     <div className='grid grid-cols-1 font-NunitoSans  md:grid-cols-2 lg:grid-cols-3  gap-y-16 gap-x-14'>
         {Data && Data.map(item=>(
              <CountriesItems AddtoDetails={AddtoDetails} theme={theme} key={item.flags.png} item={item}/>
         ))}
     </div>
      
      </div>
  )
}

export default Countries
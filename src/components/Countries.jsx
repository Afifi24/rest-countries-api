import React, { useEffect,useState,useRef } from 'react'
import CountriesItems from './CountriesItems'
import Search from './Search'
const Countries = ({theme,AddtoDetails}) => {
  const [Data,setData] = useState()
  const [status,setStatus] = useState('')
  const [region,setRegion] = useState('Filter by Region')
  const [desepear,setDesepear] = useState(false)
  const [filteredbyletter,setFilteredbyletter] =useState()
  const [input,setInput] = useState('')
  const [isopen,setIsopen]= useState(false)

  const FetchData = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/all')
      const response = await data.json()
      setData(response)
  }
  const FetchDataAfrica = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/region/africa')
      const response = await data.json()
      setData(response)
  }
  const FetchDataAsia = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/region/asia')
      const response = await data.json()
      setData(response)
  }
  const FetchDataEurope = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/region/europe')
      const response = await data.json()
      setData(response)
  }
  const FetchDataAmericas = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/region/americas')
      const response = await data.json()
      setData(response)
  }
  const FetchDataOceania = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/region/oceania')
      const response = await data.json()
      setData(response)
  }
  const Delete = ()=>{
    setRegion('Filter by Region')
    setDesepear(false)
  }
  const reff = useRef()
  const CloseFilter = (e)=>{
       if(reff.current== e.target)
       setIsopen(!isopen)
  }
  
  useEffect(()=>{
    FetchData()
  },[input])
  return (
    <div onClick={CloseFilter} ref={reff} className='py-20 px-8 md:px-14'>
      <Search FetchDataOceania={FetchDataOceania} FetchDataAmericas={FetchDataAmericas} FetchDataEurope={FetchDataEurope} FetchDataAsia={FetchDataAsia} FetchDataAfrica={FetchDataAfrica} reff={reff} isopen={isopen} setIsopen={setIsopen} setDesepear={setDesepear} desepear={desepear} Delete={Delete} region={region} setRegion={setRegion} setInput={setInput} input={input} theme={theme}/>
     <div className='grid grid-cols-1 font-NunitoSans  md:grid-cols-2 lg:grid-cols-3  gap-y-16 gap-x-14'>
         {Data && Data.filter(filt=>{
          if(input=='')
          return filt
          else if(filt.name.common.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
          return filt
         }).map(item=>(
              <CountriesItems AddtoDetails={AddtoDetails} theme={theme} key={item.flags.png} item={item}/>
         ))}
     </div>
      
      </div>
  )
}

export default Countries
import React, { useEffect,useState,useRef } from 'react'
import CountriesItems from './CountriesItems'
import Search from './Search'
import Datal from '../../data.json'
const Countries = ({theme,AddtoDetails}) => {
  const [Data,setData] = useState()
  const [region,setRegion] = useState('Filter by Region')
  const [desepear,setDesepear] = useState(false)
  const [input,setInput] = useState('')
  const [isopen,setIsopen]= useState(false)

  const FetchData = async()=>{
      const data = await fetch('https://restcountries.com/v3.1/all')
      const response = await data.json()
      setData(response)
  }
  const FetchDataAfrica = async()=>{
      const reginafrica = Datal.filter(filt=>filt.region.toLocaleLowerCase().includes('africa'.toLocaleLowerCase()))
      setData(reginafrica)
  }
  const FetchDataAsia = async()=>{
      const reginasia = Datal.filter(filt=>filt.region.toLocaleLowerCase().includes('asia'.toLocaleLowerCase()))
      setData(reginasia)
  }
  const FetchDataEurope = async()=>{
      const regineur = Datal.filter(filt=>filt.region.toLocaleLowerCase().includes('europe'.toLocaleLowerCase()))
      setData(regineur)
  }
  const FetchDataAmericas = async()=>{
    const reginameri = Datal.filter(filt=>filt.region.toLocaleLowerCase().includes('americas'.toLocaleLowerCase()))
    setData(reginameri)
  }
  const FetchDataOceania = async()=>{
    const reginocean = Datal.filter(filt=>filt.region.toLocaleLowerCase().includes('oceania'.toLocaleLowerCase()))
    setData(reginocean)
  }
  const Delete = ()=>{
    setRegion('Filter by Region')
    setDesepear(false)
    setData(Datal)
  }
  const reff = useRef()
  const CloseFilter = (e)=>{
       if(reff.current== e.target)
       setIsopen(!isopen)
  }
  
  useEffect(()=>{
    setData(Datal)
  },[input])
  return (
    <div onClick={CloseFilter} ref={reff} className='py-20 px-8 md:px-14'>
      <Search FetchDataOceania={FetchDataOceania} FetchDataAmericas={FetchDataAmericas} FetchDataEurope={FetchDataEurope} FetchDataAsia={FetchDataAsia} FetchDataAfrica={FetchDataAfrica} reff={reff} isopen={isopen} setIsopen={setIsopen} setDesepear={setDesepear} desepear={desepear} Delete={Delete} region={region} setRegion={setRegion} setInput={setInput} input={input} theme={theme}/>
     <div className='grid grid-cols-1 font-NunitoSans  md:grid-cols-2 lg:grid-cols-3  gap-y-16 xl:grid-cols-4 2xl:grid-cols-5 gap-x-14'>
         {Data && Data.filter(filt=>{
          if(input=='')
          return filt
          else if(filt.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
          return filt
         }).map(item=>(
              <CountriesItems  AddtoDetails={AddtoDetails} theme={theme} key={item.flags.png} item={item}/>
         ))}
     </div>
      
      </div>
  )
}

export default Countries
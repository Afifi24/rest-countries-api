import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Countries from './components/Countries'
import CountriesDetails from './components/CountriesDetails'
import {Route,Routes} from 'react-router-dom'
import BorderDetails from './components/BorderDetails'
const App = () => {
  const [theme,setTheme]= useState(false)
  const [store,setStore] = useState([])
  const [border,setBorder] = useState()
  const ChangeTheme = ()=>{
    setTheme(!theme)
  }
  const AddtoDetails = (element)=>{
       setStore(element)
       localStorage.setItem('item',JSON.stringify(element))
      
  }
  const FetchBorder = async (item)=>{
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${item}`)
    const response = await data.json()
    setBorder(response)
  }
  const DetailsBorder = (element)=>{
    FetchBorder(element)
  }
  useEffect(()=>{
      const item = localStorage.getItem('item')
       if(item){
         setStore(JSON.parse(item))
       }

  },[])

  return (
    <div className={`${theme ? 'darkMode':'lightMode'} min-h-screen`}>
       <Nav ChangeTheme={ChangeTheme}/>
           <Routes>
              <Route path='/' element={  <Countries AddtoDetails={AddtoDetails} theme={theme}/>}/>
              <Route path='/details/:name' element={  <CountriesDetails DetailsBorder={DetailsBorder}   store={store} theme={theme} />}/>
              <Route path='/borderDetails/:borde' element={  <BorderDetails theme={theme} border={border} />}/>
           </Routes>

    </div>
  )
}

export default App
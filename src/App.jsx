import React, { useState } from 'react'
import Nav from './components/Nav'
import Countries from './components/Countries'
import CountriesDetails from './components/CountriesDetails'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  const [theme,setTheme]= useState(false)
  const [store,setStore] = useState([])
  const ChangeTheme = ()=>{
    setTheme(!theme)
  }
  const AddtoDetails = (element)=>{
       setStore(element)
  }
  console.log(store)


  return (
    <div className={`${theme ? 'darkMode':'lightMode'} min-h-screen`}>
       <Nav ChangeTheme={ChangeTheme}/>
           <Routes>
              <Route path='/' element={  <Countries AddtoDetails={AddtoDetails} theme={theme}/>}/>
              <Route path='/details' element={  <CountriesDetails  store={store} theme={theme} />}/>
           </Routes>

    </div>
  )
}

export default App
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Favs from './routes/Favs'
import Error from './routes/Error'
import Dentist from './routes/Dentist'
import Login from './routes/Login'
import LoginContextProvider from './context/Context'
import { ThemeContext } from './context/ThemeContext'

const App = () => {

  const {isDarkMode} = useContext(ThemeContext)
  
  return (
    <LoginContextProvider>
      <div className={isDarkMode ? "dark" : "light"}>
        <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route element={<ProtectedRoutes/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/favs' element={<Favs/>}/>
                <Route path='/home/dentist/:id' element={<Dentist/>}/>
              </Route>
              <Route path='*' element={<Error/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </LoginContextProvider>
  )
}

export default App
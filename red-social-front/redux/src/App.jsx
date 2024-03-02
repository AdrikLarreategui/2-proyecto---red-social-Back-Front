import { useState } from 'react'
import { React } from 'react'
import Header from '../src/components/TheHeader/'
import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'
import Home from './components/Home/Home'
import TheHeader from './components/TheHeader/TheHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <TheHeader />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/profile' element= { <Profile /> } />
          <Route path='/post/:id' element= { <PostDetail />} />
          <Route path='/search/:postName' element = { <Search /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

//Completar conforme haya más info
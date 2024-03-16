import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { React } from 'react'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import TheHeader from './components/TheHeader/TheHeader'
import Home from './components/Home/Home'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import Search from './components/Search/Search'
import AdminZone from './guards/AdminZone'
import Admin from './components/Admin/Admin'
import PrivateZone from './guards/PrivateZone'
import NotFound from './components/NotFound/NotFound'

import './App.css'

function App() {
	return (
		<BrowserRouter>
			<TheHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/profile" element={<PrivateZone> <Profile /></PrivateZone>}/>
          		<Route path='/admin' element= {<AdminZone> <Admin /> </AdminZone> } />
          		<Route path='/post/:id' element= { <PostDetail />} />
          		<Route path='/search/:postName' element = { <Search /> } />
          		<Route path= '*' element= {<NotFound />}/> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App

// import { useState } from 'react'
// import { React } from 'react'
// import Login from '../src/components/Login/Login'
// import Register from '../src/components/Register/Register'
// import Profile from '../src/components/Profile/Profile'
// import Home from './components/Home/Home'
// import TheHeader from './components/TheHeader/TheHeader'
// import PostDetail from './components/Posts/PostDetail/PostDetail'
// import Search from './components/Search/Search'
// import AdminZone from './guards/AdminZone'
// import Admin from './components/Admin/Admin'
// import PrivateZone from './guards/PrivateZone'
// import NotFound from './components/NotFound/NotFound'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import './App.css'


// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
      {/* <TheHeader /> */}
        // <Routes>
          {/* <Route path='/' element= {<Home />} /> */}
          // <Route path='/login' element={ <Login /> } />
          // <Route path='/register' element={ <Register /> } />
          {/* <Route path="/profile" element={<PrivateZone> <Profile /></PrivateZone>}/>
          <Route path='/admin' element= {<AdminZone> <Admin /> </AdminZone> } />
          <Route path='/post/:id' element= { <PostDetail />} />
          <Route path='/search/:postName' element = { <Search /> } />
          <Route path= '*' element= {<NotFound />}/> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

//Completar conforme haya más info
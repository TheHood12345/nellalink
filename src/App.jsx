import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/small_screen/nella_content/home/home'
import Business from './pages/small_screen/nella_content/business/business'
import Menu from './pages/small_screen/nella_content/menu/menu'
import Box from './pages/box'
import Login_box from './pages/auth_pages/login_box'
import Signup_box from './pages/auth_pages/signup_box'
import Main_profile from './pages/profile/main_profile'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login_box/>}/>
      <Route path="/signup" element={<Signup_box/>}/>
      <Route path="/" element={<Box/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="business" element={<Business/>}/>
        <Route path="menu" element={<Menu/>}/>
      </Route>
      {/* <Route path="/profile" element={<Main_profile/>}/> */}
    </Routes>
  )
}

export default App

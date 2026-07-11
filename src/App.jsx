import './App.css'
import { Routes,Route } from 'react-router-dom'
import Box from './pages/box'
import Home from './pages/boxContent/content/home'
import Business from "./pages/boxContent/content/business/business"
import Menu from './pages/boxContent/content/menu/menu'
import Notification from './pages/boxContent/content/notification/notification'
import Profile from './pages/boxContent/content/profile/profile'
import BoxLogin from './pages/boxAuth/boxLogin'
import Login from './pages/boxAuth/login'
import BoxSignup from './pages/boxAuth/boxSignup'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Box/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="business" element={<Business/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="notification" element={<Notification/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route path="/login" element={<BoxLogin/>}/>
      <Route path="/signup" element={<BoxSignup/>}/>
  
    </Routes>
  )
}

export default App

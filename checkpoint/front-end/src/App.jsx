
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import UserList from './pages/UserList'
import Profile from './pages/Profile'


function App() {

  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path ="/" element={<Home />} />
       <Route path ="/mon-profil" element={<Profile />} />
       <Route path ="userList" element={<UserList />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

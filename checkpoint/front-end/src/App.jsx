import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Login from "./pages/Login"
import Inscription from "./pages/Inscription";
import {useState} from 'react';


function App() {
  const [user, setUser] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/home" element={<Home user={user}/>} />

          <Route path="/userList" element={<UserList user={user} />} />
          <Route path ="/inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ImagePage from './pages/ImagePage';
import './App.css';
import { Box } from "@mui/material";
 


function App() {
const [token, setToken] = useState(false);
const [isLogin, setIsLogin] = useState(false);
const [user, setUser] = useState(null);
// const navigate = useNavigate();
//COMMENT: Get user for New Login
const getUser = async () =>{
  try{
    const url = `${process.env.REACT_URL}/auth/login/sucess`;
    const { data } = await axios.get(url, { withCredentials: true })
    setUser(data.user._json);
  } catch (err){

  }
}
//COMMENT: Old Login
// function handleCallbackResponse(response){
//   try{
//   console.log("encoded JWT ID token: " + response.credential);
//   console.log("encoded JWT ID token (typof): " + typeof(response.credential));
//   const tokens = response.credential
//   setToken(tokens)
//   setIsLogin(true)
//   const decoded = jwtDecode(tokens);
//   // setUser(decoded)
//   localStorage.setItem('token', tokens)
//   console.log("token: ", tokens)
//   console.log("decoded: ", decoded)//store token to local storage:
  
//   return redirect("/images")
  
//   }
//   catch (err) {
//     console.log("ERROR.message: ", err.message)
//     alert(err.message)
//   }
// }


function handleSignOut(event){
  // setUser({});
  
  //TODO: redesign
  localStorage.setItem('token', 'false');
}

useEffect(()=> {
/* global google */
getUser()
}, [])

let routes;

if(isLogin){
  routes = <Routes>
  <Route path="/" element={<HomePage token={token} />} />
  <Route path="/home" element={<HomePage token={token} />} />
  <Route path="/images" element={<ImagePage />} />
  <Route path="*" element={<NotFoundPage/>} />
  </Routes>
} else {
  routes = <Routes>
  <Route path="/" element={<HomePage token={token} />} />
  <Route path="/home" element={<HomePage token={token} />} />
  <Route path="*" element={<NotFoundPage/>} />
  </Routes>
}


  return (
    <BrowserRouter>
    <NavBar handleSignOut={handleSignOut} token={token}/>
      <div className="App">
        <div id="page-body">
          {routes}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


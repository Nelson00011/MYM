import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";

import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ImagePage from './pages/ImagePage';

import './App.css';
 

function App() {
const [token, setToken] = useState(false);
const [user, setUser] = useState({});
// const navigate = useNavigate();

function handleCallbackResponse(response){
  try{
  console.log("encoded JWT ID token: " + response.credential);
  console.log("encoded JWT ID token (typof): " + typeof(response.credential));
  const tokens = response.credential
  setToken(tokens)
  const decoded = jwtDecode(tokens);
  setUser(decoded)
  localStorage.setItem('token', tokens)
  console.log("token: ", tokens)
  console.log("decoded: ", decoded)//store token to local storage:
  if(token){
   return redirect("/images")
  }
  
  }
  catch (err) {
    console.log("ERROR.message: ", err.message)
    alert(err.message)
  }
}


function handleSignOut(event){
  setUser({});
  setToken(false);
  localStorage.setItem('token', false);
}

useEffect(()=> {
/* global google */
  google.accounts.id.initialize({
  client_id: '584124977451-144m9uphitn43bjta69rv3pb2o5sbn8u.apps.googleusercontent.com',
  callback: handleCallbackResponse,
});

  google.accounts.id.renderButton(
  document.getElementById('signInDiv'),
  { theme: "outline", size: "large"}
);
}, [token])



  return (
    <BrowserRouter>
    <NavBar handleSignOut={handleSignOut} token={token}/>
      <div className="App">
      <div class="g-signin2" data-onsuccess="onSignIn" id="signInDiv"></div>
      
        <div id="page-body">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/images" element={<ImagePage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;


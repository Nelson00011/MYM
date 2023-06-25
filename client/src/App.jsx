
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

import { Button} from "@mui/material";


import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ImagePage from './pages/ImagePage';

import './App.css';
 
//
function App() {
const [token, setToken] = useState(false);
const [user, setUser ] = useState({});

function handleCallbackResponse(response){
  console.log("encoded JWT ID token: " + response.credential);
  const decoded = jwt_decode(response.crediential) 
  setToken(response.crediential)
  // if(decoded.message === 'Invalid token specified'){
  //   alert(decoded.message)
  // }
  console.log("decoded: ", decoded)
  // document.getElementById('signInDiv').hidden = true;
}

function handleSignOut(event){
  setUser({})
  // document.getElementById('signInDiv').hidden = false;

}

useEffect(()=> {
/* global google */
  google.accounts.id.initialize({
  client_id: '584124977451-144m9uphitn43bjta69rv3pb2o5sbn8u.apps.googleusercontent.com',
  callback: handleCallbackResponse
});

  google.accounts.id.renderButton(
  document.getElementById('signInDiv'),
  { theme: "outline", size: "large"}
);
}, [])


  return (
    <BrowserRouter>
    <NavBar token={token}/>
      <div className="App">
      <div class="g-signin2" data-onsuccess="onSignIn" id="signInDiv"></div>
      <Button onClick={(event) => handleSignOut(event)}
              >
                Sign Out
              </Button>
        <div id="page-body">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/images" element={<ImagePage />} />
            <Route path="/auth" element={<ImagePage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;

{/* <Route path="/profile" element={<ImagePage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/createAccountPage" element={<CreateAccountPage />} />
<Route path="*" element={<NotFoundPage />} /> */}
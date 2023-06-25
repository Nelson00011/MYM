
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ImagePage from './pages/ImagePage';

import './App.css';


//
function App() {

function handleCallbackResponse(response){
  console.log("encoded JWT ID token: " + response.credential);
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
    <NavBar />
      <div className="App">
      <div class="g-signin2" data-onsuccess="onSignIn" id="signInDiv"></div>

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
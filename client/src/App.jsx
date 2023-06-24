
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ImagePage from './pages/ImagePage';

import './App.css';


//
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="App">
        
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
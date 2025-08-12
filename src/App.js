import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/welcome_page/Welcome';
import Login from './Pages/auth-pages/login-page/Login';
import Signup from './Pages/auth-pages/signup-page/Signup';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

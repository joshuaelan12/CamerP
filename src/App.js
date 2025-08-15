import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/welcome_page/Welcome';
import Login from './Pages/auth-pages/login-page/Login';
import Signup from './Pages/auth-pages/signup-page/Signup';
import Sidebar from './Pages/app-pages/side-bar/Sidebar';
import Dashboard from './Pages/app-pages/dashboard/Dashboard';
import Electricity from './Pages/app-pages/electricity/Electricity';
import Tv from './Pages/app-pages/tv/Tv';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/electricity' element={<Electricity/>} />
        <Route path='tv' element={<Tv />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

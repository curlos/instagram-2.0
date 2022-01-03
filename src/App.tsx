import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Feed from './pages/Feed';


import './styles.css'

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;

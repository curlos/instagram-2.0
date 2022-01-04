import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Feed from './pages/Feed';


import './styles.css'
import FullPost from './pages/FullPost';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/saved" element={<Profile />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;

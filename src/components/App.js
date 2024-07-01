import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './UserDetails';
import UserList from './UserList';
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
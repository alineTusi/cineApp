import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate= useNavigate()

  const handleLogout = async () => {
    await fetch('http://localhost:3004/logout');
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    navigate("/login")
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <p>{props.emails}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
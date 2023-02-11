import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate= useNavigate()

  const handleLogout = async () => {
    await fetch('http://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/logout');
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
import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {  useNavigate } from "react-router-dom";
import UserPic from "../../assets/icons/UserPhoto.png";
import axios from "axios";



const UserLogin = ({myemail}) => {

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };



 const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3004/logout');
      if (response.status === 204) {
      setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };




  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/SignIn')
  };


 return (
<Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar alt="user" img src={UserPic} />
  </IconButton>
</Tooltip>
<Menu
  sx={{ mt: "45px" }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  keepMounted
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
 {isLoggedIn ? <h2 style={{width:"350px"}}>Welcome, {myemail}</h2> : "" }
   {isLoggedIn ? (
        <button style={{width:"110px", height: "35px", borderRadius: "0.4em", backgroundColor: "red", color:"white", cursor: "pointer"}} onClick={handleLogout}>SignOut</button>
      ) : (
        <button style={{width:"110px", height: "35px", borderRadius: "0.4em", backgroundColor: "red", color:"white", cursor: "pointer"}} onClick={handleLogin}>SignIn</button>
      )}
</Menu>
</Box>
 )

      }


      export default UserLogin;
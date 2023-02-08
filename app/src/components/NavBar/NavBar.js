import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
//import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoPic from "../../assets/icons/Logo.Pic.svg";
import UserPic from "../../assets/icons/UserPhoto.png";
import SearchBar from "../Search/Search";

//import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About", "Contact Us"];
const settings = ["Sign In", "Sign Out"];
const movie = ["Genre"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userMovie, setUserMovie] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const moviesOpenUserMenu = (event) => {
    setUserMovie(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const movieCloseUserMenu = () => {
    setUserMovie(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            <div className="CineGAFLOGO">
              <img src={LogoPic} alt="popcorn" />
            </div>

            <div>
              <p className="CineDescription">CineGAF</p>
            </div>
          </Typography>
          {/*tuka da se odelat*/}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={moviesOpenUserMenu} sx={{ p: 0 }}>
                <h4
                  className="moviesDrop"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Movies
                </h4>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userMovie}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userMovie)}
              onClose={movieCloseUserMenu}
            >
              {movie.map((items) => (
                <MenuItem key={items} onClick={movieCloseUserMenu}>
                  <Typography textAlign="center">{items}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              style={{
                width: "55%",
                height: "40px",
                background: "transparent",
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img className="CinemaLogo" src={LogoPic} alt="popcorn" />
              {/*<MenuIcon />*/}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "red",
                        fontFamily: "Roboto Serif",
                        fontSize: "20px",
                        fontWeight: "bolder",
                      }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      margin: "15px 0px 0px 10px",
                      fontFamily: "Roboto Serif",
                      fontSize: "17px",

                      height: "20px",
                    }}
                    onClick={moviesOpenUserMenu}
                    sx={{ p: 2 }}
                  >
                    <h3
                      style={{
                        color: "red",
                        height: "0px",
                        margin: "0px",
                        padding: "opx",
                      }}
                    >
                      Movies
                    </h3>
                  </button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={userMovie}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(userMovie)}
                  onClose={movieCloseUserMenu}
                >
                  {movie.map((items) => (
                    <MenuItem key={items} onClick={movieCloseUserMenu}>
                      <Typography textAlign="center">{items}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            {/*<div className="CineGafSecondLogo">
              <img src={LogoPic} alt="popcorn" />
          </div>*/}
            <div>
              <p className="CineDescTwo">CineGAF</p>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "Roboto Serif",
                    textTransform: "uppercase",
                    marginLeft: "20px",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
            {/*<input
              style={{
                width: "20%",
                height: "30px",
                margin: "20px 0px 0px 250px",
                background: "black",
                color: "white",
              }}
              type="text"
              className="ButtonSearch"
            />*/}
          </Box>

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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

{
  /*import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

//import Search from '../Search/Search';

import { Link } from "react-router-dom";
import "./Navbar.css";

import LogoPic from "../../assets/icons/Logo.Pic.svg";
import { color } from "@mui/system";

//add this to a custom theme file

const pages = ["Home", "About", "Contact Us"];
const settings = ["Genre"];
const signIn = ["Sign Out"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 10,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",

                textDecoration: "none",
                fontSize: "30px;",
              }}
            >
              <div className="CineGAFLOGO">
                <img src={LogoPic} alt="popcorn" />
                <p>CineGAF</p>
              </div>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            ></IconButton>*/
}

{
  /*<div className="CineGAFLOGO">
                <img src={LogoPic} alt="popcorn" />
                <p>CineGAF</p>
            </div>*/
}
{
  /* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "red",
                        }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >*/
}
{
  /*LOGO*/
}
{
  /*</Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 4, color: "white", display: "block" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
                  </Box>*/
}

{
  /*tuka e Search*/
}
{
  /* <div className="MoviesDropDown">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <button
                    className="Movies"
                    onClick={handleOpenNavMenu}
                    sx={{
                      p: 0,
                      width: "10%",
                    }}
                  >
                    Movies
                  </button>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>

                  <div className="Search">*/
}
{
  /*<input type="text" className="ButtonSearch" />*/
}
{
  /* </div>*/
}
{
  /*<div className="SignInPart">  </div>*/
}
{
  /* <Box sx={{ flexGrow: 5, display: "flex", justifyContent: "end" }}>
              <Tooltip title="Open settings">
                <button
                  className="SignIn"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  Sign In
                </button>
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
                {signIn.map((signIn) => (
                  <MenuItem key={signIn} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{signIn}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;*/
}

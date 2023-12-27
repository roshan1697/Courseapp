import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideNavbar from './sidenavbar';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const toggleSideNavbar = useRef()
    return (
        <Box sx={{ flexGrow: 1,
          position:'sticky',
          zIndex:'1',
          top:'0.5rem'
          
          }} >
      <AppBar position="static"  style={{
          width:'98vw',
          
      }}>
        <Toolbar sx={{ backgroundColor: '#fafafa' }}>
          <SideNavbar ref={toggleSideNavbar}/>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e)=>{
              toggleSideNavbar.current.toggleSideBar(e)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black' }}>
            CourseApp
          </Typography>
          <Link to='/courseapp/signup'>
          <Button sx={{  color:'black' }} color="inherit">Signup</Button>
          </Link>
          <Link to='/courseapp/signin'>
          <Button sx={{  color:'black' }} color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar
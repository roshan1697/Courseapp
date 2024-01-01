/* eslint-disable react/display-name */
import   {useState, forwardRef,useImperativeHandle} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PortraitIcon from '@mui/icons-material/Portrait';
import SchoolIcon from '@mui/icons-material/School';
import GetAppIcon from '@mui/icons-material/GetApp';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';



const SideNavbar = forwardRef((_,ref) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate()
    const handleNavigation = () =>{navigate('/')}

    const handleNavigation1 = () =>{navigate('/courseapp/courses')}
      const toggleDrawer =  (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(!state);

      }
      useImperativeHandle(ref, ()=>({
        toggleSideBar: toggleDrawer
      }))
    
      const list = () => (
        
        <Box
          sx={{ width: 250
          
          }}
          role="presentation"
          onKeyDown={(e)=>toggleDrawer(e)}
        >
          <ListItemText primary={'MAIN MENU'} sx={{ paddingLeft:'1rem',paddingTop:'2rem' }} />

          <List >
              
              <ListItem  disablePadding onClick={
                handleNavigation
              } >
                
                <ListItemButton >
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Home'/>
                </ListItemButton>
                
              </ListItem>
              <ListItem  disablePadding onClick={handleNavigation1}  >
                <ListItemButton>
                  <ListItemIcon>
                    <SchoolIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Courses'/>
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding  >
                <ListItemButton>
                  <ListItemIcon>
                    <PortraitIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Admin'/>
                </ListItemButton>
              </ListItem>
          
          </List>
          <Divider />
      <List>
        
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GetAppIcon/>
              </ListItemIcon>
              <ListItemText primary='Purchases' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon/>
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        
      </List>
      
        </Box>
      );
  return (
    <div>
          <Drawer
            sx={{ 
            }}
            anchor={'left'}
            open={state}
            onClose={(e)=>toggleDrawer(e)}
          >
            {list()}
          </Drawer>
    </div>
  )
})


export default SideNavbar
import   {useState, forwardRef,useImperativeHandle} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const ToggleSideNavbar = (ref) => {
    const [state, setState] = useState(false);
   // console.log(ref)
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
          sx={{ width: 250 }}
          role="presentation"
          onClick={(e)=>toggleDrawer(e)}
          onKeyDown={(e)=>toggleDrawer(e)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
  return (
    <div>
          <Drawer
            anchor={'left'}
            open={state}
            onClose={(e)=>toggleDrawer(e)}
          >
            {list()}
          </Drawer>
    </div>
  )
}

const SideNavbar = forwardRef(ToggleSideNavbar)

export default SideNavbar
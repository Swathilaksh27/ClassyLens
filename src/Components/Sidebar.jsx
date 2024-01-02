// TemporaryDrawer.js

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
 // Import the AdminNavbar component

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     {/* Include the AdminNavbar component here */}
      <Divider />
      <List>
        {/* Collection section */}
        <ListItem key="Eyeglass Collection" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <Link to="/Admineye">
              <ListItemText primary="Eyeglass Collection" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Sunglass" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <Link to="/Adminsun">
              <ListItemText primary="Sunglass Collection" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Feedback" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <Link to="/admin-feedback">
            <ListItemText primary="Feedback" /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="CustomizeForm" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
           <Link to ="/user-details">
            <ListItemText primary="View User Details" /> </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Logout" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
           <Link to ="/">
            <ListItemText primary="Logout" /> </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {anchor} <DashboardIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

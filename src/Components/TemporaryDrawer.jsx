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

import ContactPageIcon from '@mui/icons-material/ContactPage';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CollectionsIcon from '@mui/icons-material/Collections';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
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
      <Divider />
      <List>
        {/* Collection section */}
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              
            </ListItemIcon>
            
          </ListItemButton>
        </ListItem>
        <ListItem key="Eyeglass" disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <CollectionsIcon/>
              {/* Use appropriate icons for each item */}
            </ListItemIcon>
            <Link to="/eye">
            <ListItemText primary="Eyeglass Collection" /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Sunglass" disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <CollectionsIcon/>
              {/* Use appropriate icons for each item */}
            </ListItemIcon>
            <Link to="/sun">
            <ListItemText primary="Sunglass Collection" /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="ContactUs" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <Link to="/contact">
            <ListItemText primary="Contact Us" /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Feedback" disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <FeedbackIcon/>
              {/* Use appropriate icons for each item */}
            </ListItemIcon>
            <Link to="/feedback">
            <ListItemText primary="Feedback" /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="CustomizeForm" disablePadding>
          <ListItemButton>
            <ListItemIcon>
        <DashboardCustomizeIcon/>

              {/* Use appropriate icons for each item */}
            </ListItemIcon>
            <Link to="/customize">
            <ListItemText primary="Customize Form" /></Link>
            
          </ListItemButton>
        </ListItem>
        <ListItem key="OrderHistory" disablePadding>
          <ListItemButton>
            <ListItemIcon>
        <HistoryIcon/>

              {/* Use appropriate icons for each item */}
            </ListItemIcon>
            <Link to="/history">
            <ListItemText primary="Order History" /></Link>
            
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
            {anchor} <DashboardIcon/>
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

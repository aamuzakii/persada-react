import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function SideDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '85vw' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 15, alignItems: 'center'}}>
          <div><AccountBoxOutlinedIcon sx={{ marginRight: 2}} ></AccountBoxOutlinedIcon></div>
          <div>
            <div style={{fontWeight: 600, fontSize: '14px'}} >Pesanan Saya</div>
            <div style={{ letterSpacing: '0.5px', color: 'rgb(96, 96, 96)', fontSize: '12px' }} >Semua pesananmu di Persada shop dapat dilihat di sini.</div>
          </div>
          <div><ArrowForwardIcon></ArrowForwardIcon></div>
        </div>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} ></MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', height: '100%' },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

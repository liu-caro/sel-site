import { useState } from 'react';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const listItems = [
  ['Home', '/home'],
  ['Activities', '/activities'],
  ['Progress', '/home'],
  ['Resources', '/home'],
  ['Printables', '/home'],
];

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const renderList = () => (
    <Box role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <List>
        {listItems.map(([text, internalLink]) => (
          <ListItem button key={text} component={Link} to="internalLink">
            <Link to={internalLink} style={{ textDecoration: 'none' }}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={openDrawer}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor={'top'}
        open={drawerOpen}
        onClose={openDrawer}
        onOpen={closeDrawer}
      >
        {renderList()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;

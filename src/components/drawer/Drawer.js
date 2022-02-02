import { useState } from "react";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const listItems = [["Home", <HomeIcon />]];

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const renderList = () => (
    <Box role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <List>
        {listItems.map(([text, icon]) => (
          <ListItem button key={text}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
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
        anchor={"top"}
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

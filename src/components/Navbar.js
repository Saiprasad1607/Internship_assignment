import {AppBar, Toolbar, IconButton, Typography , MenuItem, Button} from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton
            justify="space-between"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flex: 1 }}>
            Internship Assignment
          </Typography>
          <Typography  variant="h8" component="div" sx={{ flex: 2 }}>
            <Button href="/all">All Users </Button>
          </Typography>
          <Typography variant="h8" component="div" sx={{ flex: 1 }}>
          <Button href="/add">Add User </Button>
          </Typography>
          
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import { Link } from 'react-router-dom';
import { Link } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"white"}}
        
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
      >
        <Link href="#/location" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Locations</MenuItem>
        </Link>
        <Link href="#/character" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Characters</MenuItem>
        </Link>
        <Link href="#/enemy" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Enemies</MenuItem>
        </Link>
        <Link href="#/armor" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Armors</MenuItem>
        </Link>
        <Link href="#/weapon" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Weapons</MenuItem>
        </Link>
        <Link href="#/item" underline="hover" sx={{color:"black"}}>
                <MenuItem onClick={handleClose}>Items</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveDropdown = () => {
  const items = [
    { title: 'Home', link: '/' },
    { title: 'Sobre', link: '/sobre' },
    { title: 'Serviços', link: '/servicos' },
    { title: 'Contato', link: '/contato' },
  ];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log("CLICOU ABRIR");
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    console.log("CLICOU FECHAR");
    setAnchorEl(null);
  };
  console.log(items);

  // useEffect(() => {
  //   handleClick({ target: null }); // Simulate a click event
  // }, []);


  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <a
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.title}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ResponsiveDropdown;
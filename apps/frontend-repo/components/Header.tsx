'use client';

import { type MouseEventHandler, useState } from 'react';

import { LoginOutlined, LogoutOutlined } from '@mui/icons-material';
import { Button, CircularProgress, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';

import firebaseConfig from '@/config/firebaseConfig';
import useProfileState from '@/hooks/useProfileState';

const Header = () => {
  const { userData } = useProfileState();
  const matches = useMediaQuery('(max-width: 768px)');

  const [logginOut, setLogginOut] = useState(false);

  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      setLogginOut(true);
      initializeApp(firebaseConfig);
      await getAuth().signOut();
      window.location.href = '/api/auth/logout';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Buddy
        </Typography>
        {!userData?.id && (
          <Box>
            <Button
              href="/login"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              LinkComponent={Link}
            >
              <LoginOutlined /> Login
            </Button>
          </Box>
        )}
        {userData?.id && (
          <Box>
            <Button
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <Image
                width={30}
                height={30}
                style={{ backgroundColor: 'white', borderRadius: 30 }}
                alt="User Avatar"
                src={userData.picture || ''}
              />
              {!matches && <Typography sx={{ ml: '8px' }}>{userData.name}</Typography>}
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>
                {logginOut ? <CircularProgress color="inherit" size={20} /> : <LogoutOutlined />}
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

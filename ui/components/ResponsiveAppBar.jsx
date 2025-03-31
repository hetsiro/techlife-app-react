import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ComputerIcon from '@mui/icons-material/Computer';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { Grid2 } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { TechlifeContext } from '../../src/techlife/context/techlifeContext';
import { DrawerCart } from "./DrawerCart";
import { useState } from 'react';


const pages = ['hardware', 'computers', 'search'];
const settings = ['Profile', 'Cart', 'Logout'];

function ResponsiveAppBar() {

  const { cartCount } = useContext( TechlifeContext );

  const [open, setOpen] = useState(false);

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  const { logout } = useContext( AuthContext )

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = ( event ) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = ( event ) => {
    setAnchorElUser(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleCloseNavMenu = ( e ) => {
    setAnchorElNav(null);
    navigate(`/${e.target.textContent}`);
  };

  const handleCloseUserMenu = ( e ) => {
    setAnchorElUser(null);
    switch (e.target.textContent) {
      case 'Profile':
        console.log('Enviando a perfil...');
        return;
      
      case 'Cart':
        console.log('Enviando a carrito...');
        return;

      case 'Logout':
        logout()
        navigate('/auth/login')
        return;
    
      default:
        return;
    }
  };

  const onHandleCart = () => {
    setOpen(true);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={ () => navigate('/') }
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            TECHLIFE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(e) => handleCloseNavMenu(e)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECHLIFE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Grid2 container justifyContent='center' alignItems='center' gap={2} sx={{ flexGrow: 0 }} >
          <Typography variant='h6' sx={{ textAlign: 'center' }}>{ activeUser?.name }</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <DrawerCart open={ open } setOpen={ setOpen }  ></DrawerCart>
            <IconButton color='inherit' onClick={ onHandleCart }>
              <Badge badgeContent={ cartCount } color="secondary">
                <ShoppingCartIcon fontSize='large' />
              </Badge>
            </IconButton>
          </Grid2>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
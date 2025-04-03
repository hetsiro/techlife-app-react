import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, Grid2 } from '@mui/material';
import Badge from '@mui/material/Badge';
import { AuthContext } from '../../auth/context';
import { TechlifeContext } from '../../techlife/context';
import { DrawerCart } from './DrawerCart';
import TemporaryDrawer from './TemporaryDrawer';


const pages = ['hardware', 'computers', 'search'];

export function ResponsiveAppBar() {

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { cartCount } = useContext(TechlifeContext);
  const { activeUser } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleCloseNavMenu = (e) => {
    navigate(`/${e.target.textContent}`);
  };

  const onHandleCart = () => {
    setOpenCart(true);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton color='inherit' size='large' onClick={() => setOpenDrawer(true)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="a" onClick={() => navigate('/')} sx={{ display: { xs: 'none', md: 'flex' }, fontWeight: 900, letterSpacing: '0.2rem', cursor: "pointer" }} >
            TECHLIFE
          </Typography>
          <Grid2>
            <Drawer open={openDrawer} anchor='left' onClose={() => setOpenDrawer(false)}  >
              <TemporaryDrawer setOpenDrawer={setOpenDrawer} />
            </Drawer>
          </Grid2>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          <Grid2 container justifyContent='center' alignItems='center' gap={2}>
            <Typography variant='h6' sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setOpenDrawer(true)}>
              {activeUser?.name}
            </Typography>
            <Tooltip title="Settings" onClick={() => setOpenDrawer(true)}>
              <IconButton onClick={() => setOpenDrawer(true)} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={activeUser.avatar} />
              </IconButton>
            </Tooltip>
            <DrawerCart open={openCart} setOpenCart={setOpenCart} />
            <IconButton color='inherit' onClick={onHandleCart}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon fontSize='large' />
              </Badge>
            </IconButton>
          </Grid2>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
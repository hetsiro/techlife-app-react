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
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ComputerIcon from '@mui/icons-material/Computer';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Grid2, Typography } from '@mui/material';


export default function TemporaryDrawer() {

  const navigate = useNavigate();
  const { logout } = useContext( AuthContext )

  const handleNavigate = ( event ) => {
    navigate(`/${event.target.textContent}`)
  }

  const handleLogout = ( ) => {
    logout();
  }

  return (
    <Box sx={{ width: 250 }} role="presentation">
    
    <Grid2 container justifyContent='center' alignItems='center' backgroundColor='primary.main' py={1}>
      <Typography variant='h5' color='white'>Menu</Typography>
    </Grid2>
      <List>

        <ListItem disablePadding>
          <ListItemButton onClick={ handleNavigate } >
            <ListItemIcon>
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary='Hardware' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={ handleNavigate } >
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary='Computers' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={ handleNavigate } >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='Search' />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={ handleNavigate } >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={ handleLogout } >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
}
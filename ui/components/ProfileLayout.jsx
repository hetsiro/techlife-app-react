import React, { useContext } from "react";
import { Box, List, ListItem, ListItemText, Avatar, Typography, Paper } from "@mui/material";
import { Grid2 } from "@mui/material"
import { AuthContext } from "../../src/auth/context/AuthContext";
import { ProfileEdit } from "../../src/techlife/components/ProfileEdit";

const ProfileLayout = () => {

  const { activeUser } = useContext( AuthContext );
  // Estado para manejar el contenido actual  
  // const [selectedItem, setSelectedItem] = useState('Profile');

  // Función para manejar el clic en los ítems
  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <Grid2 
      container
      display='row'
      width='100%'
      height='calc(100vh - 96px)'
      >
      {/* Barra lateral (Perfil y Items) */}
      <Grid2 
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        height='auto'
        pt={2}
        size={3}
        borderRadius={4}
        sx={{ backgroundColor: '#f4f4f4' }}>
          
        {/* Perfil */}
        <Grid2 
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          >
          <Avatar sx={{ width: 80, height: 80, marginBottom: 2 }} alt="Perfil" src={activeUser.avatar} />
          <Typography variant="h6">{activeUser.name}</Typography>
          <Typography variant="body2" color="textSecondary"  sx={{
            whiteSpace: 'nowrap',  // Evita que el texto se haga multi-línea
            overflow: 'hidden',    // Oculta el contenido que excede el contenedor
            textOverflow: 'ellipsis',  // Añade el '...' al final del texto
            padding: 2,
            maxWidth: '100%',  // Puedes ajustar el ancho máximo según sea necesario
          }}>Desarrollador Frontend</Typography>
        </Grid2>

        {/* Menú de ítems */}
        {/* <List>
          {['Profile'].map((text) => (
            <ListItem button key={text} onClick={() => handleItemClick(text)} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Grid2>

      {/* Contenido central */}
      <Grid2
        container
        justifyContent='center'
        alignItems='center'
        size={9}
      >
        <ProfileEdit />
        {/* Contenido basado en el ítem seleccionado */}
          {/* {selectedItem === 'Profile' && (
            <ProfileEdit />
          )}
          {selectedItem === 'Items' && (
            <ProfileItems />
          )} */}
      </Grid2>
    </Grid2>
  );
};

export default ProfileLayout;

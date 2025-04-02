import React, { useContext } from "react";
import { Avatar, Typography } from "@mui/material";
import { Grid2 } from "@mui/material"
import { AuthContext } from "../../auth/context";
import { ProfileEdit } from "../../techlife/components";

export const ProfileLayout = () => {

  const { activeUser } = useContext( AuthContext );

  return (
    <Grid2 container display='row' width='100%'>
      <Grid2 container direction='column' justifyContent='center' alignItems='center' py={20} size={3} borderRadius={4} sx={{ backgroundColor: '#f4f4f4' }}>
        <Grid2 container direction='column' justifyContent='center' alignItems='center' width='100%' >
          <Avatar sx={{ width: 80, height: 80, marginBottom: 2 }} alt="Perfil" src={activeUser.avatar} />
          <Typography variant="h6">{ activeUser.name }</Typography>
          <Typography variant="body2" color="textSecondary"  sx={{ whiteSpace: 'nowrap', overflow: 'hidden', padding: 2, maxWidth: '100%' }}>Desarrollador Frontend</Typography>
        </Grid2>
      </Grid2>
      <Grid2 container justifyContent='center' alignItems='center' size={9}>
        <ProfileEdit />
      </Grid2>
    </Grid2>
  );
};
import { Button, Grid2, Grow, TextField, Typography } from '@mui/material'
import { useForm } from "../hooks/useForm";
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import ImageUploader from '../../../ui/components/ImageUploader';

export const ProfileEdit = () => {

  const { activeUser, setActiveUser } = useContext( AuthContext )
  const [ avatar, setAvatar ] = useState(null)
  const users = JSON.parse(localStorage.getItem('users'));
  
  const { name, password, onInputChange } = useForm({
      name: '',
      password : '',
    })  

  const onHandleEdit = () => {
    const userEdited = (users.find(( user ) => user.name === activeUser.name))

    if(userEdited) {
      userEdited.isLogged = true;
      userEdited.name = name;
      userEdited.password = password;
      userEdited.avatar = avatar;
      setActiveUser(userEdited);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('activeUser', JSON.stringify(userEdited));
    }
  }


  return (
    <Grid2
      container
      justifyContent='center'
      alignItems='center'
      py={2}
      gap={2}
      width='100%'
      >
        <Typography variant="h6" fontSize={50}>Edit profile</Typography>
        <Grid2
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            width='100%'
            gap={2}
            >
            <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <TextField name="password" type='password' label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <ImageUploader avatar={ avatar } setAvatar={ setAvatar } />
            <Button variant='contained' sx={{ width: '60%' }} size='large' onClick={ onHandleEdit }>Save changes</Button>
        </Grid2>
    </Grid2>
  )
}

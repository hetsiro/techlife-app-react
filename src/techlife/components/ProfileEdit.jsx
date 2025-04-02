import { Alert, Button, Grid2, Grow, TextField, Typography } from '@mui/material'
import { useForm } from "../hooks/useForm";
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { ImageUploader } from '../../ui';
import { useFormValidator } from '../../hooks/useFormValidator';
import { useSnackbar } from 'notistack';

export const ProfileEdit = () => {

  const { activeUser, updateAvatar } = useContext( AuthContext )
  const [ avatar, setAvatar ] = useState( activeUser.avatar )
  const users = JSON.parse(localStorage.getItem('users'));
  const { enqueueSnackbar } = useSnackbar();

  const { name, password, onInputChange } = useForm({
    name: activeUser.name,
    password : activeUser.password,
  })

  const { errorName, errorPassword, valid } = useFormValidator( name, password, password, true, true )

  const onHandleEdit = () => {

    if( valid ){
      const userEdited = (users.find(( user ) => user.name === activeUser.name))

      if(userEdited) {
        userEdited.isLogged = true;
        name === '' ? userEdited.name = activeUser.name : userEdited.name = name;
        password === '' ? userEdited.password = activeUser.password : userEdited.password = password;
        userEdited.avatar = avatar;
        updateAvatar( userEdited );
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('activeUser', JSON.stringify(userEdited));
        enqueueSnackbar('Contraseña cambiada con éxito!', { variant: 'success' })
      }
    }
  }

  return (
    <Grid2 container justifyContent='center' alignItems='center' py={2} gap={2} width='100%'>
        <Typography variant="h6" fontSize={50}>Edit profile</Typography>
        <Grid2 container direction='column' justifyContent='center' alignItems='center' width='100%' gap={2} >
            <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } value={ name } error={errorName.error} />
            <TextField name="password" type='password' label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } value={ password } error={errorPassword.error} />
            <ImageUploader avatar={ avatar } setAvatar={ setAvatar } />
            <Button variant='contained' sx={{ width: '60%' }} size='large' onClick={ onHandleEdit } disabled={ !valid } >Save changes</Button>
            <Alert variant="standard" severity={ errorName.error ? 'error' : 'success' } sx={{ width: '60%'}} >{ errorName.type }</Alert>
            <Alert variant="standard" severity={ errorPassword.error ? 'error' : 'success' } sx={{ width: '60%'}}>{ errorPassword.type }</Alert>
        </Grid2>
    </Grid2>
  )
}

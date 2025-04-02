import * as React from 'react';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { Alert, Button, Grid2, TextField, Typography } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import { AuthLayout } from '../layout/AuthLayout'
import { AuthContext } from '../context/';
import { useForm } from '../hooks/useForm';
import { useSnackbar } from 'notistack';
import { ImageUploader } from '../../ui';
import { useFormValidator } from '../../hooks/useFormValidator';

export const RegisterPage = () => {

  const { register } = useContext( AuthContext );

  const { enqueueSnackbar } = useSnackbar();

  const { name, password, passwordRepeat, onInputChange } = useForm({
    name: '',
    password : '',
    passwordRepeat: '',
  })
  
  const [ avatar, setAvatar ] = useState(null)

  const {errorName, errorPassword, errorPasswordRepeat, errorExist, errorImage, valid} = useFormValidator( name, password, passwordRepeat, avatar )
  
  const onHandleRegister = () => {

    if( valid ){
      const newUser = {
        name,
        password,
        avatar,
      }

      enqueueSnackbar('Registrado con éxito!', { variant: 'success' })
      register(newUser);
    }
  }

  const navigate = useNavigate();

  const onHandleLoginPage = () => {
    navigate('/auth/login');
  }

  return (
    <>
      <AuthLayout>
        <Grid2 container direction="row" alignItems="center" sx={{ gap: 1 }}>
          <FaceIcon fontSize="large" />
          <Typography variant="h6" color="primary.main">Register</Typography>
        </Grid2>
        <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } error={ errorName.error } />
        <TextField name="password" type='password' label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } error={ errorPassword.error } />
        <TextField name="passwordRepeat" type='password' label="Repeat Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } error={ errorPasswordRepeat.error } />
        <ImageUploader avatar={ avatar } setAvatar={ setAvatar } />
        <Button disabled={ !valid }  variant="contained" sx={{ width: '60%' }} onClick={ onHandleRegister } >
          Register
        </Button>
        <Button onClick={ onHandleLoginPage } sx={{ width: '60%' }} >Already have an account?</Button>
        <Grid2 container justifyContent='center' gap={1} width="60%" >
          <Alert variant="standard" severity={ errorName.error ? 'error' : 'success' } sx={{ width: '100%'}} >{ errorName.type }</Alert>
          <Alert variant="standard" severity={ errorPassword.error ? 'error' : 'success' } sx={{ width: '100%'}}>{ errorPassword.type }</Alert>
          <Alert variant="standard" severity={ errorPasswordRepeat.error ? 'error' : 'success' } sx={{ width: '100%'}}>{ errorPasswordRepeat.type }</Alert>
          <Alert variant="standard" severity={ errorExist.error ? 'error' : 'success' } sx={{ width: '100%'}}>{ errorExist.type }</Alert>
          <Alert variant="standard" severity={ errorImage.error ? 'error' : 'success' } sx={{ width: '100%'}}>{ errorImage.type }</Alert>
        </Grid2>
      </AuthLayout>
    </>
  )
}

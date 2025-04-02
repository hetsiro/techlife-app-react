import React, { useContext, useEffect, useState } from 'react'
import Face6Icon from '@mui/icons-material/Face6';
import { Alert, Button, Grid2, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout'
import { useNavigate } from 'react-router';
import { useForm } from '../hooks/useForm';
import { useFormValidator } from '../../hooks/useFormValidator';
import { useSnackbar } from 'notistack';
import { AuthContext } from '../context';


export const RecoverPage = () => {

  const { login } = useContext( AuthContext )
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  
  const { name, password, passwordRepeat, onInputChange } = useForm({
    name: '',
    password: '',
    passwordRepeat: '',
  })

  const [ valid, setValid ] = useState(false)

  const { errorExist, errorPassword, errorPasswordRepeat } = useFormValidator( name, password, passwordRepeat, true )

  useEffect(() => {
    if( errorExist.error && !errorPassword.error && !errorPasswordRepeat.error ){
      setValid(true)
    }
    
  }, [errorExist.error, errorPassword.error, errorPasswordRepeat.error])
  

  const onHandleRecover = () => {

    if( valid ){

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = users.find(( user ) => user.name === name );
        newUser.password = password;
        localStorage.setItem('users', JSON.stringify( users ) );
        enqueueSnackbar('Contraseña cambiada con éxito!', { variant: 'success' })
        login(newUser);
    }
  }

  const onHandleRecoverPage = () => {

    navigate('/auth/login');

  };

  return (
    <AuthLayout>
      <Grid2 container direction="row" alignItems="center" sx={{ gap: 1 }}>
        <Face6Icon fontSize="large" />
        <Typography variant="h6" color="primary.main">Password Recovery</Typography>
      </Grid2>
      <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={onInputChange} error={ !errorExist.error } />
      <TextField name="password" type='password' label="New Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={onInputChange} error={ errorPassword.error } />
      <TextField name="passwordRepeat" type='password' label="Repeat Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } error={ errorPasswordRepeat.error } />
      <Button onClick={onHandleRecover} variant="contained" sx={{ width: '60%' }} disabled={ !valid } >
        Recover
      </Button>
      <Button onClick={onHandleRecoverPage} sx={{ width: '60%' }} >Back to Login</Button>
        <Alert variant="standard" severity={ errorExist.error ? 'success' : 'error' } sx={{ width: '60%'}} >{ errorExist.error ? 'Usuario encontrado!' : 'Usuario no encontrado' }</Alert>
        <Alert variant="standard" severity={ errorPassword.error ? 'error' : 'success' } sx={{ width: '60%'}}>{ errorPassword.type }</Alert>
        <Alert variant="standard" severity={ errorPasswordRepeat.error ? 'error' : 'success' } sx={{ width: '60%'}}>{ errorPasswordRepeat.type }</Alert>
    </AuthLayout>
  )
}

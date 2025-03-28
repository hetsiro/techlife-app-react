import * as React from 'react';
import { useContext, useRef, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Alert, Button, Grid2, TextField, Typography } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import { useSnackbar } from 'notistack';
import { validateForms } from '../helpers/validators';


export const RegisterPage = () => {

  const { validatePassword } = validateForms();

  const { register, existUser } = useContext( AuthContext );

  const { enqueueSnackbar } = useSnackbar();

  const nameRef = useRef()
  const passwordRef = useRef()
  const passwordRepeatRef = useRef()

  const { name, password, passwordRepeat, onInputChange } = useForm({
    name: '',
    password : '',
    passwordRepeat: '',
  })

  const [ errorName, setErrorName ] = useState({
    type: '',
    error: false,
  });

  const [ errorPassword, setErrorPassword ] = useState({
    type: '',
    error: false,
  });

  const [ errorPasswordRepeat, setErrorPasswordRepeat ] = useState({
    type: '',
    error: false,
  });

  const [ ErrorExist, setErrorExist ] = useState({
    type: '',
    error: false,
  });
  
  const onHandleRegister = () => {

    // Validador de formulario
    let valid = true;
    if (name.length < 4) {
      setErrorName({ type: 'Nombre debe ser mayor a 4 carácteres', error: true });
      valid = false;
    } else {
      setErrorName({ type: '', error: false });
    }

    if ( !validatePassword( password ) ) {
      setErrorPassword({ type: 'La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial', error: true });
      valid = false;
    } else {
      setErrorPassword({ type: '', error: false });
    }

    if (password !== passwordRepeat) {
      setErrorPasswordRepeat({ type: 'Las contraseñas deben ser iguales', error: true });
      valid = false;
    } else {
      setErrorPasswordRepeat({ type: '', error: false });
    }

    if ( existUser( name ) ){
      setErrorExist({ type: 'El usuario ya se encuentra registrado', error: true });
      valid = false;
    } else {
      setErrorExist({ type: '', error: false });

    }

    if( valid ){
      const newUser = {
        name,
        password,
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
        <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } inputRef={ nameRef } error={ errorName.error } />
        <TextField name="password" type='password' label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } inputRef={ passwordRef } error={ errorPassword.error } />
        <TextField name="passwordRepeat" type='password' label="Repeat Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } inputRef={ passwordRepeatRef } error={ errorPasswordRepeat.error } />
        <Button variant="contained" sx={{ width: '60%' }} onClick={ onHandleRegister } >
          Register
        </Button>
        <Button onClick={ onHandleLoginPage } sx={{ width: '60%' }} >Already have an account?</Button>

        <Grid2 container justifyContent='center' gap={1} width="60%" >
          {errorName.error && <Alert variant="filled" severity="error" sx={{ width: '100%'}} >{ errorName.type }</Alert>}
          {errorPassword.error && <Alert variant="filled" severity="error" sx={{ width: '100%'}}>{ errorPassword.type }</Alert>}
          {errorPasswordRepeat.error && <Alert variant="filled" severity="error" sx={{ width: '100%'}}>{ errorPasswordRepeat.type }</Alert>}
          {ErrorExist.error && <Alert variant="filled" severity="error" sx={{ width: '100%'}}>{ ErrorExist.type }</Alert>}
        </Grid2>
      </AuthLayout>
    </>
  )
}

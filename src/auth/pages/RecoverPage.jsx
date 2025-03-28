import React, { useContext, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Alert, Button, Grid2, TextField, Typography } from '@mui/material';
import Face6Icon from '@mui/icons-material/Face6';
import { validateForms } from '../helpers/validators';


export const RecoverPage = () => {

  let users = []

  const { validatePassword } = validateForms();

  const [valid, setValid] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const navigate = useNavigate()

  const { existUser } = useContext(AuthContext);

  const { name, password, onInputChange } = useForm({
    name: '',
    password: '',
  })

  const onHandleRecover = () => {

    const user = {
      name,
      password,
    }

    if ( (existUser( user.name )) ) {
      setInvalidName(false);
      if( validatePassword( user.password ) ){
        console.log(validatePassword( user.password ));
        setInvalidPassword( false )
        setValid(true);

        users = JSON.parse(localStorage.getItem('users')) || [];

        const newUsers = users.filter(( user ) => user.name !== user.name )
  
        users = [ ...newUsers, user ]
  
        localStorage.setItem('users', JSON.stringify( users ) );
      }
      else{
        setInvalidPassword( true )
      }
    }
    else {
      setInvalidName(true);
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
      <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={onInputChange} />
      <TextField name="password" type='password' label="New Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={onInputChange} />
      <Button onClick={onHandleRecover} variant="contained" sx={{ width: '60%' }} >
        Recover
      </Button>
      <Button onClick={onHandleRecoverPage} sx={{ width: '60%' }} >Login</Button>
      {(invalidName) && <Alert variant="filled" severity="error" sx={{ width: '60%' }} >Nombre de usuario no encontrado</Alert>}
      {(invalidPassword) && <Alert variant="filled" severity="error" sx={{ width: '60%' }} >La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial</Alert>}
      {(valid) && <Alert variant="filled" severity="success" sx={{ width: '60%' }} >Contraseña cambiada con éxito!</Alert>}

    </AuthLayout>
  )
}

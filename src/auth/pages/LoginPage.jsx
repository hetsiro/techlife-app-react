import { Alert, Button, Grid2, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../hooks/useForm";
import { useSnackbar } from "notistack";
import Face6Icon from '@mui/icons-material/Face6';

export const LoginPage = () => {

  const { enqueueSnackbar } = useSnackbar();

  const [ invalid, setInvalid ] = useState( false );

  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const { name, password, onInputChange } = useForm({
    name: '',
    password : '',
  })  
  
  const onHandleLogin = () => {

      const user = {
        isLogged: true,
        name,
        password
      }

      if( login( user ) ){
        navigate('/home')
        enqueueSnackbar('Logeado con éxito!', { variant: 'success' })
      }
      else {
        setInvalid( true )
      }
    }

  const onHandleRegisterPage = () => {
    navigate('/auth/register');
  }

  const onHandleRecoverPage = () => {
    navigate('/auth/recoverpassword');
  }

  return (
    <>
        <AuthLayout>
          <Grid2 container direction="row" alignItems="center" sx={{ gap: 1 }}>
              <Face6Icon fontSize="large" />
              <Typography variant="h6" color="primary.main">Login</Typography>
          </Grid2>
            <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <TextField name="password" type='password' label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <Button onClick={ onHandleLogin } variant="contained" sx={{ width: '60%' }} >
              Login
            </Button>
            <Button onClick={ onHandleRegisterPage } sx={{ width: '60%' }} >Register</Button>
            <Button onClick={ onHandleRecoverPage } sx={{ width: '60%' }} >Password Recovery</Button>
            { (invalid) && <Alert variant="filled" severity="error" sx={{ width: '60%'}} >Usuario o contraseña incorrecta</Alert> }
        </AuthLayout>
    </>
  );
};

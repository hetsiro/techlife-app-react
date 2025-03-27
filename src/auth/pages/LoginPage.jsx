import { Button, Grid2, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../hooks/useForm";
import Face6Icon from '@mui/icons-material/Face6';

export const LoginPage = () => {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const { name, password, onInputChange } = useForm({
    name: '',
    password : '',
  })  
  
  const onHandleLogin = () => {

    if( name.length > 0 && password.length > 0 ) {

      const exist = login({
        isLogged: true,
        name,
        password,
      })

      exist
        ? navigate('/home')
        : console.log('Usuario o contraseña incorrecta')
    }
  };


  const onHandleRegisterPage = () => {
    navigate('/auth/register');
  }

  return (
    <>
        <AuthLayout>
          <Grid2 container direction="row" alignItems="center" sx={{ gap: 1 }}>
              <Face6Icon fontSize="large" />
              <Typography variant="h6" color="primary.main">Login</Typography>
          </Grid2>
            <TextField name="name" label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <TextField name="password" label="Password" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <Button onClick={ onHandleLogin } variant="contained" sx={{ width: '60%' }} >
              Login
            </Button>
            <Button onClick={ onHandleRegisterPage } sx={{ width: '60%' }} >Don't have an account?</Button>
            {/* <Link to='/auth/register' >Don't have an account?</Link> */}
        </AuthLayout>
    </>
  );
};

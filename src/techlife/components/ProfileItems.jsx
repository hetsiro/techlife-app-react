import { Button, Grid2, TextField, Typography } from '@mui/material'

export const ProfileItems = () => {


  return (
    <>
        <Typography variant="h4">Contenido de Perfil</Typography>
        <Grid2
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            gap={2}
            >
            <TextField name="name" type='text' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <TextField name="password" type='password' label="Name" variant="outlined" sx={{ width: '60%' }} autoComplete="on" onChange={ onInputChange } />
            <Button variant='contained' sx={{ width: '60%' }} >Save</Button>
        </Grid2>
    </>
  )
}

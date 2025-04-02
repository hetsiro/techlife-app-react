import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

export default function MediaCardHome({ id, type }) {

  const navigate = useNavigate();

  const onHandleNavigate = () => {

    navigate(`/${type.toLowerCase()}`);

  }

  return (
    <Card
      sx={{
        width: 350,
        padding: 1,
        boxShadow: 5,
      }}
    >
      <CardMedia
        sx={{
          height: 350,
        }}
        image={`/assets/items/${id}.png`}
      />
      <CardContent>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Button
          sx={{ my: 2, ml: '0 !important' }}
          variant='contained'
          size="large"
          fullWidth
          onClick={ onHandleNavigate }
        >{ type }</Button>
      </CardActions>
    </Card>
  );
}
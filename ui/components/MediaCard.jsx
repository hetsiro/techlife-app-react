import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import BasicModal from './BasicModal';

export default function MediaCard({ id, name, specs, brand, type }) {

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
        <Typography
          gutterBottom
          variant='button'
          color='primary.main'
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet suscipit massa.
        </Typography>
          <Divider
            sx={{ my: 2 }}
          >
            <Chip label="Specs" size="small" />
          </Divider>
          <Typography 
            variant="body1"
            textAlign='center'
          >
          {specs}
          </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <BasicModal id={ id } name={ name } specs={ specs } brand={ brand } type={ type } />
        <Button
          sx={{ my: 2, ml: '0 !important' }}
          variant='contained'
          size="small"
          fullWidth
        >Add to cart</Button>
      </CardActions>
    </Card>
  );
}
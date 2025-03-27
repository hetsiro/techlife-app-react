import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ items }) {
  return (
    <Autocomplete
      disablePortal
      options={ items }
      sx={{ width: '60%' }}
      renderInput={(params) => <TextField {...params} label="SEARCH" />}
    />
  );
}
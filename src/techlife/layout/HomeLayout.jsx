import { alpha, Grid2 } from '@mui/material'
import { theme } from '../../theme/theme'

export const HomeLayout = ({ children }) => {
  return (
    <Grid2
        container
        direction="row"
        spacing={2}
        sx={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: alpha(theme.palette.primary.main, 0.5),
            minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
            padding: theme.spacing(2, 0)
        }}
    >
      { children }
    </Grid2>
  )
}

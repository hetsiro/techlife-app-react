import { CssBaseline } from "@mui/material"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"
import { UserContext } from "./auth/context/UserContext"
import { AuthContext } from "./auth/context/AuthContext"
import { SnackbarProvider } from 'notistack';

export const TechlifeApp = () => {

  const { users, activeUser, login, logout, register } = UserContext();
  
  return (
    <AppTheme>
      <CssBaseline />
        <AuthContext.Provider value={{ users, activeUser, login, logout, register }}>
        <SnackbarProvider maxSnack={3}>
          <AppRouter />
        </SnackbarProvider>
        </AuthContext.Provider>
    </AppTheme>
  )
}

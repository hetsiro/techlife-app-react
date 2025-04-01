import { CssBaseline } from "@mui/material"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"
import { UserContext } from "./auth/context/UserContext"
import { AuthContext } from "./auth/context/AuthContext"
import { SnackbarProvider } from 'notistack';
import { useTechlifeContext } from "./techlife/context/useTechlifeContext"
import { TechlifeContext } from "./techlife/context/techlifeContext"

export const TechlifeApp = () => {

  const { users, activeUser, setActiveUser, login, logout, existUser, register } = UserContext();
  const { cartCount, setCartCount, cart, setCart } = useTechlifeContext();
  
  return (
    <AppTheme>
      <CssBaseline />
        <AuthContext.Provider value={{ users, activeUser, setActiveUser, login, logout, existUser, register }}>
          <TechlifeContext.Provider value={{ cartCount, setCartCount, cart, setCart }}>
            <SnackbarProvider maxSnack={3}>
              <AppRouter />
            </SnackbarProvider>
          </TechlifeContext.Provider>
        </AuthContext.Provider>
    </AppTheme>
  )
}

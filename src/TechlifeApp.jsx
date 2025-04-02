import { CssBaseline } from "@mui/material"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"
import { SnackbarProvider } from 'notistack';
import { TechlifeContext, useTechlifeContext } from "./techlife/context"
import { AuthContext, UserContext } from "./auth/context";

export const TechlifeApp = () => {

  const { activeUser, updateAvatar, login, logout, existUser, register } = UserContext();
  const { cartCount, setCartCount, cart, setCart } = useTechlifeContext();
  
  return (
    <AppTheme>
      <CssBaseline />
        <AuthContext.Provider value={{ activeUser, updateAvatar, login, logout, existUser, register }}>
          <TechlifeContext.Provider value={{ cartCount, setCartCount, cart, setCart }}>
            <SnackbarProvider maxSnack={3}>
              <AppRouter />
            </SnackbarProvider>
          </TechlifeContext.Provider>
        </AuthContext.Provider>
    </AppTheme>
  )
}

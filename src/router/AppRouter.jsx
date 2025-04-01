import { Navigate, Route, Routes } from "react-router"
import { ComputersPage, HardwarePage, HomePage, SearchPage } from "../techlife/pages"
import ResponsiveAppBar from "../../ui/components/ResponsiveAppBar"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { RecoverPage } from "../auth/pages/RecoverPage"
import { ProfilePage } from "../techlife/pages/ProfilePage"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/*' element={
          <PublicRoute>
            <>
              <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='register' element={ <RegisterPage /> } />
                <Route path='recoverpassword' element={ <RecoverPage /> } />
              </Routes>
            </>
          </PublicRoute>} />

        <Route path='/*' element={
          <PrivateRoute>
            <>
              <ResponsiveAppBar />
              <div className='container'>
                <Routes>
                  <Route path='/*' element={<Navigate to={'/home'} />} />
                  <Route path='home' element={<HomePage />} />
                  <Route path='hardware' element={<HardwarePage />} />
                  <Route path='computers' element={<ComputersPage />} />
                  <Route path='search' element={<SearchPage />} />
                  <Route path='profile' element={<ProfilePage />} />
                </Routes>
              </div>
            </>
          </PrivateRoute>} />
      </Routes>
    </>
  )
}

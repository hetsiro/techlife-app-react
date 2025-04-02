import { Navigate, Route, Routes } from "react-router"
import { PublicRoute, PrivateRoute } from "./"
import { LoginPage, RecoverPage, RegisterPage } from "../auth/pages"
import { ComputersPage, HardwarePage, HomePage, ProfilePage, SearchPage } from "../techlife/pages"
import { ResponsiveAppBar } from "../ui"


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

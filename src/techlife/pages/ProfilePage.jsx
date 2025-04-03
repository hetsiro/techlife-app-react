import { Grid2 } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import { ProfileEdit } from "../components"


export const ProfilePage = () => {
  return (
    <HomeLayout>
      <Grid2
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        size={{ xs: 10, md: 4}}
        p={4}
        borderRadius={4}
        backgroundColor='white'>
        <ProfileEdit />
      </Grid2>
    </HomeLayout>
  )
}

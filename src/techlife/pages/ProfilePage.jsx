import { Grid2 } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import ProfileLayout from "../../../ui/components/ProfileLayout"


export const ProfilePage = () => {
  return (
    <HomeLayout>
      <Grid2
        container
        justifyContent='center'
        alignItems='center'
        backgroundColor='white'
        borderRadius={4}
        size={10}
        >
          <ProfileLayout />
      </Grid2>
    </HomeLayout>
  )
}

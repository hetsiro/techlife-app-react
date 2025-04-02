import { useContext } from "react";
import { Grid2, Typography } from "@mui/material";
import { HomeLayout } from "../layout/HomeLayout";
import { items } from "../data/items";
import { AuthContext } from "../../auth/context/AuthContext";
import MediaCardHome from "../../ui/components/MediaCardHome";



export const HomePage = () => {

  const { activeUser } = useContext( AuthContext )

  const hardware = items[0]
  const computer = items[(items.length) - 1]
  const selectedItems = [hardware, computer]

  return (
    <>
      <HomeLayout>
        <Grid2
          container
          direction="column"
          size={{ xs: 10, md: 6 }}
          sx={{
            py: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 4,
          }}>

            <Typography variant="h6">Welcome </Typography>
            <Typography variant="h6" fontSize={30} color="primary.main">{ activeUser.name }!</Typography>

            <Grid2 
              container
              direction="row"
              justifyContent='center'
              alignItems='center'
              padding={2}
              >
              {selectedItems.map(item => (
              (
                <MediaCardHome key={item.id} {...item}/>
              ) 
              ))}
            </Grid2>
        </Grid2>
      </HomeLayout>
    </>
  )
}

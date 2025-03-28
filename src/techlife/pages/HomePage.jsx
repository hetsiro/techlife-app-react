import { Grid2, Typography } from "@mui/material";
import { HomeLayout } from "../layout/HomeLayout";
import MediaCardHome from "../../../ui/components/MediaCardHome"
import { items } from "../data/items";



export const HomePage = () => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

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

            <Typography variant="h6">Welcome { activeUser.name } </Typography>

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

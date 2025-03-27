import { alpha, Grid2, TextField, Typography } from "@mui/material";
// import ComboBox from "../../../ui/components/ComboBox"
// import { getItemNames } from "../helpers/getItemNames"
import { theme } from "../../theme/theme";
import { useForm } from "../hooks/useForm";
import { getItemsByName } from "../helpers/getItemsByName";
import MediaCard from "../../../ui/components/MediaCard";

export const SearchPage = () => {

  const { name, onInputChange } = useForm({
    name: ''
  });

  const newItems = getItemsByName(name);

  return (
    <>
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
        <Grid2
          size={10}
          sx={{
            backgroundColor: 'white',
            boxShadow: 2,
            borderRadius: 4
          }}
        >
          <Grid2
            container
            sx={{
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: theme.spacing(5, 0, 0, 0)
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3
              }}
            >
              Search your item
            </Typography>
            <TextField
              id="filled-basic"
              label="Item"
              variant="outlined"
              name="name"
              onChange={onInputChange}
              sx={{
                width: '60%',
              }}
            />
            <Grid2
              container
              spacing={2}
              padding={theme.spacing(4, 0)}
              alignItems="center"
              justifyContent="center"
            >
              {
                (newItems.length > 0) &&
                (newItems.map((item) => {

                  return <MediaCard
                    key={item.id}
                    {...item}
                  />
                }))
              }
            </Grid2>
            {/* <ComboBox 
                  name="name"
                  items={ items } 
                /> */}
          </Grid2>
        </Grid2>
      </Grid2>


    </>
  )
}

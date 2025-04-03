import { alpha, Grid2, TextField, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { useForm } from "../hooks/useForm";
import { getItemsByName } from "../helpers";
import MediaCard from "../../ui/components/MediaCard";
import { HomeLayout } from "../layout/HomeLayout";

export const SearchPage = () => {

  const { name, onInputChange } = useForm({
    name: ''
  });

  const newItems = getItemsByName(name);

  return (
    <>
      <HomeLayout>
        <Grid2
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        mx={2}
        py={4}
        px={2}
          sx={{
            backgroundColor: 'white',
            boxShadow: 4,
            borderRadius: 4
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
                width: { xs: '100%', md: '60%'},
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
              {(newItems.length === 0 && <Typography variant="h6" sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '250px',
              }}>No items with:<br /><b>{name}</b> </Typography>)}
            </Grid2>
          </Grid2>
      </HomeLayout>


    </>
  )
}

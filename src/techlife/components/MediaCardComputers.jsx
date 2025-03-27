import { alpha, Grid2 } from "@mui/material"
import MediaCard from "../../../ui/components/MediaCard"
import { theme } from "../../theme/theme"

export const MediaCardComputers = ({ computers }) => {
    return (
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
            {computers.map((computer) => {
                return <MediaCard
                    key={computer.id}
                    {...computer}
                />
            })
            }
        </Grid2>
    )
}
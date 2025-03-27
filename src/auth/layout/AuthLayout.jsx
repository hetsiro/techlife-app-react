import { Grid2 } from '@mui/material'

export const AuthLayout = ({ children }) => {
    return (
        <Grid2
            container
            sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main",
                minHeight: "100vh",
            }}>
            <Grid2
                container
                direction="column"
                size={{ xs: 10, sm: 8, md: 6, xl: 4 }}
                sx={{
                    py: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 4,
                    gap: 2,
                }}>
                { children }
            </Grid2>
        </Grid2>
    )
}

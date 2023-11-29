import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardLayout from './card';


const Layout = () => {
    return (
    <Box sx={{ flexGrow: 1, marginY: '2rem' }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }} sx={{ margin: { xs: 'auto'}}}>
        {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={5} sm={4} md={3} lg={2} key={index} >
                <CardLayout/>
            </Grid>
        ))}
    </Grid>
    </Box>
    )
}

export default Layout
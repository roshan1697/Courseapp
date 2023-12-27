import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardLayout from './card';
import { Typography } from '@mui/material';


const Layout = () => {
    return (
    <Box style={{
        padding:'2rem'
    }}>
        <Typography style={{
            textAlign:'center'
        }} variant='h3'>Courses</Typography>
    <Grid container spacing={{ xs: 2, md:4}} columns={{ xs: 4, sm: 8, md: 12, lg:11  }} sx={{ margin: { xs: 'auto'}}}>
        
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
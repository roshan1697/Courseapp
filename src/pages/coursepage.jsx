import NavBar from "../components/navbar"
import { Box, Button, Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom'


const CoursePage = () => {
    return (
        <div>
        <NavBar/>
        <Box style={{
        padding:'2rem',
        
        }} >
        <Grid container  spacing={2}>
            <Grid item xs={12} md={8} style={{
                paddingTop:'15%'
            }}
            
            >

        <Typography style={{
        }} variant="h4">
                Headline curve your Skill
                with Different Way
            </Typography>
            <Typography  style={{
                                marginTop:'1rem',

            }}>
            Let's take an online course to improve your skills in a different way,
            you can set your own study time according to your learning speed.
            So you san study comfortable and absorb tge material easily.
            </Typography>
            <Link to='/courseapp/signin'>
            <Button size="large" style={{
                marginTop:'1rem',
                backgroundColor:'blue',
                color:'white'
            }}>Buy Now</Button>
            </Link>
            </Grid>
            <Grid item xs={12} md={4} style={{
                paddingTop:'10%'

            }}>
            
        <img src='https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg'
            
            width='100%' height='auto'/>
                
            </Grid>
        </Grid>
    </Box>


    </div>
)
}

export default CoursePage
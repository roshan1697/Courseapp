import { Card, CardContent, CardMedia, Checkbox,Box, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar"


const CourseEditPage = () => {
    

    return (
    <div>
        <NavBar/>
        <div>
            <Grid container spacing={2}>
                <Grid item  xs={12} md={8}
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <Card style={{
                        padding:20,
                        width:'70%',
                        marginTop:30
                    }}>

                    <Typography variant="h5" style={{marginBottom:10}}>Update course</Typography>
                    <TextField required 
                    style={{marginBottom:10}}
                    fullWidth={true}
                    label='Title'/>
                    <TextField required multiline 
                    label='Description'
                    fullWidth={true}
                    style={{marginBottom:10}}
                    rows={4}
                    />
                    <TextField
                    fullWidth={true}
                    style={{marginBottom:10}}
                    label='ImageURL'/>
                    <TextField 
                    label='Price'
                    fullWidth={true}
                    style={{marginBottom:10}}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }}
                    />
                    <Box style={{
                        display:'flex',
                        alignItems:'center',
                        marginBottom:10
                    }}>

                    <Checkbox defaultChecked />
                    <Typography style={{
                        textAlign:'center'
                    }}>Published</Typography>
                    </Box>
                </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                <Card sx={{ maxWidth: 345, marginTop:6 }}>
                <CardMedia
                sx={{ height: 250 }}
                image="https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg"
                title="course"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                <Typography  variant="h6" >
                Lizard
                </Typography>
                </CardContent>
                
                </Card>

                </Grid>
            </Grid>
        </div>

    </div>
    )
}

export default CourseEditPage
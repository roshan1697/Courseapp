import { Box, Button, Card, Checkbox, InputAdornment, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar"


const CourseAddPage = () => {
  return (
    <>
    <NavBar/>
    <div style={{
        display:'flex', justifyContent:'center'
    }}>
    <Card style={{
                        padding:20,
                        width:'50vw',
                        marginTop:50
                    }}>

                    <Typography variant="h5" style={{marginBottom:10}}>Add course</Typography>
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
                        display:'flex', alignItems:'center',
                        marginBottom:10
                    }}>

                    <Checkbox defaultChecked />
                    <Typography style={{
                        textAlign:'center'
                    }}>Published</Typography>
                    </Box>
                    <Button size="large" style={{
                            
                            backgroundColor:'blue',
                        color:'white'
                    }}>Add course</Button>
                </Card>
                
    </div>
    </>
  )
}

export default CourseAddPage
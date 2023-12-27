
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardLayout = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
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
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
  )
}

export default CardLayout

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CardLayout = (course) => {
  const navigate = useNavigate()
  const handleView = (id) =>{
      navigate('/courseapp/courses/course/'+ id)
  }
  const handleEdit = (id) =>{
    navigate('/courseapp/course/edit/'+ id)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg"
      title="course"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {course.course.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {course.course.description}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {course.course.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button 
        onClick={handleView(course.course._id)}
        size="small">View</Button>
      <Button
        onClick={handleEdit(course.course._id)}
        size="small">Edit</Button>
    </CardActions>
  </Card>
  )
}

export default CardLayout
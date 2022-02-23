import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgressWithLabel from '@mui/material/LinearProgress'

const SelCard = ({ title, description, progress }) => {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardContent>
                <Typography variant='h4'>{title}</Typography>
                <br />
                <Typography variant='body1'>{description}</Typography>
                <br />
                <LinearProgressWithLabel variant="determinate" value={progress} />
                <Typography variant='caption'>{progress}%</Typography>
            </CardContent>
        </Card>
    )
}

export default SelCard;
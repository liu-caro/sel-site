import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgressWithLabel from '@mui/material/LinearProgress'

const SelCard = ({ title, description, progress, color, internalLink = null }) => {
    let navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 500 }} style={{ backgroundColor: color }}
            onClick={internalLink ? () => {
                navigate(internalLink);
            } : null}>
            <CardContent>
                <Typography variant='h4'>{title}</Typography>
                <br />
                <Typography variant='body1'>{description}</Typography>
                <br />
                <LinearProgressWithLabel variant="determinate" value={progress} />
            </CardContent>
        </Card>
    )
}

export default SelCard;
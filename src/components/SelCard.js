import { Link } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgressWithLabel from '@mui/material/LinearProgress'

const SelCard = ({ title, description, progress, color, internalLink='/' }) => {
    return (
        <div>
            <Link to={internalLink} style={{ textDecoration: 'none' }}>
                <MuiCard sx={{ maxWidth: 500 }} style={{ backgroundColor: color }}>
                    <CardContent>
                        <Typography variant='h4'>{title}</Typography>
                        <br />
                        <Typography variant='body1'>{description}</Typography>
                        <br />
                        <LinearProgressWithLabel variant="determinate" value={progress} />
                    </CardContent>
                </MuiCard>
            </Link>
        </div>
    )
}

export default SelCard;
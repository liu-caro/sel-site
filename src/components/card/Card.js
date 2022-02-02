import { useNavigate } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Card = ({ title, icon, internalLink = null }) => {
  let navigate = useNavigate();
  return (
    <div>
        <MuiCard 
          style={{ backgroundColor: 'cyan', textAlign: 'center' }}
          onClick={internalLink ? () => {
            navigate(internalLink);
          } : null}
        >
          <CardContent>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
          <CardMedia>{icon}</CardMedia>
        </MuiCard>
    </div>
  );
};

export default Card;

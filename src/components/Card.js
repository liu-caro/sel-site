import { Link } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Card = ({ title, icon=null, internalLink = '/home' }) => {
  return (
    <div>
        <Link to={internalLink} style={{ textDecoration: 'none' }}>
          <MuiCard style={{ textAlign: 'center', backgroundColor: '#FBBD3340' }}>
            <CardContent>
              <Typography variant="h4">{title}</Typography>
              <br />
              {icon ? <CardMedia>{icon}</CardMedia> : null}
            </CardContent>
          </MuiCard>
        </Link>
    </div>
  );
};

export default Card;

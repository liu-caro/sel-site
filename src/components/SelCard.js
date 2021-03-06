import { Link } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SelCard = ({
    animal,
    title,
    description,
    color,
    internalLink = '/activities',
}) => {
    return (
        <div>
            <Link to={internalLink} style={{ textDecoration: 'none' }}>
                <MuiCard
                    sx={{ maxWidth: 350 }}
                    md={{ width: 'auto' }}
                    style={{ backgroundColor: color }}
                >

                    <CardContent>                
                        <Typography variant='h4'>{title}</Typography>
                        <br />
                        <Typography variant='body1'>{description}</Typography>
                        <br />
                        <img src={animal} width={'25%'} alt={'animal-icon'} height={'25%'} style={{float: 'right'}}/>
                    </CardContent>
                </MuiCard>
            </Link>
        </div>
    );
};

export default SelCard;

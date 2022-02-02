import { Grid, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Card from '../components/card/Card';

const cardInfo = [
  [
    ['Activities', <PlaceIcon />, '/activities'],
    ['Progress', <PlaceIcon />],
  ],
  [
    ['Resources', <PlaceIcon />],
    ['Printables', <PlaceIcon />],
  ],
];

const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant="h4">SEL Portal Homepage </Typography>
      </Grid>
      {cardInfo.map((row) => {
        return (
          <Grid container xs={6} spacing={2} style={{ marginBottom: '0.5rem' }}>
            {row.map(([name, image, internalLink]) => {
              return (
                <Grid item key={name} xs={6}>
                  <Card title={name} icon={image} internalLink={internalLink} />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomePage;

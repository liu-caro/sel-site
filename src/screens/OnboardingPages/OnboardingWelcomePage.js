import { Grid, Typography, ImageList, ImageListItem } from "@mui/material";
import Button from "@mui/material/Button";
import animalProgressOverview from './../../assets/onboardingImages/animalProgressOverview.svg';
import { Link } from 'react-router-dom';

const OnboardingWelcomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={4}
    >
      <Grid item xs={12}>
        <Typography variant="h1">Welcome to your SEL Portal!</Typography>
      </Grid>

      <img src={animalProgressOverview} alt="animal progress overview" />


      <Grid item xs={12}>
        <Typography variant="body1">
          SEL has 5 main pillars of learning, represented by 5 animals. We provide activities for parents to do with their children to develop SEL skills As your child improves on their skills, they will level up in the related category.
        </Typography>
      </Grid>

      <Grid item xs={12}>
      <Link to="/home">
          <Typography variant="button">Skip tutorial</Typography>
        </Link>
      </Grid>

      <Grid item xs={12}>
        <Link to="/onboarding-activities" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Next</Button>
        </Link>
      </Grid>

    </Grid>
  );
};

export default OnboardingWelcomePage;

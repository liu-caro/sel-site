import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import activitiesPage from './../../assets/onboardingImages/activitiesPage.svg';
import { Link } from 'react-router-dom';

const OnboardingActivitiesPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={8}
    >
      <Grid item xs={12}>
        <Typography variant="h1">Practice skills with activities</Typography>
      </Grid>

      <Grid item xs={12}>
        <img src={activitiesPage} alt="activities page" height={650} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          Each SEL pillar has its own page with related activities for your child to practice that specific skill. You can learn about how the activity builds the skill, print out the instructions, watch an instructional video, and track your child&apos;s completion!
        </Typography>
      </Grid>

      <Grid item xs={12}>
      <Link to="/home">
          <Typography variant="button">Skip tutorial</Typography>
        </Link>
      </Grid>

      <Grid item xs={12}>
      <Link to="/onboarding-printables" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Next</Button>
        </Link>
      </Grid>

    </Grid>
  );
};

export default OnboardingActivitiesPage;

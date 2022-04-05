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
      p={3}
    >
      <Grid item xs={12} style={{textAlign:'center'}}>
        <Typography variant="h1">Practice skills with activities</Typography>
      </Grid>

      <Grid item xs={12} ml={4}>
        <img src={activitiesPage} alt="activities page" width={225} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          Each SEL pillar has its own page with related activities for your child to practice that specific skill. You can learn about how the activity builds the skill, print out the instructions, watch an instructional video, and track your child&apos;s completion!
        </Typography>
      </Grid>

      <Grid item xs={12}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
          <Button variant="contained" class="landingOnboardingButton">Get started!</Button>
        </Link>
      </Grid>

    </Grid>
  );
};

export default OnboardingActivitiesPage;

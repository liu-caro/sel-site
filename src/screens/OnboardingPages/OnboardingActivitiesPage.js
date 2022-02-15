import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

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
            {/* images and bars */}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">
            Each SEL pillar has its own page with related activities for your child to practice that specific skill. You can learn about how the activity builds the skill, print out the instructions, watch an instructional video, and track your child&apos;s completion!          
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="text">Skip tutorial</Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Next</Button>
        </Grid>

    </Grid>
  );
};

export default OnboardingActivitiesPage;
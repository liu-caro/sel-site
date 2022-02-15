import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const OnboardingWelcomePage = () => {
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
          <Typography variant="h1">Welcome to your SEL Portal!</Typography>
        </Grid>

        <Grid item xs={12}>
            {/* images and bars */}
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1">
              SEL has 5 main pillars of learning, represented by 5 animals. We provide activities for parents to do with their children to develop SEL skills As your child improves on their skills, they will level up in the related category.
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

export default OnboardingWelcomePage;

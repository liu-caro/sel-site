import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import progressTracker from './../../assets/onboardingImages/progressTracker.svg';
import flashcards from './../../assets/onboardingImages/flashcards.svg';
import { Link } from 'react-router-dom';

const OnboardingPrintablesPage = () => {
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
        <Typography variant="h1">Enhance with printables</Typography>
      </Grid>

      <Grid item xs={12}>
        <img src={progressTracker} alt="progress tracker" height={650} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4">Progress Tracker</Typography>
      </Grid>

      <Grid item xs={12}>
        <img src={flashcards} alt="flashcards" height={650} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4">On-the-Go Activity Flipbook</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          We provide lots of low-cost printable resources that go along with our SEL activities. The home Progress Tracker lets children visually see their progress. The Activity Booklet lets families do activities while travelling. We hope you and your family enjoy growing your SEL skills together!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Link to="/home">
          <Button variant="contained">Get started!</Button>
        </Link>
      </Grid>

    </Grid>
  );
};

export default OnboardingPrintablesPage;

import { Grid, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player'

const RSCountMeDownActivity = () => {
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
          <Typography variant="h2">Count Me Down</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1">Count Me Down is a strategy from Move This World that helps students identify ways they are similar and different from others. The goals are to develop a stronger understanding of peers and to demonstrate respect for differences and exhibit empathy. An example prompt for Count Me Down is as follows:
          <ul>
            <li>3 unique things about your family</li>
            <li>2 challenges you're currently facing</li>
            <li>1 goal or dream you have</li>
          </ul>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Printable Version</Button>
        </Grid>
      
        <Grid item xs={12}>
          <Typography variant="h3">Directions</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1">Ask your child the following questions, one by one:
          <ul>
            <li>3 unique things about your family</li>
            <li>2 challenges you're currently facing</li>
            <li>1 goal or dream you have</li>
          </ul>
          Listen to their answers and discuss with them their thoughts. Ask them to explain their thought process and why they chose their answer(s). Be sure to share your own answers to each of the questions as well.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h3">Instructional Video</Typography>
        </Grid>

        <Grid item xs={12}>
          <ReactPlayer url="https://youtu.be/4S2yj4TB_I8" />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Mark as done!</Button>
        </Grid>
    </Grid>
  );
};

export default RSCountMeDownActivity;

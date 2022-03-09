import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player'

const ActivityPage = ({ title, overviewText, directionsText, videoUrl, buttonCategory }) => {
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
          <Typography variant="h1">{title}</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1"> {overviewText} </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" class={buttonCategory}>Printable Version</Button>
        </Grid>
      
        <Grid item xs={12}>
          <Typography variant="h2">Directions</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1"> {directionsText} </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h2">Instructional Video</Typography>
        </Grid>

        <Grid item xs={12}>
          <ReactPlayer url={videoUrl} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" class={buttonCategory}>Mark as done!</Button>
        </Grid>
    </Grid>
  );
};

export default ActivityPage;

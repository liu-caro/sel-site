import { Grid, Typography, Chip } from "@mui/material";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player';
import ConfettiGenerator from 'confetti-js';
import DolphinSVG from '../assets/sel-animals/DolphinSVG.svg';
import HippoSVG from '../assets/sel-animals/HippoSVG.svg';
import GiraffeSVG from '../assets/sel-animals/GiraffeSVG.svg';
import TurtleSVG from '../assets/sel-animals/TurtleSVG.svg';
import TigerSVG from '../assets/sel-animals/TigerSVG.svg';

const ActivityPage = ({ title, difficulty, time, overviewText, directionsText, videoUrl, buttonCategory }) => {

  const handleClick = (() => {
    const confettiSettings = {
      target: 'my-canvas',
      props: [{ type: 'svg', src: DolphinSVG },
      { type: 'svg', src: HippoSVG },
      { type: 'svg', src: GiraffeSVG },
      { type: 'svg', src: TurtleSVG },
      { type: 'svg', src: TigerSVG }],
      respawn: false,
      clock: 20
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  });

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
          <Typography variant="h1">{title}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Chip label={difficulty} class={chipCategory} />
          <Chip label={time} class={chipCategory} />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1"> {overviewText} </Typography>
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

        <Grid item xs={6}>
          <ReactPlayer url={videoUrl} style={{ maxWidth: '300px'}}/>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" class={buttonCategory}>Mark as done!</Button>
        </Grid>
    </Grid>
  );
};

export default ActivityPage;

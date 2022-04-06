import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player';
import ConfettiGenerator from 'confetti-js';
import DolphinSVG from '../assets/sel-animals/DolphinSVG.svg';
import HippoSVG from '../assets/sel-animals/HippoSVG.svg';
import GiraffeSVG from '../assets/sel-animals/GiraffeSVG.svg';
import TurtleSVG from '../assets/sel-animals/TurtleSVG.svg';
import TigerSVG from '../assets/sel-animals/TigerSVG.svg';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../firebase-config';
import useFirebaseDB from '../hooks/useFirebaseDB';

const confettiSettings = {
  target: 'my-canvas',
  props: [{ type: 'svg', src: DolphinSVG },
  { type: 'svg', src: HippoSVG },
  { type: 'svg', src: GiraffeSVG },
  { type: 'svg', src: TurtleSVG },
  { type: 'svg', src: TigerSVG }],
  respawn: false,
  clock: 100
};


const ActivityPage = ({ title, overviewText, directionsText, videoUrl, buttonCategory }) => {
  const {userActivityCount, updateUserData} = useFirebaseDB();
  const [user] = useAuthState(firebaseAuth);
  const [canvasDisplay, setCanvasDisplay] = useState('none');

  const handleClick = (() => {
    setCanvasDisplay('block');

  const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    if (user) {
      updateUserData(user.uid, userActivityCount);
    }
    setTimeout(()=>{
      confetti.clear(); 
      setCanvasDisplay('none');
    }, 1000);
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
       <canvas id='my-canvas' style={{ position: 'absolute', display: canvasDisplay }} /> 

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

      <Grid item xs={6}>
        <ReactPlayer url={videoUrl} style={{ maxWidth: '300px' }} />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={handleClick} variant="contained" class={buttonCategory}>Mark as done!</Button>
      </Grid>
    </Grid>
  );
};

export default ActivityPage;

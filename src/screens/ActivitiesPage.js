import { Grid, Typography } from '@mui/material';
import { LinearProgressWithLabel } from '../components/LinearProgressWithLabel';
import SelCard from '../components/SelCard';
import { useState } from 'react';
import DolphinPNG from '../assets/sel-animals/DolphinPNG.png';
import HippoPNG from '../assets/sel-animals/HippoPNG.png';
import GiraffePNG from '../assets/sel-animals/GiraffePNG.png';
import TurtlePNG from '../assets/sel-animals/TurtlePNG.png';
import TigerPNG from '../assets/sel-animals/TigerPNG.png';

const ActivitiesPage = () => {

  const [progress, setProgress] = useState(60);
  const [signin, setSignin] = useState(true);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={8}
    >
      
      {signin ?
        <Grid item xs={12}>
          <Typography variant="subtitle2" align='center'>Please complete 5 activities for the month</Typography>
          <LinearProgressWithLabel variant='determinate' value={progress} />
        </Grid>
        :
        <Grid item xs={12}>
          <Typography variant="subtitle2" align='center'>Please sign in to have your activity progress save!</Typography>
        </Grid>
      }

      <Grid item xs={12}>
        <Typography variant="h1" align='center'>SEL Activities by Skill Category</Typography>
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          animal={TurtlePNG}
          title={'Responsible Decision Making'}
          description={'Understanding how our decisions can impact others and ourselves'}
          color={'#00A87D40'}
          internalLink={'/responsible-decision-making'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          animal={DolphinPNG}
          title={'Self Awareness'}
          description={'Understanding one’s own emotions, thoughts, and values and how they influence behavior across contexts'}
          color={'#82CDED40'}
          internalLink={'/self-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          animal={GiraffePNG}
          title={'Social Awareness'}
          description={'Understanding the perspectives of others and empathize (including those from a differing backgrounds to one’s own)'}
          color={'#FBBD3340'}
          internalLink={'/social-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          animal={TigerPNG}
          title={'Relationship Skills'}
          description={'Establishing and maintaining healthy and supportive relationships to navigate settings with diverse individuals and groups'}
          color={'#FEE9E5'}
          internalLink={'/relationship-skills'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          animal={HippoPNG}
          title={'Self Management'}
          description={'Managing one’s emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations.'}
          color={'#592DB540'}
          internalLink={'/self-management'} />
      </Grid>

    </Grid>
  );
};

export default ActivitiesPage;

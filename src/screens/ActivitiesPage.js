import { Grid, Typography } from '@mui/material';
import { LinearProgressWithLabel } from '../components/LinearProgressWithLabel';
import SelCard from '../components/SelCard';
import { useState } from 'react';

const ActivitiesPage = () => {

  const [progress, setProgress] = useState(60);

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
        <Typography variant="subtitle2" align='center'>Please complete 5 activities for the month</Typography>
        <LinearProgressWithLabel variant='determinate' value={progress}/>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h1" align='center'>SEL Activities by Skill Category</Typography>
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Responsible Decision Making'}
          description={'Understanding how our decisions can impact others and ourselves'}
          color={'#00A87D40'}
          internalLink={'/responsible-decision-making'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Self Awareness'}
          description={'Understanding one’s own emotions, thoughts, and values and how they influence behavior across contexts'}
          color={'#82CDED40'}
          internalLink={'/self-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Social Awareness'}
          description={'Understanding the perspectives of others and empathize (including those from a differing backgrounds to one’s own)'}
          color={'#FBBD3340'}
          internalLink={'/social-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Relationship Skills'}
          description={'Establishing and maintaining healthy and supportive relationships to navigate settings with diverse individuals and groups'}
          color={'#FEE9E5'}
          internalLink={'/relationship-skills'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Self Management'}
          description={'Managing one’s emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations.'}
          color={'#592DB540'}
          internalLink={'/self-management'} />
      </Grid>

    </Grid>
  );
};

export default ActivitiesPage;

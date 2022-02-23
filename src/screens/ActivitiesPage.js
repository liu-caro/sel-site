import { Grid, Typography } from '@mui/material';
import SelCard from '../components/SelCard';

const ActivitiesPage = () => {
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
        <Typography variant="h2" align='center'>SEL Activities by Skill Category</Typography>
      </Grid>

      <Grid item m={1}>
        <SelCard
          title={'Responsible Decision Making'}
          description={'Understanding how our decisions can impact others and ourselves'} 
          progress={72} />
      </Grid>

      <Grid item m={1}>
        <SelCard
          title={'Self Awareness'}
          description={'Understanding one’s own emotions, thoughts, and values and how they influence behavior across contexts'} 
          progress={52} />
      </Grid>

      <Grid item m={1}>
        <SelCard
          title={'Social Awareness'}
          description={'Understanding the perspectives of others and empathize (including those from a differing backgrounds to one’s own)'} 
          progress={32} />
      </Grid>

      <Grid item m={1}>
        <SelCard
          title={'Relationship Skills'}
          description={'Establishing and maintaining healthy and supportive relationships to navigate settings with diverse individuals and groups'} 
          progress={92} />
      </Grid>

      <Grid item m={1}>
        <SelCard
          title={'Self Management'}
          description={'Managing one’s emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations.'} 
          progress={12} />
      </Grid>

    </Grid>
  );
};

export default ActivitiesPage;

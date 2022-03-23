import { Grid, Typography } from '@mui/material';
import SelCard from '../components/SelCard';

// this page might have to be renamed
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
        <Typography variant="h1" align='center'>SEL Activities by Skill Category</Typography>
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Responsible Decision Making'}
          description={'Understanding how our decisions can impact others and ourselves'} 
          progress={72}
          color={'#00A87D40'} 
          internalLink={'/categories/responsible-decision-making'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Self Awareness'}
          description={'Understanding one’s own emotions, thoughts, and values and how they influence behavior across contexts'} 
          progress={52}
          color={'#82CDED40'} 
          internalLink={'/categories/self-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Social Awareness'}
          description={'Understanding the perspectives of others and empathize (including those from a differing backgrounds to one’s own)'} 
          progress={32}
          color={'#FBBD3340'} 
          internalLink={'/categories/social-awareness'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Relationship Skills'}
          description={'Establishing and maintaining healthy and supportive relationships to navigate settings with diverse individuals and groups'} 
          progress={92}
          color={'#FEE9E5'}
          internalLink={'/categories/relationship-skills'} />
      </Grid>

      <Grid item xs={12} md={6} m={2}>
        <SelCard
          title={'Self Management'}
          description={'Managing one’s emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations.'} 
          progress={12}
          color={'#592DB540'} 
          internalLink={'/categories/self-management'} />
      </Grid>

    </Grid>
  );
};

export default ActivitiesPage;

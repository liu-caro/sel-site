import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      px={3}>
      
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt={2}
      style={{ 
        backgroundImage: `url("https://www.nysut.org/~/media/images/nysut/news/2020/march/news_200326_parents_02.jpg?h=693&la=en&w=1200")`,
        backgroundSize: 'cover',
        minHeight: '300px'}}>

        <Grid item xs={12} pb={2}> 
          <Typography variant="h2" align='center'>Social Emotional Learning (SEL)</Typography>
          <Typography variant="h6" align='center'>Guiding Your Child to Academic Success</Typography>
        </Grid>

        <Grid item xs={12} my={3}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" class="landingOnboardingButton">Sign up / Log in</Button>
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12} mt={3}>
        <Card style={{ backgroundColor: '#00A87D40' }}> 
          <CardContent>
            <Typography variant="h6">What is SEL?</Typography>
            <Typography variant="paragraph">
              Social Emotional Learning (SEL) is the developmental process of improving social and emotional competencies
              to support the formation and maintenance of intrapersonal and interpersonal relationships through the recognition,
              understanding, and management of emotions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} mt={3}>
        <Card style={{ backgroundColor: '#FBBD3340' }}> 
          <CardContent>
            <Typography variant="h6">Why is SEL important for your child?</Typography>
            <Typography variant="paragraph">
              Learning SEL skills improves the ways young children treat themselves and others. Children learn how to better
              navigate the people and environment around them, leading to academic success, less emotional distress, and
              positive social behavior.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} my={3}>
        <Card style={{ backgroundColor: '#FEE9E5' }}> 
          <CardContent>
            <Typography variant="h6">How can we help?</Typography>
            <Typography variant="paragraph">
              We use a combination of digital and physical platforms to support parents in building SEL skills with their children.
              Our mobile site allows parents to lead SEL activities on-the-go while our printable materials such as the activity booklet
              and skill tracker help children take charge of their learning journey.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default LandingPage;
